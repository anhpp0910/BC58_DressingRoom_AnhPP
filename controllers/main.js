// Mảng item theo từng loại
const clothItems = [
  (topcloth = [
    "../assets/images/clothes/topcloth1.png",
    "../assets/images/clothes/topcloth2.png",
    "../assets/images/clothes/topcloth3.png",
    "../assets/images/clothes/topcloth4.png",
    "../assets/images/clothes/topcloth5.png",
    "../assets/images/clothes/topcloth6.png",
  ]),
  (botcloth = [
    "../assets/images/clothes/botcloth1.png",
    "../assets/images/clothes/botcloth2.png",
    "../assets/images/clothes/botcloth3.png",
    "../assets/images/clothes/botcloth4.png",
    "../assets/images/clothes/botcloth5.png",
  ]),
  (shoes = [
    "../assets/images/shoes/shoes1.png",
    "../assets/images/shoes/shoes2.png",
    "../assets/images/shoes/shoes3.png",
    "../assets/images/shoes/shoes4.png",
    "../assets/images/shoes/shoes5.png",
  ]),
  (handbag = [
    "../assets/images/handbags/handbag1.png",
    "../assets/images/handbags/handbag2.png",
    "../assets/images/handbags/handbag3.png",
  ]),
  (necklace = [
    "../assets/images/necklaces/necklace1.png",
    "../assets/images/necklaces/necklace2.png",
    "../assets/images/necklaces/necklace3.png",
  ]),
  (hairstyle = [
    "../assets/images/hairstyle/hairstyle1.png",
    "../assets/images/hairstyle/hairstyle2.png",
    "../assets/images/hairstyle/hairstyle3.png",
  ]),
  (background = [
    "../assets/images/background/background1.jpg",
    "../assets/images/background/background2.jpg",
    "../assets/images/background/background3.jpg",
    "../assets/images/background/background4.jpg",
    "../assets/images/background/background5.jpg",
    "../assets/images/background/background6.jpg",
    "../assets/images/background/background7.jpg",
  ]),
];

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");
// Mảng div để mặc đồ bên modal
const tryOnDivs = $$(".tryOn");

let listBtnByTab = $$(".tab-pane.active .btn");
// Mặc định khi chưa click chuyển tab thì choseTabItems, tryOnDiv, activeIndex sẽ là 0 - của Áo
let choseTabItems = clothItems[0];
let tryOnDiv = tryOnDivs[0];
let activeIndex = 0;

// Hàm mặc đồ, ứng với activeIndex 0 là Áo, 1 là Quần ... (theo thứ tự tab)
const tryOn = (activeIndex, tryOnDiv, choseTabItems) => {
  listBtnByTab.forEach((btn, index) => {
    btn.onclick = function () {
      switch (activeIndex) {
        case 0:
          tryOnDiv.style.backgroundImage = `url(${choseTabItems[index]})`;
          tryOnDiv.style.width = "500px";
          tryOnDiv.style.height = "1000px";
          tryOnDiv.style.left = "-5.5%";
          tryOnDiv.style.top = "-31%";
          tryOnDiv.style.transform = "scale(0.5)";
          break;
        case 1:
          tryOnDiv.style.backgroundImage = `url(${choseTabItems[index]})`;
          tryOnDiv.style.width = "500px";
          tryOnDiv.style.height = "1000px";
          tryOnDiv.style.left = "-5.5%";
          tryOnDiv.style.top = "-30%";
          tryOnDiv.style.transform = "scale(0.5)";
          break;
        case 2:
          tryOnDiv.style.backgroundImage = `url(${choseTabItems[index]})`;
          break;
        case 3:
          tryOnDiv.innerHTML = `<img src=${choseTabItems[index]} />`;
          break;
        case 4:
          tryOnDiv.innerHTML = `<img src=${choseTabItems[index]} />`;
          break;
        case 5:
          tryOnDiv.innerHTML = `<img src=${choseTabItems[index]} />`;
          break;
        case 6:
          tryOnDiv.style.backgroundImage = `url(${choseTabItems[index]})`;
          break;
      }
    };
  });
};

// Gọi hàm tryOn lần đầu để áp cho Áo
tryOn(activeIndex, tryOnDiv, choseTabItems);

// Khi chuyển tab thì gọi hàm tryOn lần nữa để áp vô tab tương ứng
tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");
    this.classList.add("active");
    pane.classList.add("active");
    listBtnByTab = $$(".tab-pane.active .btn");
    activeIndex = index;
    choseTabItems = clothItems[index];
    tryOnDiv = tryOnDivs[index];
    tryOn(activeIndex, tryOnDiv, choseTabItems);
  };
});
