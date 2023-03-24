import React from "react";
import * as S from "./style";

function DetailPage() {
  return (
    <div>
      <S.ItemWrapper>
        <S.TopWrapper>
          <S.SidoName>서울</S.SidoName>
          <S.StationName>중구</S.StationName>
          <S.DataTime>2023-01-01 17:00 기준</S.DataTime>
        </S.TopWrapper>
        <S.PmGrade>355</S.PmGrade>
        <S.StateTitle>좋음</S.StateTitle>
        <S.InfoBox>
          <S.InfoText>
            일반인이 불쾌감을 느낄 수 있으며 어린이, 노인 및 대기오 오염 관련
            질환자군 등 민감군에게 유해한 영향을 미칠 수 있는 수준.
          </S.InfoText>
        </S.InfoBox>
        <S.RelatedInfo>
          <div>so2Flag</div>
          <div>so2Flag</div>
          <div>so2Flag</div>
          <div>so2Flag</div>
          <div>so2Flag</div>
          <div>so2Flag</div>
        </S.RelatedInfo>
      </S.ItemWrapper>
    </div>
  );
}

export default DetailPage;
