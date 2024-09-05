///constantes
const _elements = {
    loading: document.querySelector(".loading"),
    switch: document.querySelector(".switch_track"),
};

document
    .querySelector(".menu-btn")
    .addEventListener("click", () =>
        document.querySelector(".main-menu").classList.toggle("show")
    );

//função para alternar entre modo dark e light
_elements.switch.addEventListener("click", () => {
    const isDark = _elements.switch.classList.toggle("switch_track--dark");
    if (isDark) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.setAttribute("data-theme", "light");
});

//Countdown aqui
// Array contendo as datas finais para cada countdown
const endDates = [
    new Date("2024-01-31T23:59:59").getTime(),
    new Date("2024-02-29T23:59:59").getTime(),
    new Date("2024-01-17T23:59:59").getTime(),
    new Date("2024-01-31T23:59:59").getTime(),
    new Date("2024-02-29T23:59:59").getTime(),
    new Date("2024-01-17T23:59:59").getTime(),
    new Date("2024-02-29T23:59:59").getTime(),
    new Date("2024-01-17T23:59:59").getTime(),
    // Adicione mais datas finais conforme necessário
];

// Array contendo os IDs dos elementos do countdown
const countdownIds = [
    "countdown1",
    "countdown2",
    "countdown3",
    "countdown4",
    "countdown5",
    "countdown6",
    "countdown7",
    "countdown8",
];
// Adapte conforme o número de contadores que você precisa

// Função para atualizar um countdown específico
function updateCountdown(index, elementId) {
    const now = new Date().getTime();
    const timeLeft = endDates[index] - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById(
        elementId
    ).innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (timeLeft < 0) {
        clearInterval(interval);
        document.getElementById(elementId).innerHTML = "Tempo terminado";
    }
}

// Chama a função para atualizar os countdowns a cada segundo
const intervals = [];

// Atualiza inicialmente
for (let i = 0; i < endDates.length; i++) {
    updateCountdown(i, countdownIds[i]);
    intervals.push(
        setInterval(() => updateCountdown(i, countdownIds[i]), 1000)
    );
}

function toggleCart() {
    var x = document.querySelector(".shopping-cart");
    var cssprop = getComputedStyle(x).getPropertyValue("display");
    if (cssprop === "none") {
        x.style.display = "block";
        cssprop = "block";
    } else {
        x.style.display = "none";
    }
    document.getElementById("tmessage").innerHTML = cssprop;
}
