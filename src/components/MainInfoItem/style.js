import styled, { css } from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  height: 140px;
  background-color: lightgray;
  border-radius: 10px;
  padding: 22px;
  box-sizing: border-box;
  background-image: url(/images/good.jpg);
  background-size: 400px;
  margin-bottom: 10px;
  color: #fff;
  text-shadow: 0px 0px 5px #000;

  ${({ value }) =>
    value === "보통" &&
    css`
      background-image: url(/images/usually.jpg);
    `}

  ${({ value }) =>
    value === "한때나쁨" &&
    css`
      background-image: url(/images/bad.jpg);
    `}

  ${({ value }) =>
    value === "나쁨" &&
    css`
      background-image: url(/images/oncebad.jpg);
    `}

  ${({ value }) =>
    value === "매우나쁨" &&
    css`
      background-image: url(/images/verybad.jpg);
    `}
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const SidoName = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const StationName = styled.div`
  font-size: 26px;
  padding-left: 6px;
  line-height: 30px;
  font-weight: 700;
`;

export const DataTime = styled.div``;
export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export const StateTitle = styled.div``;
export const PmGrade = styled.div`
  font-size: 62px;
  line-height: 54px;
  font-weight: 500;
`;
