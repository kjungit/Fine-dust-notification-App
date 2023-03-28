import styled from "styled-components";
export const MyAreaContainer = styled.div``;

export const ItemWrapper = styled.div`
  padding: 30px 0 150px;
  overflow: scroll;
`;
export const SelectWrapper = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: space-around;
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 0);
  background: linear-gradient(
    to top,
    #fff 10%,
    #fff 25%,
    #fff 50%,
    rgba(255, 255, 255, 0.9) 65%,
    rgba(255, 255, 255, 0.1) 90%,
    rgba(255, 255, 255, 0) 100%
  );
`;
