
document.addEventListener('keydown',function(e){
    console.log(e.which);
    const audio=document.querySelector(`audio[data-key="${e.which}"]`);
    const key=document.querySelector(`.key[data-key="${e.which}"]`);
    console.log(audio);

    if(!audio){
      return;
    }
    audio.currentTime=0;
    audio.play();
      console.log(key);
    key.classList.add('playing');
    key.addEventListener('transitionend',function(e){
      key.classList.remove('playing');
    })
  })
