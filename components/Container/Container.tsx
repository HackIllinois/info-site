import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    children: React.ReactNode;
    style?: any;
    compact?: boolean;
}

const defaultProps = {
    compact: false
};

const Container: React.FC<ContainerProps> = ({ children, style, compact }) => {
    return (
        <div
            className={compact ? styles.compactContainer : styles.container}
            style={style}
        >
            {children}
        </div>
    );
};

Container.defaultProps = defaultProps;

export default Container;
