# Fine-dust-norification-App 

---
![main](https://user-images.githubusercontent.com/100064540/228412038-a1995b1c-8b1d-4fe6-b717-d951534023d5.jpg)

- ### 작업내용

  - **한국환경공단 에어코리아 대기오염정보** 오픈 API 사용하여 데이터 연결
  - 지역별(시, 도, 지역구별) 찾기, 검색 및 즐겨찾기 추가 기능 구현
  - 개별 지역 페이지
  - 페이지 라우터 구현
  - RTK를 통한 상태관리 및 캐싱

---

- 사용언어: React, JS
- 라이브러리: react-redux, redux-toolkit, axios, react-router-dom, styled-component,  react-select 

---

  ## App 소개

---

  ### 🏡 내 지역 미세먼지 데이터 확인


 ![myarea](https://user-images.githubusercontent.com/100064540/228406744-240a8f88-3dbf-4081-91d7-72a7030c272a.gif)


  - 각 지역별 데이터를 확인할 수 있으며, 원하는 지역의 상세 정보를 확인할 수 있다.

  ---

  ### 💨 지역 즐겨찾기

  ![fava](https://user-images.githubusercontent.com/100064540/228406782-df15809c-e180-4e44-b7c2-0d95986761c4.gif)

- 관심지역을 즐겨찾기할 수 있도록 로컬스토리지를 사용해서 구현, 추가 및 제거 가능

---

### 📌 즐겨찾기 내역 공유

![share](https://user-images.githubusercontent.com/100064540/228406814-548915fa-f86e-4d27-8533-560eb7b1964f.gif)


- 라우터가 되어도 즐겨찾기한 item들이 체크되어 있도록 구현, 같은 데이터들은 상태공유

---

### 👍🏻 프로젝트 진행 Review 

- 웹브라우저가 아닌 앱에 초점을 맞춰 작업을 진행하며 vite를 쓰지 않고 cra로 작업을 시작했다. PWA로 제작을 하다보니 생각보다 신경써야하는 부분들이 많아서 세팅을 하는데 시간을 많이 사용한거 같다.
- 3일동안 작업을 하면서 느낀거지만 vite가 새삼 좋은걸 다시한번 느꼈다.
- 상태관리에 있어서 꼭 리덕스를 사용해야하는걸까 라는 생각을 계속 해야할것 같다.
- RTK 쿼리를 통해서 비동기를 관리하면서 코드도 훨씬 짧았고 기능에서도 만족하며 작업을 했다.
- 팀 프로젝트를 들어가기전 미니프로젝트를 1개 2개라도 만들어보도록 해야겠다.
- 우선 pwa로 배포부터 다시 수정해야한다.
