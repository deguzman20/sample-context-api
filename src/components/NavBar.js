import React, { Component, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';


// context api version

// class NavBar extends Component{
// 	render(){
// 	  return(
// 	  	<AuthContext.Consumer>{ (AuthContext) => (
// 	  	  <ThemeContext.Consumer>
// 	        { (themeContext) => {
// 	         const { isAuthenticated, toggleAuth } = AuthContext;
// 	         const { isLightTheme, light, dark } = themeContext;
// 		     const theme = isLightTheme ? light : dark;	
// 	          return(
// 	            <nav style={{ background: theme.ui, color: theme.syntax }}>
// 		          <div onClick={toggleAuth}>
// 		          	{ isAuthenticated ?  'Logged in' : 'Logout' }
// 		          </div>
// 		          <ul>
// 		            <li style={{ background: theme.ui }} >Home</li>
// 		            <li style={{ background: theme.ui }} >About</li>
// 		            <li style={{ background: theme.ui }} >Contact</li>
// 		          </ul>
// 				</nav>
// 	          )
// 	        }}
// 	      </ThemeContext.Consumer>
// 	  	)}  
// 	    </AuthContext.Consumer>   
// 	  ); 	
// 	}
// }

// hook version

const NavBar = () => {
   const { isLightTheme, light, dark } = useContext(ThemeContext);
   const { isAuthenticated, toggleAuth } = useContext(AuthContext);
   const theme = isLightTheme ? light : dark;	
   return(
     	<nav style={{ background: theme.ui, color: theme.syntax }}>
          <div onClick={toggleAuth}>
          	{ isAuthenticated ?  'Logged in' : 'Logout' }
          </div>
          <ul>
            <li style={{ background: theme.ui }} >Home</li>
            <li style={{ background: theme.ui }} >About</li>
            <li style={{ background: theme.ui }} >Contact</li>
          </ul>
	    </nav>
   );
}

export default NavBar;