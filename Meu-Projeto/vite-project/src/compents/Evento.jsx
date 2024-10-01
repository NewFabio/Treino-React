import Button from "./events/Button"

function Evento() {
    function meuEvento() {
        console.log('Opa, fui ativado!')
    }
    
    function segundoEvento() {
        console.log('Ativou segundo evento!')
    }

    return (
        <>
            <p>Clique para disparar um evento:</p>
            <Button text='Primeiro evento!' event={meuEvento} />
            <Button text='Segundo evento!' event={segundoEvento} />
        </>
    )
}

export default Evento