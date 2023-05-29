
function IngredientList(props) {
    return (
        <ul className="ingredients">
            {props.ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.name}</li>
            ))}
        </ul>
    )
}


export default IngredientList;