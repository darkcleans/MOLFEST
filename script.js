

        const menu = document.querySelector(".menu");
        const yanMenu = document.getElementById("yanMenu");

        menu.addEventListener("click", function () {

            if (yanMenu.style.left === "0px") {
                yanMenu.style.left = "-280px";
            } else {
                yanMenu.style.left = "0px";
            }

        });

        const kapat = document.getElementById("kapatMenu");

kapat.addEventListener("click", function () {
    yanMenu.style.left = "-280px";
});