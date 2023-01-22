import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import { db } from "../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { ThreeCircles } from "react-loader-spinner";
import Reviews from "./Reviews";

const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState({
    title: "",
    year: "",
    image: "",
    description: "",
    rating: 0,
    rated: 0,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _doc = doc(db, "movies", id);
      const _data = await getDoc(_doc);
      setData(_data.data());
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="p-4 mt-4 flex flex-col md:flex-row items-center md:items-start w-full justify-center">
      {loading ? (
        <div className="h-96 flex w-full justify-center items-center">
          <ThreeCircles />
        </div>
      ) : (
        <>
          <img
            className="h-96 block md:sticky top-24 rounded-lg "
            src={data.image}
          />

          <div className="md:ml-4 ml-0 w-full md:w-1/2">
            <h1 className="text-3xl font-bold text-[#b0bfd5]">
              {data.title} <span className="text-xl">{data.year}</span>
            </h1>

            <ReactStars
              size={20}
              half={true}
              value={data.rating / data.rated}
              edit={false}
            />

            <p className="mt-2  bg-[#353b48] shadow-xl p-2 rounded-lg">
              {data.description}
            </p>

            <Reviews id={id} prevRating={data.rating} userRated={data.rated} />
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
