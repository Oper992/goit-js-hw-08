const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
var throttle = require('lodash.throttle');

const setValueCurrentTime = ({ seconds }) => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(seconds));
};

const getValueCurrentTime = () => {
  if (localStorage.getItem('videoplayer-current-time')) {
    return JSON.parse(localStorage.getItem('videoplayer-current-time'));
  }
};

player.on('timeupdate', throttle(setValueCurrentTime, 1000));

player.setCurrentTime(getValueCurrentTime());
