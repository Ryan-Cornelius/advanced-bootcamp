import React from 'react';
import './RecipeApp.css';
import Recipe from './Recipe'
import NavBar from './NavBar'

function RecipeApp() {
  return (
    <div className="App">
        <NavBar />
        <Recipe 
            title='pasta'
            ingredients={['flour', 'water']}
            instructions='Mix ingredients'
            img='https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg'
          />
    </div>
  );
}

export default RecipeApp;
