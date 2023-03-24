import React from "react";
import * as S from "./style";
import { AiOutlineStar } from "react-icons/ai";
function SecondInfoItem() {
  return (
    <S.ItemWrapper>
      <S.TopWrapper>
        <S.TitleWrapper>
          <S.SidoName>서울</S.SidoName>
          <S.StationName>중구</S.StationName>
        </S.TitleWrapper>
        <AiOutlineStar className="favorites" />
      </S.TopWrapper>
      <S.BottomWrapper>
        <S.StateTitle>좋음</S.StateTitle>
        <S.PmGrade>55</S.PmGrade>
      </S.BottomWrapper>
    </S.ItemWrapper>
  );
}

export default SecondInfoItem;
