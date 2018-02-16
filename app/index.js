window.ValidarCampos =   ValidarCampos = () => {
    //Obtener los inputs que se validaran
    let elementos = document.querySelector(".container").querySelectorAll("input");
    let email, password, cpassword, messageError, checked = false;       
  
    for (let elemento of elementos) {
        if(elemento.value.length <= 0)
        {
          alert("Campo " + elemento.id + " requerido");
          return false;
        }
        email = elemento.id.includes("email") ? elemento.value : email;
        password = elemento.id.includes("password")  ? elemento.value : password;
        cpassword = elemento.id.includes("cpassword")  ? elemento.value : cpassword;
        checked = elemento.checked ? true : checked;
      } 
    if(!checked) {
      alert("Aceptar terminos  requerido");
      return false;
    }
   
    if (password != cpassword) {
      alert("Password no coinciden");
      return (false);
    }
   
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) {
        alert("Bienvenido!!!!")
        return true;
      }
    else{
     alert("Email invalido")
     return (false)
    }
  }