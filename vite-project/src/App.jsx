import React, { useState } from 'react';

const App = () => {
  const [query, setQuery] = useState('');
  
  const recipes = [
    { name: 'Spaghetti Bolognese', ingredients: ['spaghetti', 'beef', 'tomato'] },
    { name: 'Chicken Curry', ingredients: ['chicken', 'curry powder', 'rice'] },
    { name: 'Avocado Toast', ingredients: ['bread', 'avocado', 'egg'] },
    { name: 'Pancakes', ingredients: ['flour', 'milk', 'egg'] },
    { name: 'Tacos', ingredients: ['tortilla', 'beef', 'cheese'] },
  ];

  const filteredRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🍽️ Recipe Finder</h1>
      
      <input
        type="text"
        placeholder="Search for a recipe..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={styles.input}
      />

      <ul style={styles.list}>
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe, index) => (
            <li key={index} style={styles.recipeCard}>
              <h3>{recipe.name}</h3>
              <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            </li>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '30px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  title: {
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    fontSize: '16px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
  },
  recipeCard: {
    border: '1px solid #ccc',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '10px',
  }
};

export default App;
