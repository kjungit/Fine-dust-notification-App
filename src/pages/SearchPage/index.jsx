import React, { useState } from "react";
import * as S from "./style";
import SecondInfoItem from "../../components/SecondInfoItem";
import SelectItem from "../../components/SelectItem";
import { useGetFineDustDataQuery } from "../../api/findDustApi";
import { sidoNameList } from "../../constans/sidoName";

function SearchArea() {
  const [sidoNameOption, setSidoNameOption] = useState("전국");
  const { data, isLoading, isError } = useGetFineDustDataQuery(sidoNameOption);

  const changeHandler = (sidoNameOption) => {
    setSidoNameOption(sidoNameOption.value);
  };

  if (isLoading) return <>로딩중 ...</>;
  if (isError) return <>에러 ...</>;
  return (
    <div>
      <S.SearchContainer>
        <S.ItemWrapper>
          {data.map((item, index) => (
            <S.NavbarLink to={"/" + item.stationName} state={item} key={index}>
              <SecondInfoItem
                data={item}
                sidoName={item.sidoName}
                stationName={item.stationName}
                dataTime={item.dataTime}
                pm10Grade={item.pm10Grade}
                pm10Value={item.pm10Value}
              />
            </S.NavbarLink>
          ))}
        </S.ItemWrapper>
        <S.SelectWrapper>
          <SelectItem
            placeholder={"시/도"}
            width={300}
            changeHandler={changeHandler}
            setSidoNameOption={setSidoNameOption}
            options={sidoNameList}
          />
        </S.SelectWrapper>
      </S.SearchContainer>
    </div>
  );
}

export default SearchArea;
