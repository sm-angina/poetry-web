const stars1 = document.getElementById("stars1").querySelectorAll(".fa-star");
const stars2 = document.getElementById("stars2").querySelectorAll(".fa-star");
const color = [
  "#4CC9FE",
  "#51C4D3",
  "#B0EBB4",
  "#09C6AB",
  "#B8FFD0",
  "#4CC9FE",
  "#D2E0FB",
  "#B6FFFA",
  "#863A6F",
];

const animation = [
  "animation-timing-function: cubic-bezier(.68,.25,.83,.67);",
  "animation-timing-function: cubic-bezier(.68,.25,.41,.86);",
  "animation-timing-function: cubic-bezier(0,.74,1,.39)",
  "animation-timing-function: cubic-bezier(0,1.42,1,.39);",
  "animation-timing-function: cubic-bezier(.25,.62,.99,.56);",
];

setInterval("fallStar(stars1)", 2500);
setInterval("fallStar(stars2)", 2890);

function fallStar(stars) {
  let i = Math.floor(Math.random() * stars.length);
  let c = Math.floor(Math.random() * color.length);
  let a = Math.floor(Math.random() * animation.length);
  stars[i].style = `color: ${color[c]}; animation-name: stars; ${animation[a]}`;
  setTimeout(() => {
    stars[i].style = `animation: none`;
  }, 2490);
}

let poemBox = document.querySelectorAll(".poem-box");
poemBox.forEach((element) =>
  element.addEventListener("click", () =>
    element.classList.toggle("box-shadow")
  )
);

document.onscroll = () => {
  if (!navVisibility && !aScrolling) {
    if (window.scrollY >= 600) {
      showNavi.querySelector("i").style.transition = "200ms";
      showNavi.querySelector("i").style.opacity = "0";

      setTimeout(() => {
        showNavi.querySelector("i").style.transition = "500ms";
        showNavi.querySelector("i").style.opacity = "1";
      }, 1000);
    } else {
      showNavi.style.opacity = "1";
    }
  }
};

const nav = document.querySelector("nav"),
  showNavi = document.querySelector(".nav-control-i"),
  wrapper = document.querySelector(".wrapper"),
  background = document.querySelector(".bg");
let navVisibility = false;

showNavi.addEventListener("click", () => {
  if (navVisibility) {
    wrapper.style.transform = "none";
    showNavi.querySelector("i").style.transform = "none";

    nav.style.opacity = "0";
    setTimeout(() => {
      nav.style.zIndex = "-1";
    }, 500);
    showNavi.style.transform = "none";
    navVisibility = false;
    showNavi.querySelector("i").style.opacity = "1";
  } else {
    wrapper.style.transform = "translateX(-10vw)";
    showNavi.querySelector("i").style.transform = "rotate(360deg)";
    setTimeout(() => {
      nav.style.zIndex = "1";
      nav.style.opacity = "1";
    }, 200);
    navVisibility = true;
  }
});

const navi = document.querySelector("nav").querySelectorAll("i");
navi.forEach((element) => {
  element.addEventListener("click", () => {
    if (
      element.classList.contains("sun-i") &&
      element.classList.contains("chat-i")
    ) {
      element.style.color = "red";
      setTimeout(() => {
        element.style.color = "rgb(var(--text))";
      }, 150);
    }
  });
});

let bgImage = "moon";
document.querySelector(".sun-i").addEventListener("click", changeBg)
function changeBg(){
  if (bgImage == "moon") {
    background.style.backgroundImage = "url(src/IMG-SUN01-.jpg)";
    if(document.body.offsetWidth > 780){
      background.style.backgroundSize = "110vh"
    }
    poemBox.forEach((box) => {
      box.style.backgroundColor = "rgb(207, 207, 207, 0.22)"
      box.style.color = "rgba(0, 0, 0, 0.829)"
      box.querySelector('.poet').style.borderBottom = '1px dashed #000'
      box.style.fontWeight = "500"
    })
    bgImage = "sun";
    showNavi.click();
  localStorage.setItem('bgSun','yes')
  } else {
    if(document.body.offsetWidth > 780){
      background.style.backgroundSize = "100vw"
    }
    background.style.backgroundImage = "url(src/IMG-MOON-.jpg)";
    poemBox.forEach((box) => {
      box.style.backgroundColor = "rgba(0, 0, 0, 0.297)"
      box.style.color = "rgb(var(--text))"
      box.querySelector('.poet').style.borderBottom = '.5px dashed #fff'
      box.style.fontWeight = "none"
    })
    bgImage = "moon";
    showNavi.click();
    localStorage.removeItem('bgSun')
  }
  setTimeout(() => {
    document.querySelector(".sun-i").classList.toggle("bxs-sun");
    document.querySelector(".sun-i").classList.toggle("bxs-moon");
  }, 200);
};


let aScrolling = false;
document.querySelector(".a-scrolli").addEventListener("click", (e) => {
  if (aScrolling) {
    clearInterval(aScroll);
    document.querySelector(".a-scrolli").style.color = "rgb(var(--text))";
    aScrolling = false;
    showNavi.click();
  } else {
    document.querySelector(".a-scrolli").style.color = "red";
    aScroll = setInterval(() => {
      scrollBy(0, 1);
    }, 40);
    aScrolling = true;
    showNavi.click();
  }
});

const favButton = document.querySelector(".fav-button");
favButton.style.transition = "500ms";
favButton.addEventListener("click", () => {
  favButton.classList.toggle("fa-regular");
  favButton.classList.toggle("fa-solid");
  favButton.classList.toggle("fa-bounce");
  favButton.style.color = "#ed333b";
  localStorage.setItem("isFav", "yes");
  if (favButton.classList.contains("fa-solid")) {
    localStorage.setItem("isSolid", "yes");
  } else {
    localStorage.removeItem("isSolid");
  }
});

let isFav = localStorage.getItem("isFav");
let isSolid = localStorage.getItem("isSolid");
let bgSun = localStorage.getItem("bgSun")
if (isFav == "yes") {
  favButton.style.color = "#ed333b";
  if (isSolid == "yes") {
    favButton.classList.remove("fa-regular");
    favButton.classList.add("fa-solid");
    favButton.classList.remove("fa-bounce");
  } else {
  }
}
if(bgSun == 'yes'){
    background.style.backgroundImage = "url(src/IMG-SUN01-.jpg)";
    if(document.body.offsetWidth > 780){
      background.style.backgroundSize = "110vh"
    }
    poemBox.forEach((box) => {
      box.style.transition = "none"
      box.style.backgroundColor = "rgb(207, 207, 207, 0.22)"
      box.style.color = "rgba(0, 0, 0, 0.829)"
      box.style.fontWeight = "500"
      box.querySelector('.poet').style.borderBottom = '1px dashed #000'
      setTimeout(box.style.transition = "500ms", 100)
    })
    bgImage = "sun";
      setTimeout(() => {
    document.querySelector(".sun-i").classList.toggle("bxs-sun");
    document.querySelector(".sun-i").classList.toggle("bxs-moon");
  }, 200);
}

// //    highlight text

// poemBox.forEach((box) => {
//   let text = box.querySelector('p').innerHTML
//   let words = text.split(' ')
//   box.querySelector('p').innerHTML = words.map(word => `<span>${word}</span>`).join(' ')
//   let spans = box.querySelector('p').getElementsByTagName('span')
//   for (let span of spans) {
//     span.addEventListener('mouseover', function() {
//       this.classList.add('highlight')
//     })
//     span.addEventListener('mouseout', function() {
//       this.classList.remove('highlight')
//     })
//   }
//     })
