import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "HackIllinois | Join Us"
};

const JoinUs = () => {
    redirect("https://forms.gle/Z6b8qENzvcCyXxTt8");
};

export default JoinUs;
