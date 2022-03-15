import React from "react";
import { BounceLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      className="absolute"
      style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%" }}
    >
      <BounceLoader size={48} color="gray" loading />
    </div>
  );
};

export default Loader;
