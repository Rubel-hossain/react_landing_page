import React from 'react';

import Slick from 'react-slick';

import style from './slider.css';

const SliderTemplates = (props) => {
 
    const settings = {

        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        ...props.settings
    }

    let template = null;

    switch(props.type){

        case("featured") :

          template = props.data.map((items,i)=>{

                return (

                    <div key={i}>
                       <div className={style.feature_item} type="featured">
                          <div className="feature_image"
                           
                            style={{
                                background:`url(../images/articles/${items.image})`,
                                height: "330px",
                                backgroundSize: "contain"
                            }}
                          >
                            
                          </div>
                       </div>    
                    </div>    
                );
          })

        break;

        default: 
            template = null;

    }
    
    return(

        <div>
          <Slick {...settings}>
             {template}
           </Slick>     
        </div>    
    );
}

export default SliderTemplates;
