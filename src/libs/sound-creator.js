export default class SoundCreator{
    constructor(soundUrl) {
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
        this.source = this.audioContext.createBufferSource();
        this.source.connect(this.audioContext.destination);
        this.fetchAudio(soundUrl, this.initAudio.bind(this));
    }
    fetchAudio(src, callback) {
        let request;

        request = new XMLHttpRequest();
        request.open('GET', src, true);
        request.responseType = 'arraybuffer';

        request.onload = () => {
            callback(request.response);
        };

        request.send();
    }
    initAudio(audio) {
      this.audioContext.decodeAudioData(audio, (audio) => {
          this.source.buffer = audio;
      });
    }
    reInitAudio(isLoop) {
      let newSource;
      let oldSourceBuffer;

      oldSourceBuffer = this.source.buffer;
      newSource = this.audioContext.createBufferSource();
      newSource.connect(this.audioContext.destination);
      newSource.buffer = oldSourceBuffer;

      this.source = newSource;
    }
    play() {
      this.reInitAudio();
      this.source.start(0);
    }
    stop() {
      this.source.stop();
    }
}
