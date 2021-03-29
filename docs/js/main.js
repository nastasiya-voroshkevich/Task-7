const links = document.querySelectorAll("[data-toggle-id]");
const contentImges = document.querySelectorAll("[data-content]");

links.forEach(function (item) {
  item.addEventListener("click", function (event) {
    const id = event.target.dataset.toggleId;
    const contentImg = document.getElementById(id);

    contentImges.forEach(function (item) {
      // for (let i=0; i< contentImges.length -1 ; i++) {
      // contentImges[i].hidden = true;

      //  }
      item.hidden = true;
    });

    contentImg.hidden = false;
    //contentImg.classList.add("turning");
    contentImg.classList.add("anim");
  });
});
