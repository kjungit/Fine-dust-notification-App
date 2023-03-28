import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { RiMapPinLine, RiHomeSmile2Line } from "react-icons/ri";
import { TbMapSearch } from "react-icons/tb";
import { AiOutlineStar } from "react-icons/ai";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  position: fixed;
  background-color: #fff;
  bottom: 0;
  left: 0;
  height: 80px;
  width: 100%;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.15), 0 5px 5px rgba(0, 0, 0, 0.12);
`;

const NavbarLink = styled(Link)`
  width: 100px;
  padding: 20px 0;
  .icon {
    font-size: 30px;
  }
  color: #333;
  text-decoration: none;
`;
function Layout() {
  return (
    <>
      <Outlet />
      <NavbarContainer>
        <NavbarLink to="/">
          <RiHomeSmile2Line className="icon" />
        </NavbarLink>
        <NavbarLink to="/myArea">
          <RiMapPinLine className="icon" />
        </NavbarLink>
        <NavbarLink to="/searchArea">
          <TbMapSearch className="icon" />
        </NavbarLink>
        <NavbarLink to="/favoriteArea">
          <AiOutlineStar className="icon" />
        </NavbarLink>
      </NavbarContainer>
    </>
  );
}

export default Layout;
