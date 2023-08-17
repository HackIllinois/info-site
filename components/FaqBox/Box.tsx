"use client";
import "./Box.scss";
import { useState } from "react";

const Box = ({ title, description }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className="box-main">
            <div className="title" onClick={() => setOpen(!open)}>
                <div className="toggle">
                    <div
                        className={
                            open
                                ? "circle-plus closed opened"
                                : "circle-plus closed"
                        }
                        onClick={() => setOpen(!open)}
                    >
                        <div className="circle">
                            <div className="line horizontal"></div>
                            <div className="line vertical"></div>
                        </div>
                    </div>
                </div>
                <p className="title-text">{title}</p>
            </div>
            <div className={open ? "description opened" : "description"}>
                <p
                    dangerouslySetInnerHTML={{ __html: description }}
                    className={"description-text"}
                ></p>
            </div>
        </div>
    );
};

export default Box;
