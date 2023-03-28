import { Link } from "react-router-dom";
import styled from "styled-components";

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
