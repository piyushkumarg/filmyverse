import React from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button } from "@mui/material";

const Header = () => {
  return (
    <div className="sticky bg-[#353b48] z-10 header top-0 text-3xl flex justify-between items-center text-[#e84118] font-bold p-3 border-b-2 border-[#7f8fa6]">
      <span>
        Filmy<span className="text-[#4cd137]">Verse</span>
      </span>
      <Button className="text-lg cursor-pointer flex items-center ">
        <AddCircleIcon className="mr-1 text-[#f5f6fa]" />
        <span className="text-[#f5f6fa]">Add New</span>
      </Button>
    </div>
  );
};

export default Header;