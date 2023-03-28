import React, { useState } from "react";
import * as S from "./style";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
function SecondInfoItem({
  sidoName,
  stationName,
  dataTime,
  pm10Grade,
  pm10Value,
}) {
  const [isClicked, setIsClicked] = useState(false);

  switch (pm10Grade) {
    case "1":
      pm10Grade = "좋음";
      break;
    case "2":
      pm10Grade = "보통";
      break;
    case "3":
      pm10Grade = "한때나쁨";
      break;
    case "4":
      pm10Grade = "나쁨";
      break;
    case "5":
      pm10Grade = "매우나쁨";
      break;
    default:
      pm10Grade = "그럭저럭";
  }

  const onClickHandle = (e) => {
    setIsClicked(!isClicked);
    console.log(e.target.parentElement);
    localStorage.setItem("favariteItem", JSON.stringify({ name: stationName }));
  };

  const getLocation = () => {};

  return (
    <S.ItemWrapper value={pm10Grade} border={isClicked}>
      <S.TopWrapper>
        <S.TitleWrapper>
          <S.SidoName>{sidoName}</S.SidoName>
          <S.StationName>{stationName}</S.StationName>
        </S.TitleWrapper>
        {!isClicked ? (
          <AiOutlineStar className="favorites" onClick={onClickHandle} />
        ) : (
          <AiFillStar className="favorites" onClick={onClickHandle} />
        )}
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.StateTitle>{pm10Grade}</S.StateTitle>
        <S.PmGrade>{pm10Value}</S.PmGrade>
      </S.BottomWrapper>
    </S.ItemWrapper>
  );
}

export default SecondInfoItem;
