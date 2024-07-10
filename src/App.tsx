import React from 'react';
import './App.css';
import {Navbar} from "./Components/Navbar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Beans} from "./Components/Beans/Beans";
import {Bean} from "./Components/Beans/Bean/Bean";
import {Facts} from "./Components/Facts/Facts";
import {Recipes} from "./Components/Recipes/Recipes";
import {Recipe} from "./Components/Recipes/Recipe/Recipe";
import {Combinations} from "./Components/Combinations/Combinations";
import {History} from "./Components/History/History";

function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path={'/Beans'}>
                    <Route index element={<Beans />}/>
                    <Route path={':beanId'} element={<Bean />}/>
                </Route>
                <Route path={'/Facts'} element={<Facts/>}/>
                <Route path={'/Recipes'}>
                    <Route index element={<Recipes />}/>
                    <Route path={':recipeId'} element={<Recipe />}/>
                </Route>
                <Route path={'/Combinations'} element={<Combinations/>}/>
                <Route path={'/History'} element={<History/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
