export const images = [
  "/asset/gallery/oneday/oneday_01.jpg",
  "/asset/gallery/oneday/oneday_02.jpg",
  "/asset/gallery/oneday/oneday_03.jpg",
  "/asset/gallery/oneday/oneday_04.jpg"
];


export const createSlider = (containerId) => {
  const container = document.getElementById(containerId);

  // 슬라이더 중복 초기화 방지
  if (!container) return;

  // 기존 슬라이드 초기화
  container.innerHTML = "";

  // 슬라이드 이미지 인덱스
  let currentIndex = 0;

  // 이미지 요소들 생성
  const imageElements = images.map((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Slide ${index + 1}`;
    img.style.display = "none";  // 처음에는 보이지 않도록 설정
    return img;
  });

  // 첫 번째 이미지는 표시
  imageElements[currentIndex].style.display = "block";

  // 컨테이너에 이미지 추가
  imageElements.forEach((img) => {
    container.appendChild(img);
  });

  // 슬라이드 변경 함수
  const changeSlide = () => {
    imageElements[currentIndex].style.display = "none";
    currentIndex = (currentIndex + 1) % imageElements.length;
    imageElements[currentIndex].style.display = "block";
  };

  setInterval(changeSlide, 3000);
};
