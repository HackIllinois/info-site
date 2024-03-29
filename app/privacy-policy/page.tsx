import Container from "@/components/Container/Container";
import styles from "./page.module.scss";
import { data } from "@/modules/PrivacyPolicyData";
import { Metadata } from "next";
import Highlighter from "@/components/Highlighter/Highlighter";

export const metadata: Metadata = {
    title: "HackIllinois | Privacy Policy"
};

type privacyPolicy = {
    title: string;
    description: string[];
    points: privacyPolicyPoints[];
    lastUpdatedOn: string;
};

type privacyPolicyPoints = {
    title: string;
    description: string;
    subPoints: privacyPolicySubPoints[];
};

type privacyPolicySubPoints = {
    title: string;
    description: string[];
};

const PrivacyPolicy = () => {
    return (
        <div className={styles.privacyPolicy}>
            <Container compact>
                {data.map((privacyPolicy: privacyPolicy) => (
                    <div>
                        <h1 className={styles.mainTitle}>
                            {privacyPolicy.title}
                        </h1>
                        <div className={styles.mainDescriptionContainer}>
                            {privacyPolicy.description.map((el: string) => (
                                <p className={styles.mainDescription}>{el}</p>
                            ))}
                        </div>
                        <div className={styles.pointsContainer}>
                            {privacyPolicy.points.map(
                                (privacyPolicyPoint: privacyPolicyPoints) => (
                                    <div className={styles.point}>
                                        <span className={styles.pointTitle}>
                                            {privacyPolicyPoint.title}
                                        </span>
                                        <p className={styles.pointDescription}>
                                            {privacyPolicyPoint.description}
                                        </p>
                                        {privacyPolicyPoint.subPoints.length >
                                            0 && (
                                            <div
                                                className={
                                                    styles.subPointsContainer
                                                }
                                            >
                                                {privacyPolicyPoint.subPoints.map(
                                                    (
                                                        privacyPolicySubpoint: privacyPolicySubPoints
                                                    ) => (
                                                        <div
                                                            className={
                                                                styles.subPoint
                                                            }
                                                        >
                                                            <span
                                                                className={
                                                                    styles.subPointTitle
                                                                }
                                                            >
                                                                {
                                                                    privacyPolicySubpoint.title
                                                                }
                                                            </span>
                                                            <ul>
                                                                {privacyPolicySubpoint.description.map(
                                                                    (
                                                                        el: string
                                                                    ) => (
                                                                        <li
                                                                            className={
                                                                                styles.subPointDescription
                                                                            }
                                                                            dangerouslySetInnerHTML={{__html: el}}
                                                                        >
                                                                           
                                                                        </li>
                                                                    )
                                                                )}
                                                            </ul>
                                                        </div>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                        <div className={styles.lastUpdated}>
                            <span>Last Updated:</span>
                            <span>{privacyPolicy.lastUpdatedOn}</span>
                        </div>
                    </div>
                ))}
            </Container>
            <div className={styles.background}>
                <img
                    src="/privacyPolicy/background-left.svg"
                    className={styles.backgroundLeft}
                />
                <img
                    src="/privacyPolicy/background-right.svg"
                    className={styles.backgroundLeft}
                />
            </div>
        </div>
    );
};

export default PrivacyPolicy;
