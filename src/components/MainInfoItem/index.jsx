import React, { useEffect, useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import * as S from "./style";
function MainInfoItem({
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
    console.log(existingDataIndex);
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
    <S.ItemWrapper value={pm10Grade}>
      <S.LeftWrapper>
        <S.Title>
          <S.SidoName>{sidoName}</S.SidoName>
          <S.StationName>{stationName}</S.StationName>
        </S.Title>
        <S.DataTime>{dataTime} 기준</S.DataTime>
      </S.LeftWrapper>
      <S.RightWrapper>
        {!isClicked ? (
          <AiOutlineStar className="favorites" onClick={onClickHandle} />
        ) : (
          <AiFillStar className="favorites" onClick={onClickHandle} />
        )}
        <S.StateTitle>{pm10Grade}</S.StateTitle>
        <S.PmGrade>{pm10Value}</S.PmGrade>
      </S.RightWrapper>
    </S.ItemWrapper>
  );
}

export default MainInfoItem;
