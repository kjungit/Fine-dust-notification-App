import React from "react";
import * as S from "./style";
function MainPage() {
  return (
    <S.MainWrapper>
      <S.LogoArea>
        <S.TopIcon>
          <img src="../../images/icon_1.png" alt="" />
        </S.TopIcon>
        <S.Title>FINE DUST INFO</S.Title>
        <S.BottomIcon>
          <img src="../../images/icon_2.png" alt="" />
        </S.BottomIcon>
      </S.LogoArea>
    </S.MainWrapper>
  );
}

export default MainPage;
