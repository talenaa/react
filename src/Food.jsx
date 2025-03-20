function Food(){
    
    const food1 = "Pizza";
    const food2 = "Fries";
    const food3 = "Tacos";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
            <li>{food3.toLowerCase()}</li>
        </ul>
    );
}

export default Food