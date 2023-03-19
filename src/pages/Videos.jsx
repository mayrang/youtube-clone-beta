import React from "react";
import { useParams } from "react-router-dom";

export default function Videos() {
  const {keyword} = useParams();
  console.log(keyword)
  if(keyword){
    <div>search</div>
  }
  return <div className="pt-14">
    home
  </div>;
}
