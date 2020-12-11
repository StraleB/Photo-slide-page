import React, { Component } from 'react'
import './portfolioStyle.css';

export default class Portfolio extends Component {
    render() {
        return (
            <div className="portfolio-container">
               
                         <div className="portfolio-component">
                           <img src="https://cdn.pixabay.com/photo/2020/12/01/22/28/cathedral-5795695_960_720.jpg" alt="portfolio-img"/>  
                         </div>                
              
                        <div className="portfolio-component">
                            <img src="https://cdn.pixabay.com/photo/2020/12/02/00/57/mountain-5795883_960_720.jpg" alt="portfolio-img"/>
                        </div>
               
                        <div className="portfolio-component">
                            <img src="https://cdn.pixabay.com/photo/2019/06/19/16/40/bridge-4285310_960_720.jpg" alt="portfolio-img"/>
                        </div>
              
                        <div className="portfolio-component">
                             <img src="https://cdn.pixabay.com/photo/2020/10/18/19/38/girl-5665943_960_720.jpg" alt="portfolio-img"/>
                         </div>                
               
                        <div className="portfolio-component">
                            <img src="https://cdn.pixabay.com/photo/2019/01/28/11/48/chess-3960184_960_720.jpg" alt="portfolio-img"/>
                        </div>
              
                        <div className="portfolio-component">
                             <img src="https://cdn.pixabay.com/photo/2020/10/17/10/51/mountains-5661718_960_720.jpg" alt="portfolio-img"/>
                        </div>
              
                        <div className="portfolio-component">
                            <img src="https://cdn.pixabay.com/photo/2020/11/04/19/54/trees-5713451_960_720.jpg" alt="portfolio-img"/>
                        </div>
            
                        <div className="portfolio-component">
                             <img src="https://cdn.pixabay.com/photo/2019/09/27/23/43/fog-4509607_960_720.jpg" alt="portfolio-img"/>
                        </div>
             

                
            </div>
        )
    }
}
