const AppRoute = {
  Initial: 'initial',
  Game: 'game',
  Results: 'results',
};

const GAME_TYPES = [
  {type: 'cats', icon: 'cats', label: 'Котики'},
  {type: 'flowers', icon: 'flowers', label: 'Цветочки'},
  {type: 'cars', icon: 'cars', label: 'Машины'},
];

const TIMEOUT = 900;
const RANDOMIZED = false;

export {AppRoute, GAME_TYPES, TIMEOUT, RANDOMIZED}
