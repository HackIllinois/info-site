import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "HackIllinois | Join Us"
};

const JoinUs = () => {
    redirect("https://forms.gle/hkc5qRqC1yXv1jgR9");
};

export default JoinUs;
