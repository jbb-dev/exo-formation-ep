export const Student = ({ data, campus }) => {

    return (
        <div>
            <h2>Campus de : {campus} </h2>
            <img src={data.avatar} width={"150px"} height={"150px"}/>
            <p>Bonjour je m'appelle {data.firstname}</p>
        </div>
    )
}