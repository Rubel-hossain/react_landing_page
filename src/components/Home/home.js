import React from 'react';

import NewsSlider from '../Widgets/NewsSlider/slider';

import NewsList from '../Widgets/NewsList/news_list';

import style from './home.css';

const Home = () => {

    return(
         
        <div className={style.slider}>
           <NewsSlider type="featured" start={0} amount={6}  settings={{

                 dots: true
           }}/>
           <div className="newslist-wrapper">
              <NewsList type="card" start={3} amount={3}/>
           </div>
        </div>
    );
}

export default Home;