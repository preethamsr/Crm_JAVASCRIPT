var hospital=hospital || {}
hospital.casefilter=function(executionContext)
{
   
    grid=document.getElementById("case_list_on_patient");
    if(grid!=null)
    {
        var formContext = executionContext.getFormContext(); // get formContext
        var accountid=formContext.getAttribute("name").getValue()[0].id;
        var fetchxml="<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>"+
        "  <entity name='preetham_case'>"+
        "    <attribute name='preetham_caseid' />"+
        "    <attribute name='preetham_name' />"+
        "    <attribute name='createdon' />"+
        "    <attribute name='preetham_departmentid' />"+
        "    <attribute name='preetham_current_maedication' />"+
        "    <attribute name='preetham_bloodgroup' />"+
        "    <order attribute='preetham_name' descending='false' />"+
        "    <filter type='and'>"+
        "      <condition attribute='preetham_patientnameid' operator='eq' uiname='Catherin' uitype='account' value='"+accountid+"' />"+
        "    </filter>"+
        "  </entity>"+
        "</fetch>"
        grid.control.SetParameter("FetchXML", fetchxml);
        grid.control.Refresh();
    }
}