import React, { useCallback, useEffect, useState } from "react";
import MainInfoItem from "../../components/MainInfoItem";
import * as S from "./style";

function FavoriteArea() {
  const [favoriteData, setFavoriteData] = useState(
    JSON.parse(localStorage.getItem("favoriteData")) || []
  );

  const checkLocalStorage = useCallback(() => {
    const data = JSON.parse(localStorage.getItem("favoriteData")) || [];
    if (JSON.stringify(data) !== JSON.stringify(favoriteData)) {
      setFavoriteData(data);
    }
  }, [favoriteData]); // add favoriteData as a dependency

  useEffect(() => {
    const intervalId = setInterval(checkLocalStorage, 100);
    return () => clearInterval(intervalId);
  }, [checkLocalStorage]);

  if (favoriteData.length === 0) return <div>즐겨찾기가 비워져있어요</div>;

  return (
    <S.MyAreaContainer>
      <S.ItemWrapper>
        {favoriteData &&
          favoriteData.map((item, index) =>
            item && item.stationName ? (
              <S.NavbarLink
                to={"/detail/" + item.stationName}
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
