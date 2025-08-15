import "../blocks/about.css";
import { useState, useEffect } from "react";
import Main from "./Main.jsx";

import { AboutConfahmSlides } from "../utils/constants.jsx";

const Confahm = ({}) => {
  return (
    <Main
      isChecked={true}
      slides={AboutConfahmSlides}
      title={"What is Confahm™?"}
    />
  );
};
export default Confahm;
