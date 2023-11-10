var css = document.createElement("link");
css.rel = "stylesheet";
css.type = "text/css";
css.href = "/css/custom.css";
document.head.appendChild(css);

var id = Math.floor(Math.random()*61)+1;
document.body.style.backgroundImage = "url('/img/bg/" + id + ".jpg')";