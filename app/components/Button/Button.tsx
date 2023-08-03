import styles from "./Button.module.scss";

interface ButtonProps {
    backgroundColor: string;
    textColor: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({
    backgroundColor,
    textColor,
    text
}) => {
    return (
        <button
            className={styles.button}
            style={{ backgroundColor: backgroundColor, color: textColor }}
        >
            <span className={styles.text}>{text}</span>
        </button>
    );
};

export default Button;
