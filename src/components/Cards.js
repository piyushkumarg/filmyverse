import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { moviesRef } from "../firebase/firebase";
import { Link } from "react-router-dom";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(moviesRef);
      // console.log(_data);
      _data.forEach((doc) => {
        setData((prev) => [...prev, { ...doc.data(), id: doc.id }]);
      });

      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div className="flex flex-wrap  justify-center p-3 mt-2">
      {loading ? (
        <div className=" h-96 flex justify-center items-center ">
          <ThreeDots />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            <Link to={`/detail/${e.id}`}>
              <div
                key={i}
                className="text-xs md:text-base flex flex-col card font-medium bg-[#353b48] rounded-lg shadow-lg p-1 md:p-2 mr-0.5 md:mr-2 mt-5 transition all delay-500 hover:-translate-y-1 hover:scale-105 cursor-pointer border-b-2 border-[#7f8fa6]  "
              >
                <img
                  className=" h-56 md:h-72  rounded-lg"
                  src={e.image}
                  alt=""
                />
                <h1>
                  <span className="text-[#8d9db3]  ">Name:</span> {e.title}
                </h1>
                <h1 className="flex items-center">
                  <span className="text-[#8d9db3] mr-1">Rating:</span>
                  <ReactStars
                    size={20}
                    half={true}
                    value={e.rating / e.rated}
                    edit={false}
                  />
                </h1>
                <h1>
                  <span className="text-[#8d9db3]">Year:</span> {e.year}
                </h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;
