import {birdsData} from '../app.js'

export function createGallery() {
  // all arrays
  birdsData.forEach(birds => {
    const birdsContainer = document.querySelector('.gallery-wrapper');
    // all array objects
    birds.forEach(bird => {

      const birdElement = document.createElement('div');
      birdElement.className = 'gallery-item'

      const birdElementWrapper = document.createElement('div');
      birdElementWrapper.className = 'gallery-item__wrapper'
      birdElement.appendChild(birdElementWrapper);

      // image
      const imageElement = document.createElement('img');
      imageElement.src = bird.image;
      imageElement.className = 'gallery-item__bird'
      birdElementWrapper.appendChild(imageElement);

      // name and species
      const birdElementInfo = document.createElement('div');
      birdElementInfo.className = 'gallery-item__info'
      birdElement.appendChild(birdElementInfo);

      const nameElement = document.createElement('h5');
      nameElement.className = 'bird-text details-line name-ru';
      nameElement.textContent = bird.name;
      birdElementInfo.appendChild(nameElement);

      const nameElementSpecies = document.createElement('h5');
      nameElementSpecies.className = 'bird-text__small details-line name-en';
      nameElementSpecies.textContent = bird.species;
      birdElementInfo.appendChild(nameElementSpecies);

      // audio
      const audioElement = document.createElement('audio');
      audioElement.className = 'audio audio-gallery';
      audioElement.controls = true;
      const sourceElement = document.createElement('source');
      sourceElement.src = bird.audio;
      audioElement.appendChild(sourceElement);
      birdElement.appendChild(audioElement);

      // Description
      const nameElementDescription = document.createElement('p');
      nameElementDescription.className = 'bird-description gallery-bird__description';
      nameElementDescription.textContent = bird.description;
      birdElement.appendChild(nameElementDescription);

      birdsContainer.appendChild(birdElement);
    })
  });
}