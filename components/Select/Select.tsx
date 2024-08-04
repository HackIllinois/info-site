"use client";
import { useState } from "react";
import styles from "./Select.module.scss";

type SelectProps = {
    options: string[];
}

const Select: React.FC<SelectProps> = ({ options }) => {
    const [selected, setSelected] = useState(options.at(0));
    const [open, setOpen] = useState(false);

    return (
            <div className={`${styles.select} ${open ? styles.openSelect: ''}`}>
                <button
                    onClick={() => setOpen(previous => !previous)}
                    className={styles.dropdownBtn}
                >
                    <h1>{selected}</h1>
                </button>
                <div className={styles.dropdown}>
                    {options.map(option => (
                        <div
                            key={option}
                            onClick={() => {
                                setSelected(option);
                                setOpen(false);
                            }}
                        >
                            <p>{option}</p>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default Select;
