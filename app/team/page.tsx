import React from "react";
import Team from "@/components/Team/Team";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'HackIllinois | Team',
}

type team = {
    teamName: string;
    teamMembers: teamMember[];
};

type teamMember = {
    name: string;
    position: string;
    funFact: string;
    photo: string;
    emoji: string;
};

const Page = () => {
    return (
        <>
            <Team />
        </>
    );
};

export default Page;
