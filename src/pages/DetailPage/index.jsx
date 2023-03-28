import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";

function DetailPage() {
  const location = useLocation();
  const detailData = location.state;
  console.log(detailData);

  return (
    <div>
      <S.ItemWrapper>
        <S.TopWrapper>
          <S.SidoName>{detailData.sidoName}</S.SidoName>
          <S.StationName>{detailData.stationName}</S.StationName>
          <S.DataTime>{detailData.dataTime} 기준</S.DataTime>
        </S.TopWrapper>
        <S.PmGrade>{detailData.pm10Value}</S.PmGrade>
        <S.StateTitle>{detailData.pm10Grade}</S.StateTitle>
        <S.InfoBox>
          <S.InfoText>
            일반인이 불쾌감을 느낄 수 있으며 어린이, 노인 및 대기오 오염 관련
            질환자군 등 민감군에게 유해한 영향을 미칠 수 있는 수준.
          </S.InfoText>
        </S.InfoBox>
        <S.RelatedInfo>
          <div>
            {detailData.so2Value}
            <div>so2</div>
          </div>
          <div>
            {detailData.coValue}
            <div>co</div>
          </div>
          <div>
            {detailData.o3Value}
            <div>o3</div>
          </div>
          <div>
            {detailData.no2Value}
            <div>no2</div>
          </div>
          <div>
            {detailData.khaiValue}
            <div>khai</div>
          </div>
          <div>
            {detailData.pm25Value}
            <div>pm25</div>
          </div>
        </S.RelatedInfo>
      </S.ItemWrapper>
    </div>
  );
}

export default DetailPage;
