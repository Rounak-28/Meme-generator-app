import React, { useEffect, useState } from "react";
import fakeAPIData from "../fakeAPIData.json"

export default function Meme() {
  const [memeData, setMemeData] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

//   const [meme, setMeme] = useState([]);
  const [memeJSON, setMemeJSON] = useState(fakeAPIData);


  function handleChange(event) {
    setMemeData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function handleClick() {
    const meme = memeJSON.data.memes
    const randomUrl = meme[Math.floor(Math.random() * meme.length)].url;
    setMemeData((prevImg) => ({
      ...prevImg,
      randomImage: randomUrl,
    }));
  }


//   useEffect(function () {
//     fetch("https://api.imgflip.com/get_memes")
//       .then((prev) => prev.json())
//       .then((data) => setMeme(data.data.memes));
//   }, []);





  
  return (
    <>
      <div className="inputs space-x-4 flex justify-evenly my-6">
        <input
          className="w-36 rounded-md border-[1px] border-black indent-2 text-sm bg-fuchsia-100"
          type="text"
          placeholder="Top line"
          onChange={handleChange}
          name="topText"
          value={memeData.topText}
        />

        <input
          className="w-36 rounded-md border-[1px] border-black indent-2 text-sm bg-fuchsia-100"
          type="text"
          placeholder="Bottom line"
          onChange={handleChange}
          name="bottomText"
          value={memeData.bottomText}
        />
      </div>
      <div className="button w-full flex justify-center items-center">
        <button className="w-[80%] bg-[#b432f0] hover:bg-[#ad4fd8] text-white rounded-md py-1 transition ease-in-out delay-150  hover:scale-105 duration-300" onClick={handleClick}>
          Get a new meme image
        </button>
      </div>
      <div className="memeImg m-1 mt-10 relative">
        <img
          className="max-w-full rounded"
          src={memeData.randomImage}
          alt="idk"
        />
        <div className="flex justify-center">
          <p className="absolute top-0 text-white text-2xl font-extrabold textShadow">
            {memeData.topText.toUpperCase()}
          </p>
          <p className="absolute bottom-0 text-white text-2xl font-extrabold textShadow">
            {memeData.bottomText.toUpperCase()}
          </p>
        </div>
      </div>
    </>
  );
}
