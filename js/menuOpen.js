function menuFunction() {
    var x = document.getElementById("downloads");
    const rolling = document.querySelector(".stop-scrolling");
    const buttonActive = document.querySelector(".navbar__button--2");
    const buttonActiveMobile = document.querySelector(".navbar__button--2-mobile");
    const ActiveHamb = document.querySelectorAll(".hamburguer-icon__bar");
    const ActiveDown = document.querySelectorAll(".downloadText");
    const button1 = document.querySelector(".navbar__button--1");
    if (x.className.includes('menu-in')) {
      x.classList.add('menu-out');
      x.classList.remove('menu-in');
      rolling.style.overflowY = "auto";
      document.getElementById('hamb').src="img/hamb.svg";
      for (const box of ActiveHamb) {
        box.classList.remove('hamburguer-icon__active');
      }
      for (const box of ActiveDown) {
        box.classList.remove('navbar-downloadTextOn');
      }
      buttonActive.classList.remove('button-active');
      buttonActiveMobile.classList.remove('button-active-mobile');
      button1.classList.remove('remove-border');
      
      
    } else {
      x.classList.add('menu-in');
      x.classList.remove('menu-out');
      document.getElementById('hamb').src="img/cross.svg";
      for (const box of ActiveHamb) {
        box.classList.add('hamburguer-icon__active');
      }
      for (const box of ActiveDown) {
        box.classList.add('navbar-downloadTextOn');
      }
      // ActiveHamb.classList.add('hamburguer-icon__active')
      rolling.style.overflowY = "hidden";
      buttonActive.classList.add('button-active');
      buttonActiveMobile.classList.add('button-active-mobile');
      button1.classList.add('remove-border');
    }
  }

