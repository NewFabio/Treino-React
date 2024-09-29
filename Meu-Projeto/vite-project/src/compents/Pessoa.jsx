function Pessoa({name, age, profession, foto}) {
    return (
        <div>
            <img src={foto} alt={name} />
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {profession}</p>
        </div>
    )
}
export default Pessoa