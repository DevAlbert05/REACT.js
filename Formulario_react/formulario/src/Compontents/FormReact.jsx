import "./FormReact.css"

import React from 'react'

import { useState } from "react"



const FormReact = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()
       const [bio, setBio] = useState()

       const [role, setRole] = useState()

    const handleName = (e) => {
    setName(e.target.value)


}
    // ENvio de form

    const handleSubmit = (e) => {

        e.preventDefaults()
        console.log(name, email, bio)

        // validacao

        // envio

        // limpando o form
        setName("")
        setEmail("")
        setBio("")
        setRole("")
    }

console.log(name, email)



  return (
    <div>

    {/* Envio de formulário */}
    <form onSubmit={handleSubmit}></form>
        <form>
            <div>
                <label htmlFor="name">Nome: </label>
                <input type="text"  
                name="name" 
                placeholder="Digite o seu nome" 
                onChange={handleName} 
                // Controlled input
                value={name || ""}
                />

               
            </div>
            
            {/* LAbel envolvendo input */}
            <label>
                <span>E-mail:</span>
                <input 
                type="text" 
                name="email" 
                placeholder="Digite o seu e-mail"
                onChange={(e) => setEmail(e.target.value)}
                value={email || ""}
                />
            </label>
             {/* TExtarea */}
            <label>
            <span>Bio:</span>
            <textarea 
            name="bio" 
            placeholder="Descrição do usuário" 
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            ></textarea>
            </label>

            {/* 9 - select */}
        <label>
          <span>Função no sistema</span>
          <select
            name="role"
            onChange={(e) => setRole(e.target.value)}
            value={role}
          >
            <option value="user">Usuário</option>
            <option value="editor">Editor</option>
            <option value="admin">Administrador</option>
          </select>
        </label>

            <input type="submit" value="Enviar"/>
       

        
        
        </form>
    </div>
  )
}

export default FormReact