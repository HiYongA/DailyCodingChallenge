import React from "react";

export default function Term() {
  const terms = [
    { title: "1. 총선", description: "국회의원을 뽑는 선거" },
    { title: "2. 국회의원", description: "국민을 대표해 일하는 사람" },
    {
      title: "3. 정당",
      description: "비슷한 생각을 가진 사람들이 만든 정치 단계",
    },
    {
      title: "4. 공약",
      description:
        "선거에 나오는 후보자나 정당이 국민에게 앞으로 어떤 일을 하겠다고 약속하는 것",
    },
    { title: "5. 지역구 의원", description: "지역을 대표해서 일하는 국회의원" },
    {
      title: "6. 비례대표 의원",
      description: "정당을 대표해서 일하는 국회의원",
    },
    {
      title: "7. 준연동형 비례대표제",
      description:
        "정당이 얻은 표와 지역구 의원의 수를 고려해 비례대표 의석을 나누는 제도",
    },
    { title: "8. 공천", description: "정당이 선거에 나갈 후보자를 정하는 것" },
    { title: "9. 유권자", description: "선거에 참여할 수 있는 사람" },
    {
      title: "10. 본투표/사전투표",
      description: "선거일에 투표하는 것/ 선거일 전에 미리 투표하는 것",
    },
  ];
  return (
    <>
      <h2>
        봐도봐도 어려운 정치 용어,
        <br />
        뉴닉 X 소소한소통이 쉽게 알려드려요.
      </h2>

      <section
        style={{
          width: "882px",
          flexDirection: "column",
          gap: "20px",
          margin: "20px auto",
        }}
      >
        {terms.map((term, index) => {
          return (
            <div
              class="toggle"
              key={index}
              style={{ color: "#818387", fontWeight: "500" }}
            >
              <strong>{term.title}</strong>: {term.description}
              <span class="sink">⌵</span>
            </div>
          );
        })}
        <button style={{ width: "350px", margin: "auto", marginTop: "20px" }}>
          앱에서 더 많은 용어 살펴보기 <strong>→</strong>
        </button>
      </section>
    </>
  );
}
