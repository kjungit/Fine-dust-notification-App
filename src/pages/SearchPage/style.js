import { Link } from "react-router-dom";
import styled from "styled-components";
import { keyframes } from "styled-components";

export const SearchContainer = styled.div``;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0 150px;
  overflow: scroll;
  gap: 10px 24px;
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
export const NavbarLink = styled(Link)`
  text-decoration: none;
`;

export const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 90vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  text-align: center;
`;
const rotation = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(360deg);
}
`;
export const Spinner = styled.div`
  height: 5rem;
  width: 5rem;
  border: 2px solid #3563e9;
  border-radius: 50%;
  border-top: none;
  border-right: none;
  margin: 10rem auto;
  animation: ${rotation} 1s linear infinite;
`;
