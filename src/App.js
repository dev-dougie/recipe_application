import React, {useEffect, useState } from 'react'
import Recipe from './Recipe';
import './App.css'

const App = () =>{

    //As requisições desta aplicação foram feitas à API de: www.edamam.com (Recipe API)

    const APP_ID = /* id necessário para acesso à API*/
    const APP_KEY = /*Chave de acesso à API*/
      
    const[recipes, setRecipes] = useState([]);
    const[search, setSearch] = useState('');
    const[query, setQuery] = useState('coffee');

    //Definindo função para chamar minha API 
    useEffect(() => {
        getRecipes()
    }, [query])



    //Promise que fará a requisição a minha API
    const getRecipes = async()=>{
        const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
        //Transformando minha resposta em formato JSON
        const data = await response.json();
        setRecipes(data.hits);
        console.log(data.hits)
    }

    const updateSearch = (e) =>{
            setSearch(e.target.value)
    }

    const getSearch = (e) =>{
        //Previne o recarregamento da página após clicarmos no botão
        e.preventDefault();
        //Troca minha pesquisa para o que foi digitado
        setQuery(search) 
        setSearch('');
    }


    return(
        <div onSubmit  = {getSearch} className = 'App'>
            <form className = 'search-form'>
                <input type = 'texto' className ='search-bar' value = {search} onChange = {updateSearch}/>
                <button type = 'submit' className ='search-button'>Search</button>
            </form>
            <div className = 'recipes'>
            {//Criando elemento em tela de acordo com a requisição feita através da pesquisa
            recipes.map(recipe =>(
                <Recipe 
                key = {recipe.recipe.label}
                title = {recipe.recipe.label} 
                calories = {parseFloat(recipe.recipe.calories).toFixed(1)} 
                image = {recipe.recipe.image}
                ingredients = {recipe.recipe.ingredients}/>
            ))}
            </div>
        </div>
    )
}


export default App;

