import React from "react";
import Products from './Products';

const Styling = (): JSX.Element => {
return (
    <div>
    {/* STYLING */}
    <h1 className="title">STYLING</h1>
    <div className="styling_Box">
        {Array.from({ length: 4 }, (_, index) => (
        <img
            key={index}
            src={`/img/main_page/styling/${index + 1 < 10 ? "00" : "0"}${
            index + 1
            }.jpg`}
            alt={`Styling ${index + 1}`}
        />
        ))}
    </div>
    </div>
);
};

export default Styling;
