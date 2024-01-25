import { useEffect, useState } from "react";

export const Articles = () => {

    const [ list, setList] = useState([]);

    const URL = "https://jsonplaceholder.org/posts";
    
    const getArticles = () => {
        console.log('get articles')
        fetch(URL)
        .then(reponse => reponse.json())
        .then(res => setList(res))
    }

    useEffect(() => {
        getArticles()
    }, [])

    return (
        <div>
            { list.map((article, index) => 
                <h3 key={index}>{article.title}</h3>
            ) }
        </div>
    )
}