"use client";
import React, { useState } from "react";
import styles from "./Select.module.scss";

type SelectProps = {
    currOption: string;
    prevOptions: string[];
    titleStyle: string;
    optionStyle: string;
    selectedStyle: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>
}

const Select: React.FC<SelectProps> = ({ currOption, prevOptions, titleStyle, optionStyle, selectedStyle, setSelected }) => {
    const [selected, setInnerSelected] = useState(currOption);
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
                <div className={styles.divider}>Current</div>
                <button
                    key={currOption}
                    onClick={() => {
                        setInnerSelected(currOption);
                        setSelected(currOption);
                        setOpen(false);
                    }}
                    className={currOption === selected ? selectedStyle : optionStyle}
                >
                    <p>{currOption}</p>
                </button>
                <div className={`${styles.divider} ${styles.midDivider}`}>Previous</div>
                {prevOptions.map((option) => (
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
