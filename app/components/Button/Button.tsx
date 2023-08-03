"use client";
import { useRouter } from "next/navigation";
import styles from "./Button.module.scss";

interface ButtonProps {
    backgroundColor: string;
    textColor: string;
    text: string;
    navigateTo: string;
}

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    textColor,
    text,
    navigateTo
}) => {
    const router = useRouter();

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push(navigateTo);
    };
    return (
        <button
            onClick={handleOnClick}
            className={styles.button}
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span className={styles.text}>{text}</span>
        </button>
    );
};

export default Button;
