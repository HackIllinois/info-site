import React from "react";
import styles from "./Container.module.scss";

interface ContainerProps {
    children: React.ReactNode;
    style?: any;
}

const Container: React.FC<ContainerProps> = ({ children, style }) => {
    return (
        <div className={styles.container} style={style}>
            {children}
        </div>
    );
};

export default Container;
