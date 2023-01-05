import React from "react";

import "../../../style/slide.scss";

export default function SlideImage({ src }) {
  return <img src={src} alt='-' className="slide-image" />;
}