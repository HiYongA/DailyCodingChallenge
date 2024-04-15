import React from "react";
import map from "../images/map.png";

const containerStyle = {
  width: "400px",
  height: "200px",
  padding: "20px",
};

const titleStyle = {
  fontSize: "15px",
  padding: "15px",
  paddingLeft: "20px",
  textAlign: "left",
  borderBottom: "1px solid #1c1e21",
  backgroundColor: "#F3F4F7",
};

const imageStyle = {
  ...containerStyle,
  backgroundImage: `url(${map})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRight: "1px solid #1c1e21",
};

const contentStyle = {
  ...containerStyle,
  fontSize: "15px",
  lineHeight: "30px",
  verticalAlign: "top",
};

const buttonStyle = {
  display: "flex",
  justifyContent: "space-between",
};

export default function Vote() {
  return (
    <>
      <h2>
        투표할 때 뭐 필요하더라? 투표 어디서 하더라?
        <br />
        헷갈리지 않도록 싹 정리했어요.
      </h2>
      <section>
        <table>
          <tbody>
            <tr>
              <th colSpan="2" style={titleStyle}>
                01. 투표하러 갈 때
              </th>
            </tr>
            <tr>
              <td style={imageStyle}></td>
              <td style={contentStyle}>
                <p>
                  <strong>사전 투표(4월 5일 ~ 4월 6일)</strong> : 선거일 전에
                  미리 투표하는 것을 말해요. 전국 사전투표소 아무 데서나 투표할
                  수 있어요.
                </p>
                <p>
                  <strong>본 투표(4월 10일)</strong> : 선거일에 투표하는 것을
                  말해요. 내가 투표할 수 있는 투표소가 정해져 있어요. 오전
                  6시부터 오후 6시까지 신분증(주민등록증, 운전면허증, 복지카드
                  여권 등)을 들고 투표소에 가면 돼요.
                </p>
                <div style={buttonStyle}>
                  <button>사전 투표소 찾기 →</button>
                  <button>본 투표소 찾기 →</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section
        style={{
          width: "882px",
          flexDirection: "column",
          gap: "20px",
          margin: "20px auto",
        }}
      >
        <div className="toggle">
          <strong>투표소에서 조심할 것은?</strong>
          <span className="sink">⌵</span>
        </div>
        <div className="toggle">
          <strong>누구나 투표할 권리가 있어요!</strong>
          <span className="sink">⌵</span>
        </div>
      </section>
    </>
  );
}
