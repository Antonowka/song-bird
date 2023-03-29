import birdsDataRu from './js/birds-ru.js';
import birdsDataEn from './js/birds-en.js';
import {createGallery} from './js/create-gallery.js';
import { createLevels } from './js/levels.js';
import levelTranslateEn from './js/level-translate-en.js';
import levelTranslateRu from './js/level-translate-ru.js';


// lang switcher and localStore saves
export let language = 'en';
export let birdsData;
export let levelsData;

const languageHeaderText = document.querySelector('.language')
const preloadText = document.querySelector('.preload__text')
const preloadButton = document.querySelector('.preload__button')
const galleryButton = document.querySelector('.gallery-button')
const galleryButtonBack = document.querySelector('.button-gallery')
const gameScore = document.querySelector('.score')
const startGameText = document.querySelector('.listen-player')
const buttonNextLvl = document.querySelector('.button-next')
const resultPageGreeting = document.querySelector('.result-page__title')
const resultPageScore = document.querySelector('.result-page__score')
const resultPageButton = document.querySelector('.restart-game')

if(localStorage.getItem('language') === null){
  localStorage.setItem('language', language);
}

language = localStorage.getItem('language');

function setBirdsData() {
  if (language === 'ru') {
    birdsData = birdsDataRu;
    levelsData = levelTranslateRu
    preloadText.innerText = 'Вы готовы?'
    preloadButton.innerText = 'Начать викторину!'
    languageHeaderText.innerText = 'Язык:'
    galleryButton.innerText = 'Венутся к игре'
    galleryButtonBack.innerText = 'Галерея'
    gameScore.innerText = 'Результат:'
    buttonNextLvl.innerText = 'Слудующий уровень'
    startGameText.innerText = 'Послушайте плеер и выберите птицу из списка'
    resultPageGreeting.innerText = 'Поздравляем!'
    resultPageScore.innerText = 'Ваш результат:'
    resultPageButton.innerText = 'Сыграть еще'
  } else {
    birdsData = birdsDataEn;
    levelsData = levelTranslateEn
    preloadText.innerText = 'Are you ready?'
    preloadButton.innerText = 'Go Quiz!'
    languageHeaderText.innerText = 'Language:'
    galleryButton.innerText = 'Back to quiz'
    galleryButtonBack.innerText = 'Gallery'
    gameScore.innerText = 'Score:'
    buttonNextLvl.innerText = 'Next level'
    startGameText.innerText = 'Listen to the player and Select a bird from the list'
    resultPageGreeting.innerText = 'Congratulation!'
    resultPageScore.innerText = 'You score:'
    resultPageButton.innerText = 'Play Again'
  }
}

setBirdsData();

const languageButton = document.getElementById('language-button');

if (localStorage.language === undefined) {
  languageButton.innerHTML = 'en'
} else if (languageButton.classList.value === language) {
  languageButton.innerHTML = `${language}`
} else if (languageButton.classList.value !== language) {
  languageButton.innerHTML = `${language}`
}

languageButton.addEventListener('click', () => {
  if (languageButton.classList.value === language) {
    languageButton.classList.remove('en');
    languageButton.classList.add('ru');
    language = 'ru';
    setBirdsData();
    window.location.reload()
  } else if (languageButton.classList.value !== language) {
    languageButton.classList.add('en');
    languageButton.classList.remove('ru');
    language = 'en';
    setBirdsData();
    window.location.reload()
    
  }

  localStorage.setItem('language', language);
});

createGallery()
createLevels()

// PRELOAD
const mainPage = document.querySelector('.container')
const header = document.querySelector('.container-header')
const headerPrev = document.querySelector('.header')
const preloadPage = document.querySelector('.preload')
const startButton = document.querySelector('.preload__button')
const footer = document.querySelector('.footer')
// GALLRY <-> MAIN
const galleryPage = document.querySelector('.container-galery')
const mainButton = document.querySelector('.main-button')

// PRELOAD BUTTON -> START QUIZ
startButton.addEventListener('click', () => {
  mainPage.classList.add('active')
  footer.classList.add('active')
  header.classList.add('active')
  headerPrev.classList.add('active')
  preloadPage.classList.remove('active')
})

// GALLRY <-> MAIN switcher

