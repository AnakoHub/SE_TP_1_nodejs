
const https = require('https')
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
var srchField = '*,*';

class StringIdGenerator {
  constructor(chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') {
    this._chars = chars;
    this._nextId = [0];
  }

  next() {
    const r = [];
    for (const char of this._nextId) {
      r.unshift(this._chars[char]);
    }
    this._increment();
    return r.join('');
  }

  _increment() {
    for (let i = 0; i < this._nextId.length; i++) {
      const val = ++this._nextId[i];
      if (val >= this._chars.length) {
        this._nextId[i] = 0;
      } else {
        return;
      }
    }
    this._nextId.push(0);
  }

  *[Symbol.iterator]() {
    while (true) {
      yield this.next();
    }
  }
}

const usrName = new StringIdGenerator();
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

data.append('search', '*,*');
var config = {
  method: 'post',
  url: 'https://www.traincours.fr:5000',
  httpsAgent: httpsAgent,
  headers: { 
    'Authorization': 'Basic dXNlci1jb25uZWN0OnRoMXNpc3RoM3Bhc3N3b3Jk', 
    ...data.getHeaders()
  },
  data : data
};

//Find a key word in the page
function findKey(response){
  return response.data.includes('Malcolm')
}

//
function findUser(){
  while(!findKey(response)){

  }
}

function findPswd(){

}

axios(config)

.then(function (response) {
  // if (findKey(response)){
  //   console.log("Reussi!")
  // }
  for (let i=0; i<53; i++){
    console.log(usrName.next());
  }
})

.catch(function (error) {
  console.log("stop erreur");
});
