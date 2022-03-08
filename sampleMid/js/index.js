window.onload = function(){
  
    const formNewAccount = document.querySelector("#patientForm");
    formNewAccount.addEventListener("submit", 
        event => {
            event.preventDefault();
            const txtPatientId = document.querySelector("#txtPatientId");
            const txtName = document.querySelector("#txtName");
            const txtMiddle = document.querySelector("#txtMiddle");

            console.log(txtPatientId.value);
            console.log(txtName);
            console.log(txtMiddle);
            /*
            const strStudentId = txtStudentId.value;
            const strFullName = txtFullName.value;
            const strCourse = txtCourse.value;

            addNewRegistrationDataRow(strStudentId, strFullName,strCourse);
            txtStudentId.value = "";
            txtFullName.value = "";
            txtCourse.value = "";

            txtStudentId.focus(); */
    });



}