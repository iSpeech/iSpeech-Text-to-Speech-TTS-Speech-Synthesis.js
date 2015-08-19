
iSpeechTTS=function(audioPlayer,params){this.endpoint='https://api.ispeech.org/api/rest';this.optionalCommands=[];params=params||{};this.apiKey=params.apiKey||'developerdemokeydeveloperdemokey';this.voice=params.voice||null;this.onEnded=params.onEnded||null;this.ssmlMode=params.ssmlMode||false;this.audioPlayer=audioPlayer;this.audioPlayer.addEventListener('ended',this.onSegmentEnded.bind(this));this.urlList=[];this.urlIndex=0;}
iSpeechTTS.prototype.speak=function(text){this.urlList=[];this.urlIndex=0;if(!this.ssmlMode){this.urlList=text.replace(/([^A-Z][a-z]+\.) /g,"$1\n").split("\n");}else{this.urlList.push(text);}
for(var i=0;i<this.urlList.length;i++){this.urlList[i]=this.createUrl(this.urlList[i]);}
this.audioPlayer.src=this.urlList[this.urlIndex++];this.audioPlayer.play();}
iSpeechTTS.prototype.createUrl=function(text){var url=this.endpoint+'?apikey='+this.apiKey+'&action='+(this.ssmlMode?'ssml':'convert')+'&'+(this.ssmlMode?'ssml':'text')+'='+encodeURI(text);if(!!this.voice)
url+="&voice="+encodeURI(this.voice);for(var i=0;i<this.optionalCommands.length;i++){url+="&"+encodeURI(this.optionalCommands[i][0])+"="+encodeURI(this.optionalCommands[i][1]);}
return url;}
iSpeechTTS.prototype.resume=function(){this.audioPlayer.play();}
iSpeechTTS.prototype.pause=function(){this.audioPlayer.pause();}
iSpeechTTS.prototype.clearCommands=function(){this.optionalCommands=[];}
iSpeechTTS.prototype.clearAudio=function(){this.audioPlayer.pause();this.audioPlayer.src='';}
iSpeechTTS.prototype.addOptionalCommand=function(key,value){this.optionalCommands.push([key,value]);}
iSpeechTTS.prototype.onSegmentEnded=function(){if(this.urlIndex<this.urlList.length){this.audioPlayer.src=this.urlList[this.urlIndex++];this.audioPlayer.play();}else{if(!!this.onEnded)
this.onEnded(arguments[0]);}}
iSpeechTTS.prototype.setInputAsSSML=function(isSsml){this.ssmlMode=!!isSsml;}