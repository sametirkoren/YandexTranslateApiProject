
function Translate(word, language) {
    this.apikey = "trnsl.1.1.20181231T131650Z.4dd40ea9622e9f90.5a79c21874a1368788c1c858ec27eacae66db7e6";
    this.word = word;
    this.language = language;

    // XHR Object

    this.xhr = new XMLHttpRequest();
}

Translate.prototype.translateWord = function (callback) {
    // AJAX Işlemleri

    const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`

    this.xhr.open("GET",endpoint,true); 

    this.xhr.onload = () => {
        if(this.xhr.status === 200){
            const json = JSON.parse(this.xhr.responseText);
            const text = json.text[0];
            callback(null,text);
        }
        else{
            callback("Bir hata oluştu",null);
        }
    }

    this.xhr.send();
}

Translate.prototype.changeParameters = function(newWord , newLanguage){
    this.word = newWord;
    this.language = newLanguage;
}