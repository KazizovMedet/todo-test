import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import CreatingTodo from "./pages/CreatingTodo";
import ViewingTodo from "./pages/ViewingTodo";
import Header from "./components/Header";

const App = () => {
    return (
            <Router>
                <Header/>
                <Redirect to='/creating'/>
                <Route exact path='/creating'><CreatingTodo/></Route>
                <Route exact path='/viewing'><ViewingTodo/></Route>
            </Router>
    );
};

export default App;