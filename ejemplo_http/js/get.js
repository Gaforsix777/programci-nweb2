const API_URL = 'https://localhost:3000/posts'

const getDatas = async () => {
    fetch(API_URL)
    .then(response => {
        if (!response.ok){
            throw new Error(`error en la peticion get el esta es  ${response.status}`);
        
            }
            return response.json()
        })
        .then(data => showResults(data))
        .catch(error => showResult(error,MessageChannel,true));

    }
