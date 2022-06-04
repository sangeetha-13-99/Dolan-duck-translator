let textField=document.querySelector('#textarea-field');
let btnTranslate=document.querySelector('.btn-translate');
let outputField=document.querySelector('.output-field');
let showServerErrorMsg=document.querySelector('.server-error-msg');

let getUrl='https://api.funtranslations.com/translate/dolan.json'

function showServerError(error){
    console.log(error);
    showServerErrorMsg.innerHTML=`something went wrong with this server! try again after sometime`
}
function fetchUrl(text){
    console.log(getUrl +"?"+"text="+ text)
    return getUrl +"?"+"text="+ text;
}
// adding eventlistener to btn translator
btnTranslate.addEventListener('click',()=>{
    fetch(fetchUrl(textField.value)).then(response=>response.json()).then(json=>{
        outputField.innerHTML=json.contents.translated}).catch(showServerError)
});
