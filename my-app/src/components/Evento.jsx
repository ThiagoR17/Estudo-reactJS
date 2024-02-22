function Evento(){
    function meuEvento(e){
        e.preventDefault()
        console.log("Fui ativado!")
    }
    return(
        <div>
            <p>Click para dispara um evento</p>
            <button onClick={meuEvento}>Ativa!</button>

        </div>
    )
}
export default Evento