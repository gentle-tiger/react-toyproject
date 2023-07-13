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
  width: 100%;
  height: 100%;
  background-color: white;
`;
const contentWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: start; // 이렇게 해야 content가 위로 잘리지 않는다.
  width: 350px;
  height: 500px;
  padding: 30px 0px 30px 5px; // scroll 을 제외한 나머지에만 값을 추가함.
  background-color: white;
  overflow-y: scroll;
  scrollbar-width: none;
  &::-webkit-scrollbar-thumb {
    transition: background-color 0.3s ease;
    :hover {
      background-color: lightgrey;
    }
  }
  &::-webkit-scrollbar {
    width: calc(100% + 10px);
    background-color: white;
  }
  &:hover::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: lightgrey;
    transition: background-color 0.3s ease;
  }
  :hover {
    outline: grey solid;
  }
`;
