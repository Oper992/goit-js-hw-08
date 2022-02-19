const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var throttle = require('lodash.throttle');

const setValueCurrentTime = data => {
  try {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(data));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const getValueCurrentTime = () => {
  try {
    const { seconds } = JSON.parse(localStorage.getItem('videoplayer-current-time'));
    return seconds;
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

player.on('timeupdate', throttle(setValueCurrentTime, 1000));

player
  .setCurrentTime(getValueCurrentTime())
  .then(function (seconds) {
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;
      default:
        break;
    }
  });

console.log(getValueCurrentTime());
