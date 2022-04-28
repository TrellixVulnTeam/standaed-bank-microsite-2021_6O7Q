function menuFunction() {
    var x = document.getElementById("downloads");
    const rolling = document.querySelector(".stop-scrolling");
    const ActiveHamb = document.querySelectorAll(".hamburguer-icon__bar");
    const ActiveDown = document.querySelectorAll(".downloadText");
    if (x.className.includes('menu-in')) {
      console.log("1");
      x.classList.add('menu-out');
      x.classList.remove('menu-in');
      // rolling.style.overflowY = "auto";
      document.getElementById('hamb').src="img/hamb.svg";
      document.getElementById('hamb-phone').src="img/hamb.svg";
      document.getElementById("00").style.position = "absolute";
      for (const box of ActiveHamb) {
        box.classList.remove('hamburguer-icon__active');
      }
      for (const box of ActiveDown) {
        box.classList.remove('navbar-downloadTextOn');
      }
      
      
    } else {
      x.classList.add('menu-in');
      x.classList.remove('menu-out');
      document.getElementById('hamb').src="img/cross.svg";
      document.getElementById('hamb-phone').src="img/cross.svg";
      for (const box of ActiveHamb) {
        box.classList.add('hamburguer-icon__active');
      }
      for (const box of ActiveDown) {
        box.classList.add('navbar-downloadTextOn');
      }
      document.getElementById("00").style.position = "fixed";
      // rolling.style.overflowY = "hidden";

    }
  }

