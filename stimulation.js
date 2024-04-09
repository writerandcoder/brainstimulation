const player = document.getElementById("player");
let selectedTracker = localStorage.getItem('selectedTrack');
let selectedTrackerX = "https://rickybrowne.com/brainwaves/pure-brainwave-stimulation/10Hz-Alpha--.mp3";
let on = 0;
  if (selectedTracker == "" || selectedTracker == null) {
    document.getElementById('playlist').value = selectedTrackerX;
    selectedTracker = selectedTrackerX;
  } else {
   
    document.getElementById('playlist').value = selectedTracker;

  }
function stimulation() {
    if (on == 0){
        on = 1;

        document.getElementById("playb").classList.add("hidden");
        document.getElementById("stopb").classList.remove("hidden");
        document.getElementById("beat").classList.add("beat");
        player.loop = true;
        player.src = selectedTracker;
        player.play();
    } else {
        on = 0;
        document.getElementById('playb').classList.remove('hidden');
        document.getElementById('stopb').classList.add('hidden');
        document.getElementById("beat").classList.remove("beat");
        player.src = selectedTracker;
        player.pause();
    }
}






  document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('playlist').addEventListener('change', function () {
      on = 0;
      const selectedOption = this.value;
      selectedTracker = selectedOption;
      localStorage.setItem('selectedTrack', selectedOption);
on = 0;
stimulation();


    });

  });


  
