function ValidateContactSelection()  
{  
    var checkboxes = document.getElementsByName("contacted_by");  
    var numberOfCheckedItems = 0;  
    for(var i = 0; i < checkboxes.length; i++)  
    {  
        if(checkboxes[i].checked)  
            numberOfCheckedItems++;  
    }  
    if(numberOfCheckedItems == 0)  
    {  
        alert("Välj minst ett alternativ!");  
        return false;  
    }  
}  