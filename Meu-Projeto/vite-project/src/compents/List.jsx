import Item from "./Item"

function List() {
    return (
        <>
            <h1>Minha Lista</h1>
            <ul>
               <Item marca='Ferrari' ano_lancamento={1985}/>
               <Item marca='Audi' ano_lancamento={1991}/>
               <Item marca='Lamborguini' ano_lancamento={1987}/>
               <Item />
               <Item />
            </ul>
        </>
    )
}
export default List