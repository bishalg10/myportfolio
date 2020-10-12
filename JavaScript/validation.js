function validateForm123()
{
if (document.suggest_us.fname.value=="")
{
alert("First name must be filled out");
return false;
}
     x = document.suggest_us.lastname.value.length;

if (x<1)
{
alert("Last name must be filled out");
return false;
}

var x;
x = document.suggest_us.email.value.length;

if (x<1)
{
alert("E-mail must be filled out");
return false;
}
x = document.suggest_us.phone.value.length;

if (x<1)
{
alert("Phone must be filled out");
return false;
}



else{
return alert("Thank you !! Your message has been submitted to the admin");
}

}
