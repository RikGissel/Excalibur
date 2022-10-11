/* Force page to top on load START */
if (history.scrollRestoration) {
    history.scrollRestoration = "manual";
} else {
    onbeforeunload = function () {
        scrollTo(0, 0);
    };
}
/* Force page to top on load END */

/* Parallax code START */
let sunset_bg = document.getElementById("sunset_bg");
let sun = document.getElementById("sun");
let mountains_behind = document.getElementById("mountains_behind");
let forest_front = document.getElementById("forest_front");
let excalibur_sword = document.getElementById("excalibur_sword");
let flying_birds = document.getElementById("flying_birds");

addEventListener("scroll", function () {
    let value = scrollY;
    sunset_bg.style.right = value * 0.25 + "px";
    sun.style.top = value * 1.05 + "px";
    mountains_behind.style.top = value * 0.5 + "px";
    forest_front.style.top = value * 0 + "px";
    excalibur_sword.style.top = value * 200 + "px";
    flying_birds.style.marginLeft = value * 1 + "px";
    flying_birds.style.marginTop = value * 1 + "px";
});
/* Parallax code END */

/* Warrior walking animation START*/
const player = document.querySelector(".warrior");
addEventListener("scroll", function () {
    const x = parseInt((scrollY % 3000) / 47.6);
    player.src = `assets/warrior_img/0_Warrior_Walk_${x}.png`;
});

/* Warrior position fixed START */
onscroll = function () {
    warriorFunction();
};

function warriorFunction() {
    if (scrollY > 510) {
        if (document.getElementById("warrior_walk")) {
            document.getElementById("warrior_walk").id = "fixed";
        }
        if (document.getElementById("fixed2")) {
            document.getElementById("fixed2").id = "fixed";
        }
    }
    if (scrollY < 500) {
        if (document.getElementById("fixed")) {
            document.getElementById("fixed").id = "fixed2";
        }
    }
}
/* Warrior position fixed END */
/* Warrior walking animation END*/

/* ScrollReveal JS START */

const bow = ScrollReveal({
    distance: "60px",
    duration: 2000,
    delay: 400,
    reset: true,
});

bow.reveal("#bow_arrow", { delay: 400, origin: "top" });

/* Golem Animation START */

const golem = ScrollReveal({
    distance: "60px",
    duration: 1500,
    delay: 400,
    reset: true,
});

golem.reveal("#walking_golem", { delay: 400, origin: "left" });

/* Golem Animation END */

/* Goblin & Elf animation START */
const goblin = ScrollReveal({
    distance: "60px",
    duration: 2000,
    delay: 400,
    reset: true,
});

goblin.reveal("#goblin", { delay: 400, origin: "left" });

const archer = ScrollReveal({
    distance: "60px",
    duration: 2000,
    delay: 400,
    reset: true,
});

archer.reveal("#archer", { delay: 400, origin: "right" });
/* Goblin & Elf animation END */

/* ScrollReveal JS END */

/* TypewriterJS section START */
var header = document.getElementById("text");

var typewriter = new Typewriter(header, {
    loop: false,
});

typewriter.typeString("Begynd din rejse").pauseFor(5000).deleteAll().start();

setTimeout(function () {
    var text = document.getElementById("text");
    text.parentNode.removeChild(text);
}, 9500);
/* TypewriterJS section END */

/* Dragon Animation START */
window.addEventListener("scroll", function () {
    if (scrollY > document.getElementById("yellow_dragon").offsetTop - 1000) {
        document.getElementById("yellow_dragon").classList.add("activate_dragon");
    }
});
/* Dragon Animation END */

/* Orc Animation START */
window.addEventListener("scroll", function () {
    if (scrollY > document.getElementById("orc_walk").offsetTop - 2000) {
        document.getElementById("orc_walk").classList.add("activate_orc");
    }
});
/* Orc Animation END */

/* MODAL JS START */
var modal = document.getElementById("Modal");

var btn = document.getElementById("Btn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
    modal.style.display = "block";
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
/* MODAL JS END */
