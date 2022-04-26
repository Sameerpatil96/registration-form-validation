function clearErrors(){
  const errors = document.getElementsByClassName('formerror');
  for(let item of errors){
      item.innerHTML="";
  }
}


function seterror(id, error) {
  const element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm() {
  var returnval = true;
  clearErrors();
  //perform validation and if validation fails, set the value of returnval to false
  var name = document.forms["myForm"]["fname"].value;

  if (name.length < 5) {
    seterror("name", "Length of name is too short");
    returnval = false;
  }

  if (name.length === 0) {
    seterror("name", "Length of name cannot be zero");
    returnval = false;
  }
 
  var last =document.forms["myForm"]["flast"].value;
  if(last.length>15){
    seterror("last", "Email length is too long");
    returnval = false;
  }
  if(last.length>15){
    seterror("last", "Email length is too long");
    returnval = false;
  }
  
  var phone = document.forms['myform']["fphone"].value;
  if(phone.length !== 10){
    seterror("phone", "*Phone number should be of 10 degits");
    returnval =false;
  }
  var address = document.forms['myform']["faddress"].value;
  if(address.length <250){
    seterror("address", "*address should be  less than 250");
    returnval =false;
  }

  return returnval;
  
}


