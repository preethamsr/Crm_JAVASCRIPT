function doctors_subgrid_filter(executionContext)
{
    var grid=document.getElementById("doctors_list");
    if(grid!=null)
    {
        var formContext=executionContext.getFormContext();
       var department=formContext.getAttribute("preetham_name").getValue()[0].id;
       var fetchxml="<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>"+
       "  <entity name='preetham_doctors'>"+
       "    <attribute name='preetham_doctorsid' />"+
       "    <attribute name='preetham_name' />"+
       "    <attribute name='preetham_university' />"+
       "    <attribute name='preetham_phonenumber' />"+
       "    <attribute name='preetham_lastname' />"+
       "    <attribute name='preetham_gender' />"+
       "    <attribute name='preetham_emailaddress' />"+
       "    <attribute name='preetham_departmentsid' />"+
       "    <attribute name='preetham_city' />"+
       "    <order attribute='preetham_name' descending='false' />"+
       "    <filter type='and'>"+
       "      <condition attribute='preetham_departmentsid' operator='eq' uiname='Physicians' uitype='preetham_departments' value='"+department+"' />"+
       "    </filter>"+
       "  </entity>"+
       "</fetch>"
       grid.control.SetParameter("FetchXML", fetchxml);   
       grid.control.Refresh();
    }
    

}