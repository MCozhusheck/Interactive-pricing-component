let yearlyDiscount = false;
const prices = {
  "10K": 8,
  "50K": 12,
  "100K": 16,
  "500K": 24,
  "1M": 32,
}

function calculatePrice(value){
  const viewers = document.getElementsByClassName("card__views")[0];
  views = Object.keys(prices)[value];
  viewers.innerHTML = `${views} PAGEVIEWS`

  const price = document.getElementsByClassName("card__price")[0];
  let pricing = prices[Object.keys(prices)[value]];
  if (yearlyDiscount) {
    pricing = pricing * 0.75
  }
  price.innerHTML = `$${pricing}.00`

  const slider = document.getElementsByClassName("card__slider")[0];
  var value = (slider.value-slider.min)/(slider.max-slider.min)*100
  slider.style.background = 'linear-gradient(to right, hsl(174, 86%, 45%) 0%, hsl(174, 86%, 45%) ' + value + '%, hsl(224, 65%, 95%) ' + value + '%, hsl(224, 65%, 95%) 100%)'
}

function toggleSwitch(value) {
  yearlyDiscount = document.getElementsByClassName("toggle_input")[0].checked;
  const price = document.getElementsByClassName("card__slider")[0];
  price.onchange();
}