import Item from './Item'
function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca  = "Gol" ano_lancamento={1990}/>
                <Item marca = "Fiat" ano_lancamento={2000}/>
                <Item marca = "Fiat" ano_lancamento={2005}/>
            </ul>
        </>

    )
}
export default List