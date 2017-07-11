window.addEventListener('DOMContentLoaded', () => {
  // variables for body and soundboard
  const board = document.querySelector('section');

  // array of sounds
  const sounds = ['work_it', 'make_it', 'do_it', 'makes_us', 'harder', 'better', 'faster', 'stronger', 'more_than', 'hour', 'our', 'never', 'ever',  'after', 'work_is', 'over'];

  const titles = ['Work It', 'Make It', 'Do It', 'Makes Us', 'Harder', 'Better', 'Faster', 'Stronger', 'More Than', 'Hour', 'Our', 'Never', 'Ever', 'After', 'Work Is', 'Over'];

  // make 16 buttons and put them in the board
  for (let i = 0; i < 16; i++) {
    const buttons = document.createElement('div');
    buttons.classList.add('button');
    buttons.innerHTML = titles[i];
    buttons.id = i;
    if (i >= 0 && i <= 3) {
      buttons.classList.add('row1');
    } else if (i >= 3 && i <= 7) {
      buttons.classList.add('row2');
    } else if (i >= 8 && i <=11) {
      buttons.classList.add('row3');
    } else if (i >= 12) {
      buttons.classList.add('row4');
    }
    board.appendChild(buttons);
    const clips = document.createElement('audio');
    clips.id = sounds[i];
    clips.src = 'sounds/' + sounds[i] + '.wav';
    buttons.appendChild(clips);
  }

  // add a click event listener to each button
  const button = board.getElementsByTagName('div');
  const audio = document.getElementsByTagName('audio');

  for (let i=0; i<16; i++) {
    button[i].addEventListener('mousedown', () => {
      // audio.src = 'sounds/' + sounds[i] + '.wav';
      audio.src = 'sounds/' + audio[i].id + '.wav';
      audio[i].play();
      console.log(sounds[i]);
    });
  }

// 120 beats/minute
// 120 beat/60sec
// 2 beats/sec

});
