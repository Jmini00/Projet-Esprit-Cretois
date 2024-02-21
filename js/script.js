
const menuSlider = document.getElementById('menu-slider');
const btSlider = document.querySelector('.container');
let i = 0;
btSlider.addEventListener('click', (e) => {
    btSlider.classList.toggle('change');

    if (i === 0) {
        menuSlider.style.animation = "anim-slider-on .7s forwards";
        i = 1;
    } else {
        menuSlider.style.animation = "anim-slider-off .7s forwards";
        i = 0;
    }

})


    const data = "Je suis une popup !!!<br>cliquez pour me fermer";
    const l = 500;
    const h = 300;

    const openModal = (data, l, h) => {
    const bodyTagDoc = document.body;
    const htmlModal = `
    <div id="modal">
        <div id="popup">
            <p>${data}</p>
        </div>
    </div>
    `;

    bodyTagDoc.insertAdjacentHTML('afterbegin', htmlModal);
    const modal = document.getElementById("modal");
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.background = "rgba(0,0,0,.8)";
    modal.style.display = "flex";
    modal.style.justifyContent = "center";
    modal.style.alignItems = "center";
    modal.style.position = "relative";
    modal.style.zIndex = 100;

    const popup = document.getElementById('popup');
    popup.style.width = l + "px";
    popup.style.height = h + "px";
    popup.style.background = "#12247a";
    popup.style.color = "white";
    popup.style.fontSize = "20px";
    popup.style.textAlign = "center";
    popup.style.padding = "30px";
    popup.style.position = "relative";

    popup.insertAdjacentHTML("afterbegin", '<div id="close">X</div>');
    const btClose = document.getElementById("close");
    btClose.style.position = "absolute";
    btClose.style.right = "20px";
    btClose.style.top = "10px";
    btClose.style.cursor = "pointer";
    btClose.style.color = "white";
    btClose.style.fontSize = "20px";
}


    const closeModal = () => {
    const modal = document.getElementById("modal");
    modal.remove();
}

openModal(data, l, h);

const btClose = document.getElementById("close");
const modal = document.getElementById("modal");
btClose.addEventListener('click', closeModal);
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
})


const btReadMore1 = document.querySelector('article button');
btReadMore1.addEventListener('click', (e) => {
    const hiddenP = document.querySelector(`.hidden-p`);
    hiddenP.classList.toggle('animReadMore');
}) 

const btReadMore2 = document.querySelector('article:last-of-type button');
btReadMore2.addEventListener('click', (e) => {
    const hiddenP2 = document.querySelector(`article:last-of-type .hidden-p`);
    hiddenP2.classList.toggle('animReadMore');
}) 
