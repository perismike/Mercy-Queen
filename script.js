let currentBg = 1;

function changeBackground(image) {
    const bg1 = document.querySelector(".bg1");
    const bg2 = document.querySelector(".bg2");

    if (currentBg === 1) {
        bg2.style.backgroundImage = `url('${image}')`;
        bg2.style.opacity = 1;
        bg1.style.opacity = 0;
        currentBg = 2;
    } else {
        bg1.style.backgroundImage = `url('${image}')`;
        bg1.style.opacity = 1;
        bg2.style.opacity = 0;
        currentBg = 1;
    }
}

/* Buttons */
function feelAlone() {
    changeBackground("images/alone.jpeg");
    document.getElementById("message").innerHTML =
        "Even in loneliness, you are still surrounded by love. This moment will pass.";
}

function feelSmile() {
    changeBackground("images/smile.jpeg");
    document.getElementById("message").innerHTML =
        "Let your smile return gently. You deserve happiness again.";
}

function missHim() {
    changeBackground("images/miss.jpeg");
    document.getElementById("message").innerHTML =
        "Missing someone means they mattered deeply. Love never disappears.";
}

function marvinMessage() {
    changeBackground("images/marvin.jpeg");
    document.getElementById("message").innerHTML = `
        If Marvin could speak, he would say:<br><br>

        Keep going. Keep living. Keep becoming stronger.<br><br>

        He would want you to:
        <ul style="text-align:left;">
            <li>Smile again without guilt</li>
            <li>Chase your dreams</li>
            <li>Remember him with love</li>
            <li>Live a life he would be proud of</li>
        </ul>
    `;
}