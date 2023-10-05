const headerEl = document.querySelector("#header");

// // 페이지에 스크롤 이벤트 추가
// window.addEventListener(
//   "scroll",
//   _.throttle(function () {
//     console.log(window.scrollY);
//     // 페이지의 스크롤 위치가 200px보다 크면
//     if (window.scrollY > 200) {
//       // gsap.to(요소, 시간, 옵션)
//       gsap.to(headerEl, 0.6, {
//         opacity: 0,
//         display: "none",
//       });
//     } else {
//       // 페이지의 스크롤 위치가 200px보다 작으면
//       gsap.to(headerEl, 0.6, {
//         opacity: 1,
//         display: "block",
//       });
//     }
//   }, 300)
// );
