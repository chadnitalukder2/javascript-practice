console.clear();
//calling api from javascript | XMLHttpRequest----------------------------------------
//event - onloade(), onerror,
//property - response, responseText, responseType, responesURL, statuseText
//function - open(), send(), setRequestHeader()

const makeRequest = ( method, url,data) =>{
    const xhr = new XMLHTTpRequest();
    xhr.open( method, url);
    xhr.onload = () => {
      let data = xhr.response;
      console.log(JSON.parse(data));
    };
    xhr.onerror = () => {
      console.log("error is here");
    };
  
    xhr.send();
  };
const getData = () => {
    makeRequest("GET", "https://jsonplaceholder.typicode.com/posts");
}
const sendData = () => {
    makeRequest("POST", "https://jsonplaceholder.typicode.com/posts",{
        title: 'foo',
        body: 'bar',
        userId: 1,
    });
}

sendDta();