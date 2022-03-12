$(document).ready(function () {

    $('#btnRegisterPatient').on("click", function (e) {

        e.preventDefault();

        const patientID = $('#patientIdNumber').val();
        const firtName = $('#firstName').val();
        const middle = $('#middleInitials').val();
        const lastName = $('#lastName').val();
        const dateBirth = $('#dateOfBirth').val();
        const department = $('#ddlDepartment').val();
        const outPatientY = $('input:radio:checked').val();

        const result = `<tr><td>${patientID}</td>
                <td>${firtName}</td>
                <td>${middle}</td>
                <td>${lastName}</td>
                <td>${dateBirth}</td>
                <td>${department}</td>
                <td>${outPatientY}</td></tr>`;

        const final = $('#tbodyPatientsList').append(result);

        var rowCount = $('table >tbody >tr').length;

        console.log(rowCount);

    })

    $('#chkElderlyPatients').change(function () {
        const checkedAge = $('#chkElderlyPatients').is(":checked");
      
        $('table >tbody >tr').each(function (value, index) {
            var showAge = 0;

            $(this).find('td').each(function (i) {
                var textValue = $(this).text();
                if (i == 4) {
                    
                    const dataAtual = new Date();
                    const anoAtual = dataAtual.getFullYear();
                    const yearBirth = textValue.split("-")
                    var idade = parseInt(anoAtual) - parseInt(yearBirth[0]);

                    if(idade >= 65){
                        showAge = 1;     
                      }else {
                        showAge = 0; 
                      }     
                }


            })

            if (showAge == 1 && (checkedAge)){
                $(this).show();
            } 
            if (showAge == 0 &&  (checkedAge)){
                $(this).hide();
            }
            if(showAge == 0 &&  (!checkedAge)){
                $(this).show();
            }
            
            

        })

    });

    $('#chkShowOutPatients').change(function () {
        const checkedValue = $('#chkShowOutPatients').is(":checked");

         $('table >tbody >tr').each(function (value, index) {
            var show = 0;

            $(this).find('td').each(function (i) {
                var textValue2 = $(this).text();
                if (i == 6) {

                    if (textValue2 == 'No') {
                        show = 1;
                    }

                }

            })

            if (show == 1 && (checkedValue)) {
                $(this).hide();
            } else {
                $(this).show();
            }

        })

    });



})

