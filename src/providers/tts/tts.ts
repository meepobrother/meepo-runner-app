import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { TextToSpeech, TTSOptions } from '@ionic-native/text-to-speech';
@Injectable()
export class TtsProvider {

  constructor(
    public http: HttpClient,
    private tts: TextToSpeech
  ) {
    console.log('Hello TtsProvider Provider');
  }


  speak(msg: string) {
    let opt: TTSOptions = {
      text: msg,
      locale: 'zh-CN'
    };
    this.tts.speak(opt)
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
}
