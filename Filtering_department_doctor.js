function Alertmethod(executionContext)
{
  
    var formContext = executionContext.getFormContext(); // get formContext
       debugger;
       var department_id=formContext.getAttribute("preetham_departmentid").getValue()[0].id
       var fetchxml="<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>"+
       "  <entity name='preetham_doctors'>"+
       "    <attribute name='preetham_doctorsid' />"+
       "    <attribute name='preetham_name' />"+
       "    <attribute name='createdon' />"+
       "    <order attribute='preetham_name' descending='false' />"+
       "    <filter type='and'>"+
       "      <condition attribute='preetham_departmentsid' operator='eq' value='"+department_id+"' />"+
       "    </filter>"+
       "  </entity>"+
       "</fetch>"
  
       fetchxml="?fetchXml="+encodeURIComponent(fetchxml);
       Xrm.WebApi. retrieveMultipleRecords("preetham_doctors",fetchxml).then(
           function success(response)
           {
               for(var i=0; i<=response.entities.length; i++)
               {
                   var responseobj=response.entities[i];
                   formcontext.getAttribute("preetham_refferedid").setValue([{id:responseobj.preetham_doctorsid,name:responseobj.preetham_name,entityName:"preetham_doctors"}])
                   
               }
           }),
           function(error)
           {
              Xrm.Utility.alertDialog("failed");
           }
    
      
        }




       

    