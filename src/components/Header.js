import React from "react";

export default function Header() {
    return(
        <div className="flex justify-between headerColor h-16 items-center">
            <img className="w-12 hover:w-14 m-5 transition duration-300" src={require("../images/Troll Face.png")} alt="" />
            <h1 className="m-5 font-semibold text">Meme Generator</h1>
        </div>
    )
};
