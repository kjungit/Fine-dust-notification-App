import React from "react";
import SelectSidoNameItem from "../components/SelectSidoNameItem";
import styled from "styled-components";

const SelectWrapper = styled.div`
  width: 320px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
`;

function Header() {
  return (
    <div>
      <SelectWrapper>
        {/* <SelectItem placeholder={"시/도"} width={140} /> */}
        <SelectSidoNameItem placeholder={"지역선택"} width={320} />
      </SelectWrapper>
    </div>
  );
}

export default Header;
