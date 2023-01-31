import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Appstate } from "../App";

const Header = () => {
  const useAppstate = useContext(Appstate);
  const out = () => {
    alert("Refresh your Page for Sign Out 😂");
  };

  return (
    <div className="sticky bg-[#353b48] z-10 header top-0 text-xl md:text-3xl flex  justify-between items-center text-[#e84118] font-bold  p-3 border-b-2 border-[#7f8fa6] rounded-3xl">
      <Link to={"/"}>
        <span>
          Filmy<span className="text-[#4cd137]">Verse</span>
        </span>
      </Link>
      <div className="flex">
        <Link to={"/addmovie"}>
          <div className="hover:bg-[#1e232a] rounded ">
            <Button className=" text-base md:text-lg cursor-pointer  flex items-center  ">
              <AddCircleIcon className="mr-1 text-[#f5f6fa] text-sm md:text-base" />
              <span className="text-[#f5f6fa] text-sm md:text-base">
                Add New
              </span>
            </Button>
          </div>
        </Link>

        {useAppstate.signin ? (
          <Link to={"/"}>
            <div className="  bg-[#4cd137] border-0 px-1 md:px-4 focus:outline-none hover:bg-[#44bd32] rounded-xl ml-2">
              <Button onClick={out}>
                <span className="text-[#f5f6fa] text-sm md:text-base font-medium capitalize">
                  Sign Out
                </span>
              </Button>
            </div>
          </Link>
        ) : (
          <Link to={"/signin"}>
            <div className="  bg-[#4cd137] border-0 px-1 md:px-4 focus:outline-none hover:bg-[#44bd32] rounded-xl ml-2">
              <Button>
                <span className="text-[#f5f6fa] text-sm md:text-base font-medium capitalize">
                  Sign In
                </span>
              </Button>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
