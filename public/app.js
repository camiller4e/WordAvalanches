const makeRequest = function(url, callback){
  const request = new XMLHttpRequest();
  request.open("GET", url)
  request.addEventListener('load', callback);
  request.send();
}

const requestComplete = function(){
  const jsonString = this.responseText;
  const avalanches = JSON.parse(jsonString);

  // console.log(avalanches.data.children[3]);
  displaySetup(avalanches);
  displayPayoff(avalanches);
}

const displaySetup = function(avalanches){
  const setup = document.getElementById('ava-setup');
  let shuffledAvas = _.shuffle(avalanches.data.children);
  const pTag = document.createElement('p');

  pTag.innerText = shuffledAvas[1].data.title;
  console.log(shuffledAvas[1]);
  setup.appendChild(pTag);
}

const shuffle = function(avalanches){
  let shuffledAvas = _.shuffle(avalanches.data.children);
  console.log(shuffledAvas[1]);
}

const displayPayoff = function(avalanches){
  const payoff = document.getElementById('ava-payoff');
  // _.shuffle(avalanches);
  const pTag = document.createElement('p');

  pTag.innerText = avalanches.data.children[1].data.selftext;
  payoff.appendChild(pTag);
}

const app = function(){

  const url = 'https://www.reddit.com/r/WordAvalanches.json'

  makeRequest(url, requestComplete);

}

window.addEventListener('load', app);
