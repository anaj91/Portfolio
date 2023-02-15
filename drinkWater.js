const smallGlasses = document.querySelectorAll('.glass-small');
const percentage = document.querySelector('.percentage');
const remained = document.querySelector('.remained');
const liters = document.querySelector('.liters');

updateBigGlass()

smallGlasses.forEach((glass, idx) => {
  glass.addEventListener('click', () => highLightCups(idx))
});

function highLightCups(idx) {

  if (idx === 7 && smallGlasses[idx].classList.contains('full')) idx--;
  else if (smallGlasses[idx].classList.contains('full') && !smallGlasses[idx].nextElementSibling.classList.contains('full')) {
    idx--
  }

  smallGlasses.forEach((glass, idx2) => {
    if (idx2 <= idx) {
      glass.classList.add('full')
    } else {
      glass.classList.remove('full')
    }
  })

  updateBigGlass()

}


function updateBigGlass() {
  const fullGlasses = document.querySelectorAll('.glass-small.full').length
  const totalGlasses = smallGlasses.length

  if (fullGlasses === 0) {
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullGlasses / totalGlasses * 420}px`
    console.log(`${fullGlasses / totalGlasses * 420}px`)
    percentage.innerText = `${fullGlasses / totalGlasses * 100}%`
  }

  if (fullGlasses === totalGlasses) {
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (fullGlasses * 250 / 1000)}L`
  }
}
