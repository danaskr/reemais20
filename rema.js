const startButton = document.getElementById('startButton');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const messageButton = document.getElementById('messageButton');
const nowarButton = document.getElementById('nowarButton');
const zainaButton = document.getElementById('zainaButton');
const basButton = document.getElementById('basButton');
const shaButton = document.getElementById('shaButton');
const messagePopup = document.getElementById('messagePopup');

const slideshowButton = document.getElementById('slideshowButton');
const slideshowContainer = document.getElementById('slideshowContainer');

const muteButton = document.getElementById('muteButton');
const backgroundMusic = document.getElementById('backgroundMusic');


document.body.style.fontFamily = 'Comic Sans MS';

const popupMessages = {
    default: "Happy 20th birthday to the sweetest person ever, انشالله يا ريما🦌 كل ايامك الجاية احلى من الي راحت و تلاقي فيها خيراحسن من الس بتتوقعيه , بحبك و انشالله نشوفك عن قريب و باحسن الظروف .لسا صغار احنا عفكرة هبل عشريين :)❤ ",
    nowar: `My only ريمتي 🦌🤍🤍
    هابي بيرثداي تو يو يا احلى وحدة و احلى قلب بالعالم كلو ❤ بحبك كتيررر و اشتقتلك كتير كتير ❤ 
    انتي الي عاملة لحياتنا طعم و انتي الي بلجألك في كل اشي حرفيا و طول الوقت بتخطري عبالي و بصلي و بشكر الله عوجودك بحياتي 
    انتي عنجد مش اشي بسيط ابدا بالنسبة الي انتي عملتي اثر كبير فيا❤❤`,
    zaina: `كلل عااام وانت بخير ريماااا انشالله عيدميلادك الجاي نحتفل فيه سوياااا وتخلص هالحربب❤❤
لف يوو❤❤`,
    bas: `كل عام وانتي بخير اغلى ريما🥹♥العمر كلو حبيتبي ان شاء الله السنة الجاية بنكون كلنا مع بعض🥹وبنحتفل وبننبسط ان شاء الله🥹احلى ٢٠ بحياتنا بحبك♥`,
    sha: `كل عام ونتي بالف خير يا اغلى وانقى واصفى وارق وارقى واجمل وحدة بحياتي ❤بحبك كتير يريموشتي ، السنة هاي عنجد استوعبت قديش انتي بتعنيلي وقديش انتي انسانة مش طبيعية كيف وقفتي معي ودايما بتسالي عني وبتهتمي لمشاكلي اللي بيجوش اشي جمب مشاكلك فعلا انك انسانة رائعة ❤ان شاء الله تكون سنة كلها فرج وفرح ونجاح الك يارب يروحي وتحققي كل احلامك ونلتقي ياررررب`,
};


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawFlower(x, y, size, color) {
    const petals = 5;
    ctx.fillStyle = color;
    for (let i = 0; i < petals; i++) {
        ctx.beginPath();
        const angle = (i * 2 * Math.PI) / petals;
        const petalX = x + Math.cos(angle) * size;
        const petalY = y + Math.sin(angle) * size;
        ctx.arc(petalX, petalY, size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(x, y, size / 4, 0, Math.PI * 2);
    ctx.fill();
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function startDrawingFlowers() {
    setInterval(() => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 30 + 10;
        const color = getRandomColor();
        drawFlower(x, y, size, color);
    }, 500);
}

function openPopup(message) {
    messagePopup.style.display = 'flex';
    const popupContent = document.getElementById('popupContent');
    popupContent.innerHTML = `<p>${message}</p><button onclick="closePopup()">Close</button>`;
}

function closePopup() {
    messagePopup.style.display = 'none';
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    canvas.style.display = 'block';
    startDrawingFlowers();
    messageButton.style.display = 'block';
    nowarButton.style.display = 'block';
    zainaButton.style.display = 'block';
    basButton.style.display = 'block';
    shaButton.style.display = 'block';
    slideshowButton.style.display = 'block';

    muteButton.style.display = 'block';
    backgroundMusic.play();
});

// Toggle mute/unmute
muteButton.addEventListener('click', () => {
    if (backgroundMusic.muted) {
        backgroundMusic.muted = false;
        muteButton.textContent = 'Mute';
    } else {
        backgroundMusic.muted = true;
        muteButton.textContent = 'Unmute';
    }
});

messageButton.addEventListener('click', () => openPopup(popupMessages.default));
nowarButton.addEventListener('click', () => openPopup(popupMessages.nowar));
zainaButton.addEventListener('click', () => openPopup(popupMessages.zaina));
basButton.addEventListener('click', () => openPopup(popupMessages.bas));
shaButton.addEventListener('click', () => openPopup(popupMessages.sha));

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// the slide show 
function openSlideshow() {
    slideshowContainer.style.display = 'flex';
}

function closeSlideshow() {
    slideshowContainer.style.display = 'none';
}

slideshowButton.addEventListener('click', openSlideshow);
