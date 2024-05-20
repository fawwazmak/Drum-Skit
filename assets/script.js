const keys = document.getElementsByClassName('key');

window.addEventListener('keydown', function (e){
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(sound) {
        const element = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        element.classList.add('playing');
        
        // console.log(sound)
        sound.currentTime = 0;
        sound.play();

        function removeTransition() {
            this.classList.remove('playing');
        }

        let i = 0;

        for(i; i<keys.length; i++) {
            keys[i].addEventListener('transitionend', removeTransition)
        }
    }
    return;
});


let i = 0;
for (i; i <keys.length; i++) {
    keys[i].addEventListener('click', function(){
        // console.log(keys[i]);
        this.classList.add('playing');
        // this.classList.remove('playing');
    })
}