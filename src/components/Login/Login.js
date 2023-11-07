import React, { useRef, useState } from 'react'

const Login = () => {
    const userRef = useRef(null);
    const [user , setUser ] = useState ("");

    const userChangeHandler = (event) =>{
      setUser(event.target.value);
      if(event.target.value.includes("o") || event.target.value.includes("O")){
        alert("Por favor, ¡Nombres de usuario sin la letra o! ");
        userRef.current.focus();
        userRef.current.style.borderColor = "red";
        userRef.current.style.outline = "none";
      }else {
        userRef.current.focus();
        userRef.current.style.borderColor = "black";
        userRef.current.style.outline = "none";
      }
    };

    const signInHandler = () => {
        if (user.length <=  0 || user.includes("o") || user.includes("O")){
            alert("Usuario inválido para registrarse ");
            return;
        }
        else {
          alert("¡Usuario registrado correctamente! ")
        }
    };

  return (
    <div>
      <p>Ingrese su usuario:</p>
      <input 
      type='text'
      onChange={userChangeHandler}
      value={user}
      ref={userRef}
      placeholder='ingrese su usuario'
      />
      <button onClick={signInHandler} type='button'>
        Registrarse
        </button>
      <p>{user}</p>
    </div>
  )
}

export default Login
