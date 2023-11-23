import React from "react";

interface SubSliderProps {
    i: number
}

const SubSlider: React.FC<SubSliderProps> = (props) => {
    return (
        <div className="main_itembox">
                <img src={"/img/" + props.i + ".jpg"} width="80%" alt={`Item1 ${props.i}`} />
        </div>
    );
};

export default SubSlider;