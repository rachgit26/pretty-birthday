const screens = document.querySelectorAll('.screen');
const show = id => { screens.forEach(s => s.classList.toggle('active', s.id === id)); };
const no = document.querySelector('#no');
const area = document.querySelector('#answerArea');
const hint = document.querySelector('#hint');
let dodges = 0;

document.querySelector('#start').addEventListener('click', () => show('question'));
document.querySelector('#yes').addEventListener('click', startGame);
function dodge() {
  const maxX = area.clientWidth - no.offsetWidth - 12;
  const maxY = area.clientHeight - no.offsetHeight - 12;
  no.style.left = `${12 + Math.random() * maxX}px`;
  no.style.top = `${8 + Math.random() * Math.min(maxY, 90)}px`;
  no.style.transform = `rotate(${(Math.random() - .5) * 24}deg)`;
  dodges++;
  hint.textContent = 'Hmmm… this button seems a little shy 😌';
}
no.addEventListener('pointerenter', dodge); no.addEventListener('pointerdown', e => { e.preventDefault(); dodge(); });

let score = 0;
function startGame() { score = 0; document.querySelector('#score').textContent = score; show('miniGame'); spawnStar(); }
function spawnStar() {
  const field = document.querySelector('#starField');
  field.replaceChildren();
  const star = document.createElement('button');
  star.className = 'star'; star.textContent = '⭐'; star.setAttribute('aria-label','Catch a star');
  star.style.left = `${8 + Math.random() * 73}%`; star.style.top = `${10 + Math.random() * 58}%`;
  star.addEventListener('click', () => {
    score++; document.querySelector('#score').textContent = score;
    if (score === 5) { celebrate(); show('finale'); } else { spawnStar(); }
  });
  field.append(star);
}
function celebrate() {
  const box = document.querySelector('#confetti'); const colors = ['#f65d91','#fff2a8','#8679e8','#82d8c2','#fff'];
  for (let i = 0; i < 90; i++) { const bit = document.createElement('i'); bit.className = 'confetti'; bit.style.left = `${Math.random()*100}%`; bit.style.top = `${-15-Math.random()*30}%`; bit.style.background = colors[i % colors.length]; bit.style.setProperty('--drift', `${-140+Math.random()*280}px`); bit.style.animationDelay = `${Math.random()*.4}s`; box.append(bit); }
  setTimeout(() => box.replaceChildren(), 3600);
}
document.querySelector('#replay').addEventListener('click', () => { dodges = 0; hint.textContent = 'Choose very wisely…'; no.style.left = 'calc(50% - 25px)'; no.style.top = '31px'; no.style.transform = ''; show('welcome'); });
