/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";

import React, { useEffect, useState } from "react";
import PersonTable from "./PersonTable";

function StaggerEffect(props) {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    fetch("/data/person.json")
      .then((res) => res.json())
      .then((data) => setPersonList(data));
  }, []);

  const handleClickInfoOpen = (index) => {
    setPersonList((prev) =>
      prev.map((item, i) => ({
        ...item,
        isActive: i === index ? !item.isActive : item.isActive,
      }))
    );
    // const active = personList[index].isActive; //false
    console.log(personList[index].isActive); // true
  };
  //   const handleClickCard = (id) => {
  //     setCardList((prev) =>
  //       prev.map((item) => ({ ...item, isActive: item.id === id }))
  //     );
  //     console.log(cardList.isActive);
  //   };

  return (
    <div>
      <div css={wrapperCss}>
        <div css={contentWrapperCss}>
          <div>
            {personList.map((item, index) => (
              <PersonTable
                key={item.id}
                id={index}
                imgUrl={item.imgUrl}
                name={item.name}
                text={item.text}
                isActive={item.isActive}
                handleClickInfoOpen={() => handleClickInfoOpen(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default StaggerEffect;

const wrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 800px;
  background-color: #b00020;
  margin: 0 auto;
`;
const contentWrapperCss = css`
  width: 400px;
  height: 600px;
  padding: 30px 0px;
  background-color: white;
  overflow: scroll;
  border: 3px solid black;
  scrollbar-width: none;
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    transition: background-color 0.3s ease;
  }

  &::-webkit-scrollbar {
    width: calc(100% + 10px);
    background-color: #ffffff;
  }

  &:hover::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #b8b8b8;
    transition: background-color 0.3s ease;
  }
`;
