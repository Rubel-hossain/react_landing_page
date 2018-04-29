import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';

import style from './sidenav.css';

const SideNavItems = ()=> {


    const Items = [
      
        {
            type: style.option,
            icon: 'home',
            link: '/',
            text: 'Home'
        },
      
        {
            type: style.option,
            icon: 'sign-in',
            link: '/sign-in',
            text: 'Sign In'
        },
      
        {
            type: style.option,
            icon: 'sign-out',
            link: '/sign-out',
            text: 'Sign Out'
        }
    ];


    const ShowItems = () => {

        return  Items.map((item,i) =>{

                  return(
                      <div key={i} className={item.type}>
                        <Link to={item.link}>
                          <FontAwesome name={item.icon}/>
                           {item.text}
                        </Link>
                      </div>    
                  );
          });
    }

    return(

        <div className="menu-wrapper">
            {ShowItems()}
        </div>    
    );
}

export default SideNavItems;