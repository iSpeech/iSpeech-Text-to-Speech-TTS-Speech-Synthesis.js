# Text to Speech

iSpeech's javascript text-to-speech apis.

This class enables web based text to speech using iSpeech's servers. To initialize iSpeechTTS use the code below:

```
audioPlayer = document.getElementById('audioPlayer');
tts = new iSpeechTTS(audioPlayer, {
	apiKey: 'developerdemokeydeveloperdemokey',
	voice: 'ukenglishfemale',
	onEnded: function() {
		console.log("TTS playback ended");
	}
});
```
where audioPlayer is an `<audio>` tag. To start speaking just call
`tts.speak('text to speech is awesome!');`
to pause and resume audio use
```
tts.pause();
tts.resume();
```
For more information refer to the documentation in [doc/](doc/).

To request a valid apiKey contact [sales@ispeech.org](sales@ispeech.org)
