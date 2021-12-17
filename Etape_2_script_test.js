
const https = require('https')
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
var usrName = '*,*';
const httpsAgent = new https.Agent({
  rejectUnauthorized: false
})

if (true){
  
}
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

function findUser(){

}

function findPswd(){

}

axios(config)

.then(function (response) {
  if (findKey(response)){
    console.log("Reussi!")
  }

 // console.log(findkey(JSON.stringify(response.data)))
  
 
})
.catch(function (error) {
  console.log("stop erreur");
});
