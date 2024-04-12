import React from "react";
import fire from "../images/fire.png";

const imageStyle = {
  width: "650px",
  height: "360px",
  backgroundImage: `url(${fire})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  margin: "50px auto",
};

export default function News() {
  return (
    <>
      <h2>
        따끈한 총선 소식을 준비했어요.
        <br />
        캐릭터를 선택해서 둘러보고 자세한 소식도 읽어요!
      </h2>
      <div style={imageStyle}></div>
    </>
  );
}
