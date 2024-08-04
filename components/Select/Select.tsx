"use client";
import { useState } from "react";
import styles from "./Select.module.scss";

type SelectProps = {
    options: string[];
    titleStyle: string;
    optionStyle: string;
    selectedStyle: string;
}

const Select: React.FC<SelectProps> = ({ options, titleStyle, optionStyle, selectedStyle }) => {
    const [selected, setSelected] = useState(options.at(0));
    const [open, setOpen] = useState(false);

    return (
            <div className={styles.select}>
                <button
                    onClick={() => setOpen(previous => !previous)}
                    className={`${styles.dropdownBtn} ${open ? styles.openSelect: ''}`}
                >
                    <div className={titleStyle}>{selected}</div>
                </button>
                <div className={styles.dropdown} style={{opacity: open ? 1 : 0, transform: "translateY(100%)"}}>
                    {options.map(option => (
                        <button
                            key={option}
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                            className={option === selected ? selectedStyle : optionStyle}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>
    );
};

export default Select;
