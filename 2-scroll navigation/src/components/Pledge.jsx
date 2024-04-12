import React from "react";

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 0fr)",
  gap: "20px",
  margin: "20px",
};

const boxStyle = {
  width: "250px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  border: "1px solid #1c1e21",
  padding: "30px 20px",
  backgroundColor: "#F3F4F7",
};

const arrowStyle = {
  backgroundColor: "#33353A",
  color: "#ffffff",
  fontSize: "20px",
  padding: "2px 15px",
  borderRadius: "16px",
};

export default function Pledge() {
  const list = [
    {
      title: "주거 공약",
      content: "내가 살 집은 어디에",
    },
    {
      title: "교육 공약",
      content: "교육은 백년대계",
    },
    {
      title: "경제 공약",
      content: "경제, 이대론 안 돼!",
    },
    {
      title: "사회 공약",
      content: "아프지 않고 안전한 사회",
    },
    {
      title: "환경 공약",
      content: "기후 유권자의 시대",
    },
    {
      title: "노동 공약",
      content: "번아웃 없는 직장을 위하여",
    },
    {
      title: "저출생 공약",
      content: "우리 모두의 과제",
    },
    {
      title: "다양성 공약",
      content: "나 답게, 더 다채롭게",
    },
    {
      title: "정치 공약",
      content: "국회엔 일잘러가 필요하다",
    },
  ];

  return (
    <>
      <h2>
        공약, 어디서부터 봐야 할지 모르겠다면?
        <br />
        뉴닉이 꼭 알아야 할 공약만 모아 제대로 뽀개봤어요.
      </h2>
      <section style={gridStyle}>
        {list.map((item, index) => (
          <div style={boxStyle} key={index}>
            <div>
              <h3>{item.title}</h3>
              <h4>{item.content}</h4>
            </div>
            <span style={arrowStyle}>→</span>
          </div>
        ))}
      </section>
    </>
  );
}
