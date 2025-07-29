// script.js
let body = document.querySelector("body");
let select = document.querySelector("select");


let setSysTheme = function () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        body.classList.add("light");
        body.classList.remove("dark");
    }

}


let savedTheme = localStorage.getItem("class");
select.value = savedTheme || "system";
if (savedTheme) {
    body.classList.remove("light", "dark");
    body.classList.add(savedTheme);
} else {
    setSysTheme();
}


window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    if (!(localStorage.getItem("class"))) {
        setSysTheme();
    }
})


select.addEventListener("change", function (val) {
    let selected = val.target.value;

    if (selected === "light") {
        body.classList.remove("light", "dark");
        body.classList.add("light");
        localStorage.setItem("class", "light")
    } else if (selected === "dark") {
        body.classList.remove("light", "dark");
        body.classList.add("dark");
        localStorage.setItem("class", "dark")
    } else {
        localStorage.removeItem("class");
        setSysTheme();
    }
})