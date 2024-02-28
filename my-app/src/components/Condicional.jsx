import { useState } from "react"



function Condicional(){
    const [email, setEmail] = useState()
    const [userEmail, setuserEmail] = useState()
    function enviarEmail(e){
        e.preventDefault()
        setuserEmail(email)
        console.log(userEmail)
    }
function limparEmail(){
    setuserEmail("")
    
}   
    
    return(
        <div>
            <h2>Cadastre seu email:</h2>
            <form>
                <input type="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}></input>
            </form>
            <button type="submit"onClick={enviarEmail}>Envia-email</button>
            {userEmail &&(
                <div>
                    <p>O email do user é: {userEmail}</p>
                    <button onClick={limparEmail}>Limpar email</button>
                </div>
            )}
        </div>

    )
}
export default Condicional