const button = document.getElementById("menu");
const topbar = document.getElementById("topbar");
const menuPages = document.getElementById("menu-pages");
const container = document.getElementById("container");
const progress = document.getElementById("progress")

const buttonClickEvent = () => {
    if (button.getAttribute("status") == "close") {
        button.setAttribute("status", "open");

        topbar.style.height = "100vh";
        container.style.height = "100vh";
        topbar.style.alignItems = "start";
        menuPages.style.display = "flex";
    } else {
        button.setAttribute("status", "close");
        setInterval(() => {
            topbar.clientHeight -= 10;
        }, 500);

        container.style.height = "8.7vh";
        topbar.style.height = "8.7vh";
        topbar.style.alignItems = "center";
        menuPages.style.display = "none";
    }
}

window.onscroll = () => {
    const limit = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
    const html = document.documentElement;
    let value = (100 * html.scrollTop) / (limit - 929);
    progress.style.width = value + "%";
}

window.onload = () => {
    setTimeout(() => {
    }, 2000)
}

window.onclick = (e) => {
    if (!e.srcElement.innerHTML == "") {
        button.setAttribute("status", "close");

        container.style.height = "8.7vh";
        topbar.style.height = "8.7vh";
        topbar.style.alignItems = "center";
        menuPages.style.display = "none";
    }
}