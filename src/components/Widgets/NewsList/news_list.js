import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import style from './news_list.css';
import Buttons from '../Buttons/buttons';

class NewsList extends Component {

    state = {
        items: [],
        start: this.props.start,
        stop: this.props.start+this.props.amount,
        amount: this.props.amount
    }

    componentWillMount(){

        this.request(this.state.start, this.state.stop);
    }

    request(start, stop){

        axios.get(`http://localhost:3004/articles?_start=${start}&_end=${stop}`).then((response)=>{

            this.setState({

                 items: [...this.state.items, ...response.data]
            });
      });
    }

    load_more = () => {


        let stop = this.state.stop+this.state.amount;

        this.request(this.state.stop, stop);
    }

    renderNews = (type) => {

        let template = null;

        switch(type){

          case("card"): 

             template = this.state.items.map((item, i)=>{

                   return(
                      <CSSTransition
                       
                         classNames = {{
                             enter: style.newsList_wrapper,
                             enterActive: style.newsList_wrapper_enter
                         }}

                         timeout= {500}
                         key = {i}
                      >
                       <div key={i} className={style.newslist_item}>
                           <Link to={`articles/${item.id}`}>
                             <h4>{item.title}</h4>
                           </Link>
                       </div>
                       </CSSTransition>    
                   );   
             });
             break;

          default:
             template = null;
        }

        return template;
    }

    render(){
       
        return(
            <div>
                <TransitionGroup
                   component="div"
                   className="list"
                >
                  {this.renderNews(this.props.type)}
                </TransitionGroup>
                <Buttons 
                
                  type="loadmore" 
                  loadMore = {()=>this.load_more()}
                  cta = "Load More"
                
                />
                
            </div>    
        );
    }
}

export default NewsList;