function validate(){
    var email=document.getElementById("email").value;
    var reg= /^[^ @]*@[^ @]*?$/;
    var result= reg.test(email);

    if(result==false){
      alert("invalid Email id");
      return false;
    }
    else
    return true;
    
  }
  function validate(){
    var email=document.getElementById("mobile").value;
    var reg=/^[1-9]{1}[0-9]{9}?$/;
    var result= reg.test(email)

    if(result==false){
      alert("invalid phone number");
      return false;
    }
    return true;
    
  }


  <script src="https://web3forms.com/client/script.js" async defer></script>