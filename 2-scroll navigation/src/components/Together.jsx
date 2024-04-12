import React from "react";
import check from "../images/check.png";

const imageStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
};

const buttonStyle = {
  width: "99%",
  backgroundColor: "#F3F4F7",
  color: "#818387",
  fontWeight: "bold",
  fontSize: "15px",
  textAlign: "center",
  border: "1px solid #1c1e21",
  marginTop: "40px",
  marginBottom: "100px",
  padding: "20px 0",
  cursor: "pointer",
};

export default function Together() {
  return (
    <>
      <h2>
        너, 총선뽀개기 동료가 돼라!
        <br />
        자신있는 한 표를 던질 준비가 되었나요?
      </h2>
      <section style={{ flexDirection: "column" }}>
        <div style={imageStyle}>
          <img src={check} alt="check" style={{ width: "800px" }} />
          <div style={buttonStyle}>뽀개기 인증서 자랑하기 →</div>
        </div>
      </section>
    </>
  );
}
