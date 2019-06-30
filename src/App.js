import React, { Component } from 'react';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import ThemeToggle from './components/ThemeToggle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext';

class App extends Component {
    render() {
        return (
         <ThemeContextProvider> 
           <AuthContextProvider> 
	         <div className="App">
	           <NavBar />    
	           <BookList />
	           <ThemeToggle />
	         </div>
	       </AuthContextProvider>   
         </ThemeContextProvider> 
        );
    }
}

export default App;
