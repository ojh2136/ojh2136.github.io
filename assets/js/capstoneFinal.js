var decodeString = "____-------__//||\\!@#$$%#^&&*()_+";
class Decoder {
  constructor (el) {
    this.el = el;
    this.words = ["Juhyun Oh.","Front-End Developer.","Aspiring.","Interactive Media Design"];
    this.index = 0;
    this.startStr=this.words[this.index];
    this.encodedStr="";
    this.decodedStr="";
    this.done=true;
    this.letters=[];
    for (var i=0; i<this.startStr.length; i++) {
      this.letters.push(this.startStr.charAt(i));
    }
  }
  encode (start) {
    this.encodedStr = "";
    if (!start) {
      for (var i=0; i<this.startStr.length; i++) {
          var randPos=Math.floor(Math.random() * Math.floor(decodeString.length));
          this.encodedStr+=decodeString.charAt(randPos);
      }
    } else {
      for (var i=0; i<this.startStr.length; i++) {
        var randPos=Math.floor(Math.random() * Math.floor(decodeString.length));
        if (this.letters[i] != "") {
          this.encodedStr+=decodeString.charAt(randPos);
        } else {
          this.encodedStr+=this.startStr.charAt(i);
        }
      }
    }
    this.el.innerHTML=this.encodedStr;
  }
  nextIndex() {
    this.index ++;
    if (this.index == this.words.length) this.index=0;
    return this.index;
  }
  reset () {
    this.startStr=this.words[this.nextIndex()];
    this.encodedStr="";
    this.decodedStr="";
    this.done=true;
    this.letters=[];
    for (var i=0; i<this.startStr.length; i++) {
      this.letters.push(this.startStr.charAt(i));
    }
    this.encode(false);
    this.decode();
  }
  decode () {
    var decoder = this;
    var interval = setInterval(function () {
      var randPos=Math.floor(Math.random() * Math.floor(decoder.startStr.length));
      if (decoder.letters[randPos] != "")
        decoder.letters[randPos]=""
      else {
        for (var i=0;i<decoder.letters.length;i++) {
          if (decoder.letters[i] != "") {
            decoder.letters[i]=""
            break;
          }
        }
      }
      if (!decoder.done) {
        decoder.encode(true);
      }
      decoder.done=true;
      for (var i=0;i<decoder.letters.length;i++)
        if (decoder.letters[i] != "") decoder.done=false;

      if (decoder.done) {
        clearInterval(interval);
        setTimeout(function () {
          decoder.reset();
        },1500)

      }

    }, 70);

  }
}
var header = new Decoder(document.getElementById("header"));
header.encode(false);
header.decode();

focusMethod = function getFocus() {
  document.getElementById("group4").focus();
}
