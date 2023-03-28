import React, { useEffect, useState } from "react";
import MainInfoItem from "../../components/MainInfoItem";
import * as S from "./style";

function FavoriteArea() {
  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem("favoriteData")) || []
  );

  const checkLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("favoriteData")) || [];
    if (JSON.stringify(data) !== JSON.stringify(favoriteData)) {
      setFavoriteData(data);
    }
  };

  setInterval(checkLocalStorage, 500);

  return (
    <S.MyAreaContainer>
      <S.ItemWrapper>
        {favoriteData &&
          favoriteData.map((item, index) =>
            item && item.stationName ? (
              <S.NavbarLink
                to={"/" + item.stationName}
                state={item}
                key={index}
              >
                <MainInfoItem
                  data={item}
                  sidoName={item.sidoName}
                  stationName={item.stationName}
                  dataTime={item.dataTime}
                  pm10Grade={item.pm10Grade}
                  pm10Value={item.pm10Value}
                />
              </S.NavbarLink>
            ) : null
          )}
      </S.ItemWrapper>
    </S.MyAreaContainer>
  );
}

export default FavoriteArea;
