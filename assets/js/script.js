import { imgData } from "../imagesData/images.js";
const tabs = document.querySelectorAll(".aft");
const box = document.querySelector("#images");

let select = "";
//

const myFilter = () => {
  const change = (value) => {
    return value.category == select;
  };

  let add = "";
  imgData.filter(change).map((item) => {
    add += `<img src=${item.photo} class="animate__animated animate__fadeIn" alt="">`;
  });
  box.innerHTML = add;
};

tabs[1].onclick = () => {
  select = "Brand";
  myFilter();
};
tabs[2].onclick = () => {
  select = "Websites";
  myFilter();
};
tabs[3].onclick = () => {
  select = "Print";
  myFilter();
};
tabs[4].onclick = () => {
  select = "Photo";
  myFilter();
};

// Button After
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => {
      tab.classList.remove("dash");
    });
    tab.classList.add("dash");
  });
});
