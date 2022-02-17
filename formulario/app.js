const form=document.getElementById("myForm");
const errorMail=document.getElementById("errorMail");
const errorPass=document.getElementById("errorPass");
const success=document.getElementById("success");
const mail=document.getElementById("email");
const password=document.getElementById("password");


const myMailReg=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const myPassReg=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;//No permite caracter special
const myPassReg2=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/; //reuiere caracter special

  //Mostrar errores
const showError=(e)=>{
    e.forEach(item =>{
           item.campo.classList.remove('d-none');
           item.campo.textContent=item.error;
           success.classList.add("d-none");
        })
}

const showSuccessMessage=()=>{
    success.classList.remove("d-none");
    success.textContent="Datos inviados correctamente!!";
}

function validarForm(){
       const errores=[];
        if(!myMailReg.test(mail.value.trim())){
            mail.classList.add("is-invalid");

            errores.push({
                campo:errorMail,
                error: "Email no es valido"
            })
        
            
        }else{
            mail.classList.remove("is-invalid");
            mail.classList.add("is-valid");
            errorMail.classList.add("d-none");
        
            
        }
    
        if(!myPassReg2.test(password.value.trim())){
            password.classList.add("is-invalid");
            errores.push({
                campo:errorPass,
                error: "Contraseña no es valido"
            })
            
            
        }else{
            password.classList.remove("is-invalid")
            password.classList.add("is-valid");
            errorPass.classList.add("d-none");
        
        
        }

        if(errores.length !==0){
        showError(errores);
        return false;
        
        }
        
        showSuccessMessage();
        return true;
    
   
}