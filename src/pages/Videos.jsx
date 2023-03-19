import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const {keyword} = useParams();
  console.log(keyword)

  return <div className="pt-14">
    Videos {keyword}
  </div>
}
