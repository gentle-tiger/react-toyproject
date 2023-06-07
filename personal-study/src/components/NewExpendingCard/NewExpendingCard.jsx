/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
// import CARD_LIST from "../data/cardList.json";
function NewExpendingCard() {
  const [cardList, setCardList] = useState([]);

  useEffect(() => {
    fetch("/data/cardList.json")
      .then((res) => res.json())
      .then((data) => setCardList(data));
  }, []);

  const handleClickCard = (id) => {
    setCardList((prev) =>
      prev.map((item) => ({ ...item, isActive: item.id === id }))
    );
    console.log(cardList.isActive);
  };
  return (
    <div css={expendingCardCss}>
      {cardList.map((item) => (
        <ImageCard
          key={item.id}
          {...item}
          // imgUrl={item.imgUrl}
          // name={item.name}
          // isActive={item.isActive}
          onClick={handleClickCard}
        />
      ))}
    </div>
  );
}

export default NewExpendingCard;

const expendingCardCss = css`
  display: flex;
  gap: 8px;
  width: 800px;
  height: 400px;
`;
