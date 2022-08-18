import { useEffect } from "react";
import { useState } from "react";

function TableProducts () {
    const [error, setError] = useState(null);
    const [isLoaded, setIsloaded] = useState(false);
    const [items, setItems] = useState();

    useEffect(() => {
        fetch('http://localhost:3001/api')
        .then(res => res.json())
        .then((result) => {
            setIsloaded(true);
            setItems(result);
        },
        (error) => {
            setIsloaded(true);
            setError(error);
        }
        )
    }, [])

    if (error) {
        return <div> Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div> Загрузка... </div>;
    } else {
        return (
            <div>
                <ul>
               
                    {items.data.map(item => (
                        <li>
                            {item.productname}
                            <br/>
                            {item.quantity}
                            <br/>
                            {item.code}
                        </li>
                    ))}
                    
                   
                </ul>
            </div>
        )
    }
}

export default TableProducts;