import React from "react";
import { useState } from "react";

export default function RecentlyViewed({ imgsrc, title }) {
  const [imgsrc, setimgSrc] = useState(imgsrc);
  const [title, setTitle] = useState(title);

  return <img src={imgsrc} />;
}
