import React, { useEffect, useState, useContext } from "react";
import ReactStars from "react-stars";
import { reviewsRef, db } from "../firebase/firebase";
import {
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { TailSpin, ThreeDots } from "react-loader-spinner";
import swal from "sweetalert";
import { Appstate } from "../App";
import { useNavigate } from "react-router-dom";

const Reviews = ({ id, prevRating, userRated }) => {
  const useAppstate = useContext(Appstate);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);
  const [form, setForm] = useState("");
  const [data, setData] = useState([]);
  const [newAdded, setNewAdded] = useState(0);

  const sendReview = async () => {
    setLoading(true);
    try {
      if (useAppstate.signin) {
        await addDoc(reviewsRef, {
          movieid: id,
          name: useAppstate.userName,
          rating: rating,
          thought: form,
          timestamp: new Date().getTime(),
        });
        const ref = doc(db, "movies", id);
        await updateDoc(ref, {
          rating: prevRating + rating,
          rated: userRated + 1,
        });

        setRating(0);
        setForm("");
        setNewAdded(newAdded + 1);

        swal({
          title: "Review Added",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
      } else {
        navigate("/signin");
      }
    } catch (error) {
      swal({
        title: error.message,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    async function getData() {
      setReviewsLoading(true);
      setData([]);
      let quer = query(reviewsRef, where("movieid", "==", id));
      const querySnapshot = await getDocs(quer);

      querySnapshot.forEach((doc) => {
        setData((prev) => [...prev, doc.data()]);
      });

      setReviewsLoading(false);
    }
    getData();
    // console.log(data);
  }, [newAdded]);

  return (
    <div className="mt-2 w-full">
      <p className="mt-5 p-1 border-b-2 border-[#353b48] shadow-lg rounded-xl">
        Comments
      </p>
      <ReactStars
        size={25}
        half={true}
        value={rating}
        onChange={(rate) => setRating(rate)}
      />
      <input
        value={form}
        onChange={(e) => setForm(e.target.value)}
        placeholder="Share Your thoughts..."
        className="w-full p-2 rounded-lg bg-[#353b48] shadow-lg  "
      />
      <button
        onClick={sendReview}
        className=" mt-2 mb-4 w-full p-2  rounded-lg bg-[#4cd137]  hover:bg-[#44bd32] font-medium flex justify-center"
      >
        {loading ? <TailSpin height={20} color="#f5f6fa" /> : "Share"}
      </button>

      {reviewsLoading ? (
        <div className="mt-5 flex justify-center">
          {" "}
          <ThreeDots height={10} />{" "}
        </div>
      ) : (
        <div>
          {data.map((e, i) => {
            return (
              <div
                key={i}
                className="mt-2  border-b-2 border-[#353b48] shadow-lg p-2 rounded-lg"
              >
                <div className="flex items-center">
                  <p className="text-[#00a8ff]">{e.name}</p>
                  <p className="ml-3 text-xs">
                    ({new Date(e.timestamp).toLocaleString()})
                  </p>
                </div>
                <ReactStars
                  size={15}
                  half={true}
                  value={e.rating}
                  edit={false}
                />

                <p>{e.thought}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Reviews;
