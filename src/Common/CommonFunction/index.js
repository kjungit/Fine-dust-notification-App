const favoriteData = JSON.parse(localStorage.getItem("favoriteData")) || [];

const onClickHandle = (e, isClicked, setIsClicked, data) => {
  e.preventDefault();
  const existingDataIndex = favoriteData.findIndex(
    (item) => item.stationName === data.stationName
  );
  if (!isClicked) {
    if (existingDataIndex === -1) {
      favoriteData.push(data);
    }
  } else {
    if (existingDataIndex !== -1) {
      favoriteData.splice(existingDataIndex, 1);
    }
  }
  localStorage.setItem("favoriteData", JSON.stringify(favoriteData));
  setIsClicked(!isClicked);
};
