import React, { useEffect, useState } from "react";
import * as S from "./style";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
function SecondInfoItem({
  sidoName,
  stationName,
  dataTime,
  pm10Grade,
  pm10Value,
  data,
}) {
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

  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const favoriteData = JSON.parse(localStorage.getItem("favoriteData")) || [];
    if (favoriteData[0] !== null) {
      const clickState = favoriteData.find(
        (item) => item.stationName === stationName
      );
      if (clickState) setIsClicked(true);
    }
  }, [isClicked]);

  const onClickHandle = (e) => {
    const favoriteData = JSON.parse(localStorage.getItem("favoriteData")) || [];

    e.preventDefault();
    const existingDataIndex = favoriteData.findIndex(
      (item) => item.stationName === data.stationName
    );

    if (!isClicked && existingDataIndex === -1) {
      favoriteData.push(data);
    }
    if (existingDataIndex !== -1) {
      favoriteData.splice(existingDataIndex, 1);
    }
    localStorage.setItem("favoriteData", JSON.stringify(favoriteData));
    setIsClicked(!isClicked);
  };

  return (
    <S.ItemWrapper value={pm10Grade} border={isClicked}>
      <S.TopWrapper>
        <S.TitleWrapper>
          <S.SidoName>{sidoName}</S.SidoName>
        </S.TitleWrapper>
        {!isClicked ? (
          <AiOutlineStar className="favorites" onClick={onClickHandle} />
        ) : (
          <AiFillStar className="favorites" onClick={onClickHandle} />
        )}
      </S.TopWrapper>
      <S.MiddleWrapper>
        <S.StationName>{stationName}</S.StationName>
      </S.MiddleWrapper>

      <S.BottomWrapper>
        <S.StateTitle>{pm10Grade}</S.StateTitle>
        <S.PmGrade>{pm10Value}</S.PmGrade>
      </S.BottomWrapper>
    </S.ItemWrapper>
  );
}

export default SecondInfoItem;
