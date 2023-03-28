import React from "react";
import { useLocation } from "react-router-dom";
import * as S from "./style";

function DetailPage() {
  const location = useLocation();
  const detailData = location.state;
  let stateText = detailData.pm10Grade;
  switch (detailData.pm10Grade) {
    case "1":
      detailData.pm10Grade = "좋음";
      stateText =
        "공기가 매우 깨끗해요! 오늘은 산책하기에 안성맞춤인 좋은 날씨예요. 실외활동을 하시면서 상쾌한 공기를 마음껏 마시세요.";
      break;
    case "2":
      detailData.pm10Grade = "보통";
      stateText =
        "공기가 괜찮아요. 하지만 여전히 미세먼지가 살짝 높은 편이니 마스크를 착용하는 것이 좋아요. 실외활동 시에도 마스크를 쓰면 더욱 좋을 거에요.";
      break;
    case "3":
      detailData.pm10Grade = "한때나쁨";
      stateText =
        "공기가 조금 나쁘네요. 미세먼지 농도가 올라가면서 실외활동을 할 경우 마스크를 꼭 착용해주세요. 실내에서 보내는 시간을 늘려서 건강을 지켜보세요.";
      break;
    case "4":
      detailData.pm10Grade = "나쁨";
      stateText =
        "공기가 매우 나쁘니 마스크를 착용하고 실외활동은 최대한 피해주세요. 미세먼지로 인해 건강에 해가 가지 않도록 실내에서 생활하는 것을 추천해요. 공기 청정기를 활용하는 것도 좋은 방법이 될 수 있습니다.";
      break;
    case "5":
      detailData.pm10Grade = "매우나쁨";
      stateText =
        "매우 위험한 수준입니다. 미세먼지 농도가 높아 실외활동을 자제하시는 것이 좋아요. 가능하면 실내에 머무르고 공기 청정기를 활용해보세요. 마스크를 꼭 착용하고 건강상 이상이 있다면 병원을 방문하는 것이 좋습니다.";
      break;
    default:
      detailData.pm10Grade = "데이터 오류";
      stateText =
        "현재 데이터에 오류가 있어요. 이 지역은 나중에 다시 확인해주세요.";
  }

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
          <S.InfoText>{stateText}</S.InfoText>
        </S.InfoBox>
        <S.RelatedInfo>
          <S.ValueWrapper>
            <div>so2</div>
            {detailData.so2Value}
          </S.ValueWrapper>
          <S.ValueWrapper>
            <div>co</div>
            {detailData.coValue}
          </S.ValueWrapper>
          <S.ValueWrapper>
            <div>o3</div>
            {detailData.o3Value}
          </S.ValueWrapper>
          <S.ValueWrapper>
            <div>no2</div>
            {detailData.no2Value}
          </S.ValueWrapper>
          <S.ValueWrapper>
            <div>khai</div>
            {detailData.khaiValue}
          </S.ValueWrapper>
          <S.ValueWrapper>
            <div>pm25</div>
            {detailData.pm25Value}
          </S.ValueWrapper>
        </S.RelatedInfo>
      </S.ItemWrapper>
    </div>
  );
}

export default DetailPage;
