function menuFunction() {
    var x = document.getElementById("downloads");
    const rolling = document.querySelector(".stop-scrolling");
    const buttonActive = document.querySelector(".navbar__button--2");
    const buttonActiveMobile = document.querySelector(".navbar__button--2-mobile");
    const activeButton = document.querySelector(".active-button");
    const button1 = document.querySelector(".navbar__button--1");
    if (x.className.includes('menu-in')) {
      x.classList.add('menu-out');
      x.classList.remove('menu-in');
      rolling.style.overflowY = "auto";
      buttonActive.classList.remove('button-active');
      buttonActiveMobile.classList.remove('button-active-mobile');
      button1.classList.remove('remove-border');
    } else {
      x.classList.remove('menu-out');
      x.classList.add('menu-in');
      rolling.style.overflowY = "hidden";
      buttonActive.classList.add('button-active');
      buttonActiveMobile.classList.add('button-active-mobile');
      button1.classList.add('remove-border');
    }
  }