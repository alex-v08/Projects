

// TODO: Create RecipeTitle component

import React from 'react'


function RecipeTitle(props) {
  return (
    <section>
        <h2>{props.title}</h2>
        <h3 className={ props.feedback.rating <= 3.5 ? 'red' : 'green' }>
                { props.feedback.rating } from { props.feedback.reviews } reviews
        </h3>

    </section>
  )
}

RecipeTitle.propTypes = {}

export default RecipeTitle






