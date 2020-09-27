function validateForm(formName){
   // let formElement = document.forms[formName]['firstname'].value;
   //  if(formElement == ''){
   //      alert('Name must be filled out.');
   //      return false;
   //  }

    let form = document.forms[formName];
    for(let formElement of form){
        if(formElement.tagName.toLowerCase() === 'input'){
            if(formElement.value === ''){
                alert(formElement.parentElement.innerText + ' musi zostać wypełnione.');
                return false;
            }
        }
    }
}