import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import SideNav from './SideNav';
import style from './header.css';


const Header = (props) => {

    const logo = () => {

        return(
            <Link to="/" className={style.logo}><img src="./images/nba_logo.png" alt="logo"/></Link>
        );
     }
     
     const navbar = () => {
     
         return(
            <FontAwesome name="bars"
            onClick = {props.onShowNav}
            style={{
                color: "#fff",
                padding: "10px",
                cursor: "pointer"
            }}> Icon Here</FontAwesome>
         );
     }

   return (
       <header className={style.header}>
          <SideNav {...props}/>
          <div className={style.headerOpt}>
            {navbar()}
            {logo()}
          </div>    
       </header>      
   );
}

export default Header;