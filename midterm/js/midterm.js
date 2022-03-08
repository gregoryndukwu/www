window.onload = function(){
  
    const formNewAccount = document.querySelector("#censusForm");
    formNewAccount.addEventListener("submit", 
        event => {
            event.preventDefault();
            const txtName = document.querySelector("#txtName");
            const txtCitizen = document.querySelector("#txtCitizen");
            const txtSocial = document.querySelector("#txtSocial");
            const txtState = document.querySelector("#txtState");
            const radioBtn = document.querySelector("#r1");
            
            
            alert(
                'Citizen ID :' + txtCitizen.value + '\n' +
                'SSN :' + txtSocial.value + '\n' +
                'FullName :' + txtName.value + '\n' +
                'State :' + txtState.value + '\n' +
                'Senior :' + radioBtn.value
                )
                
                       
    });



}