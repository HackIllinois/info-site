"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.scss";

export type JobPosting = {
    _id: string;
    companyName: string;
    logoUrl: string;
    jobTitle: string;
    jobDescription: string;
    applicationUrl: string;
};

type JobOpportunityCardProps = {
    posting: JobPosting;
};

const DESCRIPTION_PREVIEW_LENGTH = 180;

const Company = ({ posting }: JobOpportunityCardProps) => (
    <div className={styles.company}>
        <div className={styles.logoWrapper}>
            <img
                src={posting.logoUrl}
                alt={`${posting.companyName} logo`}
                className={styles.logo}
            />
        </div>
        <span>{posting.companyName}</span>
    </div>
);

const ApplyButton = ({ posting }: JobOpportunityCardProps) => (
    <a
        href={posting.applicationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.applyButton}
    >
        Apply now
        <span aria-hidden="true">↗</span>
    </a>
);

const JobOpportunityCard = ({ posting }: JobOpportunityCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const closeButtonRef = useRef<HTMLButtonElement>(null);
    const readMoreButtonRef = useRef<HTMLButtonElement>(null);
    const titleId = `job-title-${posting._id}`;
    const descriptionId = `job-description-${posting._id}`;
    const hasLongDescription =
        posting.jobDescription.length > DESCRIPTION_PREVIEW_LENGTH;

    useEffect(() => {
        if (!isModalOpen) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsModalOpen(false);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", handleKeyDown);
            readMoreButtonRef.current?.focus();
        };
    }, [isModalOpen]);

    return (
        <>
            <article className={styles.card}>
                <Company posting={posting} />

                <div className={styles.cardContent}>
                    <h2>{posting.jobTitle}</h2>
                    <p className={styles.descriptionPreview}>
                        {posting.jobDescription}
                    </p>
                    {hasLongDescription && (
                        <button
                            type="button"
                            className={styles.readMoreButton}
                            ref={readMoreButtonRef}
                            onClick={() => setIsModalOpen(true)}
                        >
                            Read more
                        </button>
                    )}
                </div>

                <ApplyButton posting={posting} />
            </article>

            {isModalOpen && (
                <div
                    className={styles.modalBackdrop}
                    onMouseDown={event => {
                        if (event.target === event.currentTarget) {
                            setIsModalOpen(false);
                        }
                    }}
                >
                    <section
                        className={styles.modal}
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        aria-describedby={descriptionId}
                    >
                        <div className={styles.modalHeader}>
                            <Company posting={posting} />
                            <button
                                type="button"
                                className={styles.closeButton}
                                ref={closeButtonRef}
                                onClick={() => setIsModalOpen(false)}
                                aria-label="Close job details"
                            >
                                ×
                            </button>
                        </div>

                        <div className={styles.modalContent}>
                            <h2 id={titleId}>{posting.jobTitle}</h2>
                            <p id={descriptionId}>{posting.jobDescription}</p>
                        </div>

                        <div className={styles.modalFooter}>
                            <ApplyButton posting={posting} />
                        </div>
                    </section>
                </div>
            )}
        </>
    );
};

export default JobOpportunityCard;
