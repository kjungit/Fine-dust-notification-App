import styled, { css } from "styled-components";

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  height: 150px;
  background-color: lightgray;
  border-radius: 10px;
  padding: 8px;
  box-sizing: border-box;
  background-image: url(/images/good.jpg);
  background-size: 260px;
  background-position: -20px;
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

export const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .favorites {
    font-size: 27px;
    align-self: center;
  }
`;
export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  padding: 4px;
`;
export const SidoName = styled.div`
  font-size: 18px;
  align-self: flex-start;
`;
export const AiOutlineStar = styled.div`
  font-size: 20px;
`;
export const MiddleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const StationName = styled.div`
  font-size: 20px;
  line-height: 30px;
  font-weight: 700;
  text-align: left;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StateTitle = styled.div`
  align-self: flex-end;
  font-size: 14px;
`;
export const PmGrade = styled.div`
  font-size: 40px;
  line-height: 46px;
  font-weight: 500;
`;
