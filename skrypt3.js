function validateForm(formName){
   // let formElement = document.forms[formName]['firstname'].value;
   //  if(formElement == ''){
   //      alert('Name must be filled out.');
   //      return false;
   //  }

    let isValid = true;
    let form = document.forms[formName];
    for(let formElement of form){
        if(formElement.tagName.toLowerCase() === 'input'){
            if(formElement.value === ''){
                changeStyleToWarning(formElement);
                isValid = false;
            } else {
                formElement.style = "";
            }
        }
    }
    if(!isValid){
        showWarning();
    } else {
        hideWarning();
    }
    return isValid;
}

function changeStyleToWarning(formElement){
    formElement.style = 'background-color: #ffe3f3; border-color: red';
    //alert(formElement.parentElement.innerText + ' musi zostać wypełnione.');
}

function showWarning(){
    document.getElementById('warning').removeAttribute('hidden');
}

function hideWarning() {
    document.getElementById('warning').setAttribute('hidden','')
}