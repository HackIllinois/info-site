import { Metadata } from "next";
import JobOpportunityCard, { JobPosting } from "./JobOpportunityCard";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "HackIllinois | Job Opportunities",
    description: "Explore job opportunities from the HackIllinois community."
};

export const dynamic = "force-dynamic";

type JobPostingsResult =
    | { status: "success"; postings: JobPosting[] }
    | { status: "error"; postings: [] };

async function getJobPostings(): Promise<JobPostingsResult> {
    try {
        const response = await fetch("https://adonix.hackillinois.org/job/", {
            cache: "no-store"
        });

        if (!response.ok) {
            throw new Error(`Job API responded with ${response.status}`);
        }

        const postings: unknown = await response.json();

        if (!Array.isArray(postings)) {
            throw new Error("Job API returned an unexpected response");
        }

        return { status: "success", postings: postings as JobPosting[] };
    } catch (error) {
        console.error("Unable to load job opportunities", error);
        return { status: "error", postings: [] };
    }
}

const JobOpportunities = async () => {
    const result = await getJobPostings();

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <h1>Job Opportunities</h1>
                    <p>
                        Discover roles from companies in the HackIllinois
                        community and find your next opportunity.
                    </p>
                </div>
                <div className={styles.heroDecoration} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                </div>
            </section>

            <section className={styles.opportunities} aria-live="polite">
                {result.status === "error" ? (
                    <div className={styles.message}>
                        <h2>We couldn&apos;t load the opportunities.</h2>
                        <p>Please refresh the page or check back again soon.</p>
                    </div>
                ) : result.postings.length === 0 ? (
                    <div className={styles.message}>
                        <h2>No open roles right now</h2>
                        <p>
                            New opportunities will appear here as they become
                            available. Check back soon!
                        </p>
                    </div>
                ) : (
                    <div className={styles.grid}>
                        {result.postings.map(posting => (
                            <JobOpportunityCard
                                posting={posting}
                                key={posting._id}
                            />
                        ))}
                    </div>
                )}
            </section>
        </main>
    );
};

export default JobOpportunities;
