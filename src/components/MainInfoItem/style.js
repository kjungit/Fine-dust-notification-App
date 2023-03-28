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
  text-shadow: 0px 0px 7px #000;
  border: 5px solid rgba(0, 0, 0, 0);
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  ${({ border }) =>
    border === true &&
    css`
      border: 5px solid #000;
    `}

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
  align-items: flex-start;
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
  font-size: 24px;
  padding-left: 6px;
  line-height: 30px;
  font-weight: 700;
  text-align: left;
`;
export const DataTime = styled.div``;

export const MiddleWrapper = styled.div`
  display: flex;
  align-items: center;

  .favorites {
    font-size: 27px;
    padding-left: 10px;
  }
`;

export const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
`;
export const StateTitle = styled.div``;
export const PmGrade = styled.div`
  font-size: 58px;
  line-height: 54px;
  font-weight: 500;
`;
