import React, { useState } from "react";
import * as S from "./style";
import SecondInfoItem from "../../components/SecondInfoItem";
import SelectItem from "../../components/SelectItem";
import { useGetFineDustDataQuery } from "../../api/findDustApi";
import { sidoNameList } from "../../constans/sidoName";

function SearchArea() {
  const [sidoNameOption, setSidoNameOption] = useState("전국");
  const { data, isLoading, isError } = useGetFineDustDataQuery(sidoNameOption);
  console.log(data, isLoading, isError);
  const changeHandler = (sidoNameOption) => {
    setSidoNameOption(sidoNameOption.value);
  };

  if (isLoading)
    return (
      <S.Background>
        <S.Spinner />
      </S.Background>
    );
  if (isError)
    return (
      <S.Background>
        <S.Spinner />
      </S.Background>
    );
  return (
    <div>
      <S.SearchContainer>
        <S.ItemWrapper>
          {data.response.body.items.map((item, index) => (
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
