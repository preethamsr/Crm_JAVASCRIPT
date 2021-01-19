function buttonaction(primaryControl)
{
var formContext = primaryControl; // get formContext
var department_id=formContext.getAttribute("preetham_departmentid").getValue()[0].id;
var Name=formContext.getAttribute("preetham_name").getValue();
var symtoms=formContext.getAttribute("preetham_symtoms").getValue();
var currently_taking_any_medication=formContext.getAttribute("preetham_currentmedication").getValue();
var current_medication=formContext.getAttribute("preetham_medicationdetails").getValue();
var age=formContext.getAttribute("preetham_age").getValue();
var patient_id=formContext.getAttribute("preetham_patientnameid").getValue()[0].id;
var date_of_birth=formContext.getAttribute("preetham_dateofbirth").getValue();
var gender=formContext.getAttribute("preetham_gender").getValue();
var parameters = {};
var department = {};
department.preetham_departmentsid = department_id; //Delete if creating new record 
department["@odata.type"] = "Microsoft.Dynamics.CRM.preetham_departments";
parameters.Department = department;
parameters.Reason_for_registration = Name;
parameters.Notes_for_admission = symtoms;
parameters.current_taking_any_medication = currently_taking_any_medication;
parameters.current_medication = current_medication;
parameters.age = age;
parameters.Name = Name;
var patientname = {};
patientname.accountid = patient_id; //Delete if creating new record 
patientname["@odata.type"] = "Microsoft.Dynamics.CRM.account";
parameters.patientname = patientname;
parameters.Dateofbirth = new Date(date_of_birth).toISOString();
parameters.gender = gender;

var req = new XMLHttpRequest();
req.open("POST", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/preetham_Buttonactionforinpatients", true);
req.setRequestHeader("OData-MaxVersion", "4.0");
req.setRequestHeader("OData-Version", "4.0");
req.setRequestHeader("Accept", "application/json");
req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
req.onreadystatechange = function() {
    if (this.readyState === 4) {
        req.onreadystatechange = null;
        if (this.status === 204) {
            Xrm.Utility.alertDialog("Patient Admited");
        } else {
            Xrm.Utility.alertDialog("Not Admited");
        }
    }
};
req.send(JSON.stringify(parameters));


}

