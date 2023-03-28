import React from "react";
import * as S from "./style";
function MainInfoItem({
  sidoName,
  stationName,
  dataTime,
  pm10Grade,
  pm10Value,
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
        <S.StateTitle>{pm10Grade}</S.StateTitle>
        <S.PmGrade>{pm10Value}</S.PmGrade>
      </S.RightWrapper>
    </S.ItemWrapper>
  );
}

export default MainInfoItem;
