import React, { useState } from "react";
import "./style.css";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
export const Slidermenu = (props: any) => {
    const [value, setValue] = useState<number>(30);
    const handleChange = (event: Event, newValue: number | number[]) => {
        if (typeof newValue === "number") {
            setValue(newValue);
        }
    };
    const valueLabelFormat = (value: number) => {
        return `${value}`;
    };
    const calculate = (value: number) => {
        return value;
    };
    return (
        <div className="slider-container">
            <Typography
                id="non-linear-slider"
                className="sliderwraptitle"
                gutterBottom
            >
                {valueLabelFormat(calculate(value))} days
            </Typography>
            <Slider
                className="dayslider"
                value={value}
                min={1}
                step={1}
                max={365}
                scale={calculate}
                getAriaValueText={valueLabelFormat}
                valueLabelFormat={valueLabelFormat}
                onChange={handleChange}
                defaultValue={30}
                valueLabelDisplay="auto"
                aria-labelledby="non-linear-slider"
            />
        </div>
    );
};
