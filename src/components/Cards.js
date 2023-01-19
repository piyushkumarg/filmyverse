import React, { useState } from "react";
import ReactStars from "react-stars";

const Cards = () => {
  const [data, setData] = useState([
    {
      name: "Avengers Endgame",
      year: "2018",
      rating: 5,
      img: "https://m.media-amazon.com/images/I/71niXI3lxlL._SY741_.jpg",
    },
    {
      name: "Avengers Infinity War",
      year: "2019",
      rating: 5,
      img: "https://m.media-amazon.com/images/I/91fK1KIv66L._SX466_.jpg",
    },
    {
      name: "Dora ",
      year: "2019",
      rating: 5,
      img: "https://cdn.shopify.com/s/files/1/0969/9128/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_66c87e56-24a2-4135-b709-a6b98a7f7bce_large.jpg?v=1577693664",
    },
    {
      name: "Harry Potter",
      year: "2007",
      rating: 5,
      img: "https://m.media-amazon.com/images/I/71x1RHSaEhL._AC_SY679_.jpg",
    },
    {
      name: "Alladin",
      year: "2019",
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/51HWM75aa2L._AC_SY580_.jpg",
    },
    {
      name: "Dora ",
      year: "2019",
      rating: 3.5,
      img: "https://cdn.shopify.com/s/files/1/0969/9128/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_66c87e56-24a2-4135-b709-a6b98a7f7bce_large.jpg?v=1577693664",
    },
    {
      name: "Harry Potter",
      year: "2007",
      rating: 5,
      img: "https://m.media-amazon.com/images/I/71x1RHSaEhL._AC_SY679_.jpg",
    },
    {
      name: "Alladin",
      year: "2019",
      rating: 5,
      img: "https://m.media-amazon.com/images/I/51HWM75aa2L._AC_SY580_.jpg",
    },
  ]);

  return (
    <div className="flex flex-wrap  justify-center p-3 mt-2">
      {data.map((e, i) => {
        return (
          <div
            key={i}
            className=" flex flex-col card font-medium shadow-lg p-2 mt-5 transition all delay-500 hover:-translate-y-1 hover:scale-110 cursor-pointer "
          >
            <img className="h-60 md:h-72 rounded" src={e.img} alt="" />
            <h1>
              <span className="text-[#8d9db3]">Name:</span> {e.name}
            </h1>
            <h1 className="flex items-center">
              <span className="text-[#8d9db3] mr-1">Rating:</span>
              <ReactStars size={20} half={true} value={e.rating} edit={false} />
            </h1>
            <h1>
              <span className="text-[#8d9db3]">Year:</span> {e.year}
            </h1>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
