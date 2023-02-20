// const nums = [1, 2, 3, 4, 5];

// const newNums = nums.map( (num) => {
//     return num * 2;
// }
// );

// console.log(newNums);

const Groceries = (props) => {
    // this could just as easily come from props
    const groceryList = ["pearl onions", "thyme", "cremini mushrooms", "butter"];
    return (
        <ul>
        {
            groceryList.map( (item, index) => 
                <li key={ index }>{ item }</li>
            )
        }
        </ul>
    ); 
}
    