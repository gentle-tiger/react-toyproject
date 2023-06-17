/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Button from "./Button";
import { useState } from "react";
import { PulseLoader } from "react-spinners";

export default function CatInfo() {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState({
    en: "Interesting cat information!",
    kr: "냥이와 관련된 신기한 정보들!",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClickBtn = async () => {
    setIsLoading(true);

    /* 
    CatInfo 영문데이터 받아오기
     GET 요청이므로 별도의 body 데이터를 설명하는 headers 설정이 필요 없습니다.
    */

    const en = await fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => data.data[0]);

    /*
    Papago 번역하기
    POST 요청이므로 body 데이터를 설명하는 headers 설정이 필요합니다.
    */

    // 서버에 보내는 body에 들어갈 데이터의 형식이 json임을 명시해줍니다.
    const headers = { "Content-Type": "application/json" };

    // 실제로 명시된대로 json 형식으로 변환하여 보냅니다.
    const body = JSON.stringify({ source: "en", target: "ko", text: en });

    // 서버에 요청을 보내고 응답을 받아옵니다.
    const kr = await fetch("http://localhost:8000/papago", {
      method: "POST",
      headers,
      body,
    })
      .then((res) => res.json())
      .then((data) => data.translatedText);

    setText({
      en,
      kr,
    });
    setIsLoading(false);
  };

  const handleClickLangBtn = () => {
    setLang((prev) => (prev === "kr" ? "en" : "kr"));
  };

  return (
    <div css={containerCss}>
      <div css={titleCss}>{lang === "en" ? "Cat Info" : "냥냥 정보"}</div>
      <div css={contentCss}>{text[lang]}</div>
      <div css={btnWrapperCss}>
        <Button onClick={handleClickLangBtn}>
          {lang === "kr" ? "english" : "한국어"}
        </Button>
        {isLoading ? (
          <Button width="120px" disabled>
            <PulseLoader color="white" size={8} />
          </Button>
        ) : (
          <Button width="120px" onClick={handleClickBtn}>
            {lang === "en" ? "Cat Info!" : "냥이정보 줘!"}
          </Button>
        )}
      </div>
    </div>
  );
}

const containerCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const titleCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  color: grey;
  font-weight: bold;
  font-size: 20px;
`;

const contentCss = css`
  /* height: 150px; */
  padding: 15px 20px;
  color: #f59f2d;
  font-size: 28px;
  /* overflow-y: scroll; */
`;

const btnWrapperCss = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 40px;
`;
