import React, { useEffect, useRef, useState } from "react";
import { useGetFineDustDataQuery } from "../../api/findDustApi";
import MainInfoItem from "../../components/MainInfoItem";
import SelectItem from "../../components/SelectItem";
import * as S from "./style";
import { sidoNameList } from "../../constans/sidoName";

function MyAreaPage() {
  const didMount = useRef(false);
  const [sidoNameOption, setSidoNameOption] = useState("전국");
  const [stationNameOption, setStationNameOption] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const { data, isLoading, isError } = useGetFineDustDataQuery(sidoNameOption);

  useEffect(() => {
    if (didMount.current && data) {
      setFilterData(data.response.body.items);
      const stationOption = Object.values(data.response.body.items)
        .map((item) => item.stationName)
        .map((item) => {
          return { value: { item }, label: item };
        });
      console.log(stationNameOption);
      setStationNameOption(stationOption);
    } else didMount.current = true;
  }, [sidoNameOption, data]);

  const changeHandler = (sidoNameOption) => {
    if (sidoNameList.includes(sidoNameOption)) {
      setSidoNameOption(sidoNameOption.value);
    } else {
      const selectStation = data.response.body.items.filter(
        (item) => item.stationName === sidoNameOption.value.item
      );
      setFilterData(selectStation);
    }
  };

  if (stationNameOption.length === 0) {
    <S.EmptyWrapper>
      <S.Title>지역을 선택해주세요.</S.Title>
    </S.EmptyWrapper>;
  }

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
    <S.MyAreaContainer>
      <S.ItemWrapper>
        {filterData &&
          filterData.map((item, index) => (
            <S.NavbarLink
              to={"/detail/" + item.stationName}
              state={item}
              key={index}
            >
              <MainInfoItem
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
          width={140}
          changeHandler={changeHandler}
          setSidoNameOption={setSidoNameOption}
          options={sidoNameList}
        />
        <SelectItem
          placeholder={"지역이름"}
          width={140}
          changeHandler={changeHandler}
          setSidoNameOption={setSidoNameOption}
          options={stationNameOption}
        />
      </S.SelectWrapper>
    </S.MyAreaContainer>
  );
}

export default MyAreaPage;
