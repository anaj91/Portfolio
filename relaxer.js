const text = document.getElementById('text');
const container = document.querySelector('.container')

const totalTime = 10000;
const hold = totalTime / 5;
const breathe = hold * 2;

dynamicText();

function dynamicText() {
  text.innerText = 'Breathe In';
  container.className = 'container grow'

  setTimeout(() => {
    text.innerText = 'Hold';

    setTimeout(() => {
      text.innerText = 'Breathe Out';
      container.className = 'container shrink'
    }, hold);
  }, breathe);
}

setInterval(dynamicText, totalTime)

