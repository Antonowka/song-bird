import {levelsData} from '../app.js'

export function createLevels() {

  const pagination = document.querySelector('.pagination')
  
  levelsData.forEach(item => {
    // level 1
    const level1Wrapper = document.createElement('li');
    level1Wrapper.className = 'page-item'
    level1Wrapper.value = 0;
    pagination.appendChild(level1Wrapper);

    const level1Item = document.createElement('div');
    level1Item.className = 'page-link'
    level1Item.textContent = item.level1
    level1Wrapper.appendChild(level1Item);
    // level 2
    const level2Wrapper = document.createElement('li');
    level2Wrapper.className = 'page-item'
    level2Wrapper.value = 1;
    pagination.appendChild(level2Wrapper);

    const level2Item = document.createElement('div');
    level2Item.className = 'page-link'
    level2Item.textContent = item.level2
    level2Wrapper.appendChild(level2Item);
    // level 3
    const level3Wrapper = document.createElement('li');
    level3Wrapper.className = 'page-item'
    level3Wrapper.value = 2;
    pagination.appendChild(level3Wrapper);

    const level3Item = document.createElement('div');
    level3Item.className = 'page-link'
    level3Item.textContent = item.level3
    level3Wrapper.appendChild(level3Item);
    // level 4
    const level4Wrapper = document.createElement('li');
    level4Wrapper.className = 'page-item'
    level4Wrapper.value = 3;
    pagination.appendChild(level4Wrapper);

    const level4Item = document.createElement('div');
    level4Item.className = 'page-link'
    level4Item.textContent = item.level4
    level4Wrapper.appendChild(level4Item);
    // level 5
    const level5Wrapper = document.createElement('li');
    level5Wrapper.className = 'page-item'
    level5Wrapper.value = 4;
    pagination.appendChild(level5Wrapper);

    const level5Item = document.createElement('div');
    level5Item.className = 'page-link'
    level5Item.textContent = item.level5
    level5Wrapper.appendChild(level5Item);
    // level 6
    const level6Wrapper = document.createElement('li');
    level6Wrapper.className = 'page-item'
    level6Wrapper.value = 5;
    pagination.appendChild(level6Wrapper);

    const level6Item = document.createElement('div');
    level6Item.className = 'page-link'
    level6Item.textContent = item.level6
    level6Wrapper.appendChild(level6Item);
  })
}
