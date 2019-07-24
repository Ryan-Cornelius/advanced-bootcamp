import React, { Component } from 'react';
import './recipe.css'

class Recipe extends Component {
    render() { 
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ))
        return (
            <div className='recipe-card'> 
                <div className='recipe-card-img'><img src={img} alt={title}></img></div>
                <div className='card-content'>
                    <h4 className='recipe-title'>{title}</h4>
                    <ul>
                        {ingredients}
                    </ul>
                    <h4>Instructions</h4>
                    <p>{instructions}</p>    
                </div>
            </div>
         );
    }
}
 
export default Recipe;