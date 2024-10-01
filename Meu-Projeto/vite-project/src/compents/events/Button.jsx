function Button(props) {
    return <button onClick={props.event} >{props.text}</button> //quando o trecho de html for pequeno, nao precisa dos parenteses do return.
}
export default Button