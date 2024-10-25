"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Select.module.scss";

type SelectProps = {
    options: readonly string[];
    titleStyle: string;
    optionStyle: string;
    selectedStyle: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
};

const Select: React.FC<SelectProps> = ({
    options,
    titleStyle,
    optionStyle,
    selectedStyle,
    setSelected
}) => {
    const [selected, setInnerSelected] = useState(options[0]);
    const [open, setOpen] = useState(false);

    const dropdownRef = useRef<HTMLDivElement | null>(null);

    const closeMenu = (event: MouseEvent) => {
        if (dropdownRef.current && open && !dropdownRef.current.contains(event.target as Node)) {
            setOpen(false);
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", closeMenu);
        return () => {
            document.removeEventListener("mousedown", closeMenu);
        }
    }, [open]);

    return (
        <div className={styles.select}>
            <button
                onClick={() => setOpen(previous => !previous)}
                className={`${styles.dropdownBtn} ${
                    open ? styles.openSelect : ""
                }`}
            >
                <h1 className={titleStyle}>{selected}</h1>
            </button>
            <div ref={dropdownRef} className={`${styles.dropdown} ${open ? styles.show : styles.hide}`}>
                {options.map((option, index) => (
                    <>
                        <button
                            key={option}
                            onClick={() => {
                                setInnerSelected(option);
                                setSelected(option);
                                setOpen(false);
                            }}
                            className={
                                option === selected ? selectedStyle : optionStyle
                            }
                        >
                            <p>{option}</p>
                        </button>
                        {(index === 0) ? <hr/> : <></>}
                    </>

                ))}
            </div>
        </div>
    );
};

export default Select;
