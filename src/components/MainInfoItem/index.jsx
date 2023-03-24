import React from "react";
import * as S from "./style";

function MainInfoItem() {
  return (
    <S.ItemWrapper>
      <S.LeftWrapper>
        <S.Title>
          <S.SidoName>서울</S.SidoName>
          <S.StationName>중구</S.StationName>
        </S.Title>
        <S.DataTime>2023-01-01 17:00 기준</S.DataTime>
      </S.LeftWrapper>
      <S.RightWrapper>
        <S.StateTitle>좋음</S.StateTitle>
        <S.PmGrade>55</S.PmGrade>
      </S.RightWrapper>
    </S.ItemWrapper>
  );
}

export default MainInfoItem;
