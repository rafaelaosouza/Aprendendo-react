const List = () =>{
    const items = [{
        id:1, 
        name:"Rafaela"
    }, {
        id:2,
        name:"Pedro"
    }, {
        id:3,
        name:"Thiago"
    }

    ]
    return (
        <div>
            {items.map((item) =>(
                <p key={item.id}>{item.id} - {item.name}</p>
            ))}
        </div>
    )
}

export default List;