mainButton.addEventListener('click', () => {
  mainPage.classList.remove('active')
  galleryPage.classList.add('active')
  header.classList.remove('active')
})
galleryButton.addEventListener('click', () => {
  mainPage.classList.add('active')
  galleryPage.classList.remove('active')
  header.classList.add('active')
})

// QUIZ

const randomAudio = document.querySelector('.audio-random')
const descriptionAudio = document.querySelector('.audio-description');
const birdName = document.querySelector('.bird-name');
const randomBirdImage = document.querySelector('.random-bird__image')
const birdNameRu = document.querySelector('.bird-name__ru');
const birdNameEng = document.querySelector('.bird-name__en');
const birdSelected = document.querySelector('.selected-bird');
const descriptionBird = document.querySelector('.bird-description__main');
const instruction = document.querySelector('.instruction')
const detailsBirds = document.querySelector('.wrapper-details')
const birdSelectedList = document.querySelectorAll('.bird-list__item')
const htmlString = `<span class="bird-list__dot"></span>`
const audioError = new Audio("https://www.fesliyanstudios.com/play-mp3/7031");
const audioWon = new Audio("https://www.fesliyanstudios.com/play-mp3/7011");

// QUIZ, WON, DESCRIPTION(right birds block(birds-info))

const randomBirdSection = document.querySelector('.random-bird__wrapper')
const resultPage = document.querySelector('.result-page')
const birdChoice = document.querySelector('.bird-wrapper')

let totalScore = [];



const createList = (level) => {
  const warm = birdsData[level]

  let score = document.querySelector('.score-count')
  let scoreResult = document.querySelector('.score-count__result')
  let pageStage = document.querySelectorAll('.page-item')

  pageStage.forEach((lvl) => {
    if (level === lvl.value) {
      lvl.classList.add('active')
    } else {
      lvl.classList.remove('active')
    }
  })

  if (level === 6) {
    randomBirdSection.classList.add('hide')
    resultPage.classList.remove('hide')
    birdChoice.classList.add('hide')
    header.classList.remove('active')
  }


  let countScore = 5;

  birdSelectedList.forEach((node, index) => {
    document.getElementById("button-next").disabled = true;
    node.innerHTML = htmlString + warm[index].name
    node.addEventListener('click', () => {
      const dot = node.querySelector('.bird-list__dot');
      instruction.classList.remove('active')
      detailsBirds.classList.add('active')
      birdSelected.src = warm[index].image
      descriptionAudio.src = warm[index].audio;
      birdNameRu.innerHTML = warm[index].name;
      birdNameEng.innerHTML = warm[index].species;
      descriptionBird.innerHTML = warm[index].description;

      if (randomAudio.src === descriptionAudio.src) {
        randomBirdImage.src = warm[index].image;
        birdName.innerHTML = warm[index].name;
        buttonNextLvl.classList.add('active')

        totalScore.push(countScore)
        score.innerHTML = countScore;
        scoreResult.innerHTML = totalScore.reduce((acc, num) => acc + num, 0);

        dot.classList.add('won');
        document.getElementById("button-next").disabled = false;
        audioWon.play();
      } else {
        if (dot.classList != 'won') {
          audioError.play();
          dot.classList.add('error');
          countScore -= 1;
        } else {
          audioError.pause();
          dot.classList.add('nic');
        }
      }
    })
  })
}

// NEXT LVL

let gameLvl = 0;

function levelNext() {
  gameLvl += 1
  createList(gameLvl)
}
createList(gameLvl)
buttonNextLvl.addEventListener('click', levelNext)

// RANDOM LEVEL AUDIO

function nextRandomAudio() {
  const warm = birdsData[gameLvl]
  let random = warm[audioRandomaizer(0, warm.length - 1)];

  function audioRandomaizer(min, max) {
    let shuffle = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(shuffle);
  }
  randomAudio.src = random.audio;
}
nextRandomAudio()

// CLICK NEXT-BUTTON -> RESET BIRDS-INFO and RANDOM name/image

buttonNextLvl.addEventListener('click', () => {
  detailsBirds.classList.remove('active')
  buttonNextLvl.classList.remove('active')
  randomBirdImage.src = "./assets/random-bird.jpg";
  birdName.innerHTML = "*******";
  nextRandomAudio()
})

const restartGame = document.querySelector('.restart-game')

restartGame.addEventListener('click', () => {
  window.location.reload()
})