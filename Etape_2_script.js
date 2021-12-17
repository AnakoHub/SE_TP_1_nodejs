
const https = require('https')
var axios = require('axios');
var FormData = require('form-data');
var data = new FormData();
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

//const axiosInst = axios.created((httpsAgent))

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log("stop erreur");
});
