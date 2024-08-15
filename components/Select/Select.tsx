"use client";
import React, { useState } from "react";
import styles from "./Select.module.scss";

type SelectProps = {
    options: string[];
    titleStyle: string;
    optionStyle: string;
    selectedStyle: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const Select: React.FC<SelectProps> = ({ options, titleStyle, optionStyle, selectedStyle, setSelected }) => {
    const [selected, setInnerSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.select}>
            <button
                onClick={() => setOpen(previous => !previous)}
                className={`${styles.dropdownBtn} ${open ? styles.openSelect : ''}`}
            >
                <h1 className={titleStyle}>{selected}</h1>
            </button>
            <div className={styles.dropdown} style={{ opacity: open ? 1 : 0 }}>
                {options.map((option) => (
                    <button
                        key={option}
                        onClick={() => {
                            setInnerSelected(option);
                            setSelected(option);
                            setOpen(false);
                        }}
                        className={option === selected ? selectedStyle : optionStyle}
                    >
                        <p>{option}</p>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Select;
