
import throttle from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', throttle(onPlay, 1000));

const KEY = "videoplayer-current-time";

function onPlay({seconds}) {

localStorage.setItem(KEY, seconds);

};
const time = localStorage.getItem(KEY);
console.log(time);

if(time !== null){
 player.setCurrentTime(time);
}