export const listOfPreviousHacks = [
    {
        name: "2017",
        image: "/history/previousHacks/2017.svg",
        link: "https://2017.hackillinois.org"
    },
    {
        name: "2018",
        image: "/history/previousHacks/2018.svg",
        link: "https://2018.hackillinois.org"
    },
    {
        name: "2019",
        image: "/history/previousHacks/2019.svg",
        link: "https://2019.hackillinois.org"
    },
    {
        name: "2020",
        image: "/history/previousHacks/2020.svg",
        link: "https://2020.hackillinois.org"
    },
    {
        name: "2021",
        image: "/history/previousHacks/2021.svg",
        link: "https://2021.hackillinois.org"
    },
    {
        name: "2022",
        image: "/history/previousHacks/2022.svg",
        link: "https://2022.hackillinois.org/"
    },
    {
        name: "2023",
        image: "/history/previousHacks/2023.svg",
        link: "https://2023.hackillinois.org"
    },
    {
        name: "2024",
        image: "/history/previousHacks/2024.svg",
        link: "https://2024.hackillinois.org"
    },
    {
        name: "2025",
        image: "/history/previousHacks/2025.svg",
        link: "https://hackillinois.org"
    }
];

export const listOfPreviousHacksPaired = listOfPreviousHacks.reduce(
    (acc, hack, index) => {
        if (index % 2 === 0) {
            acc.push([hack]);
        } else {
            acc[acc.length - 1].push(hack);
        }
        return acc;
    },
    [] as { name: string; image: string; link: string }[][]
);
