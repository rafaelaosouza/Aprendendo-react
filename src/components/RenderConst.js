const RenderConst = ({x , y}) =>{
    return (
        <div>
            {x > 5 && <p>X é maior que 5</p>}
            {x > 5 ? <p>X é um número alto</p> : <p> X é baixo</p>}
            <p> O valor de y é: {y}</p>
        </div>
    )
}

export default RenderConst;