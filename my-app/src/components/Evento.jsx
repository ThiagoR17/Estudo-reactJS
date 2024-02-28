import Button from "./eventos/Button"
function Evento(){
    function meuEvento(e){
        e.preventDefault()
        console.log("Ativando primeiro evento")
    }
    return(
        <div>
            <p>Click para dispara um evento</p>
            <Button event={meuEvento} text= "Primeiro evento"></Button>
        </div>
    )
}
export default Evento