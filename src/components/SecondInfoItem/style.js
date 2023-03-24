import styled from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 140px;
  height: 140px;
  background-color: lightgray;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-image: url(/images/good.jpg);
  background-size: 220px;
  background-position: -30px;
  margin-bottom: 10px;
`;

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .favorites {
    font-size: 23px;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  padding: 4px;
`;
export const SidoName = styled.div`
  font-size: 14px;
  align-self: flex-end;
`;
export const StationName = styled.div`
  font-size: 26px;
  line-height: 26px;
  padding-left: 6px;
`;

export const AiOutlineStar = styled.div`
  font-size: 20px;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StateTitle = styled.div`
  align-self: flex-end;
  font-size: 20px;
`;
export const PmGrade = styled.div`
  font-size: 46px;
  line-height: 46px;
  font-weight: 500;
`;
