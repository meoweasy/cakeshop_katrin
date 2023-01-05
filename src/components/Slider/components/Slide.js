import React from "react";
import SlideImage from "./SlideImage";

import "../../../style/slide.scss";

export default function Slide({ data: url }) {
  return (
    <div className="slide">
      <SlideImage src={url} alt='-' />
    </div>
  );
}