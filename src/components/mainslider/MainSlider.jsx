import React, { Component } from 'react';
import Deer from '../images/deer.jpg';
import icecream from '../images/ice-cream.jpg';
import manshadow from '../images/man-shadow.jpg';
import mountain from '../images/mountain.jpg';
import redVan from '../images/redvan.jpg';
import "./SliderStyle.css";



export default class MainSlider extends Component {
    render() {
        return (
            <div>
            <div className="slide-container">

                <article className="slider-component">
                    <img src={Deer} alt="slider-component"/>
                    <p id="photoBy">Photo taken by <a href="https://unsplash.com/@dylanleagh">Dylan Leagh</a></p>
                </article>

                <article className="slider-component">
                    <img src={icecream} alt="slider-component"/>
                    <p id="photoBy">Photo taken by <a href="https://unsplash.com/@kaleigrace">Kalei Peek</a></p>
                </article>

                <article className="slider-component">
                    <img src={manshadow} alt="slider-component"/>
                    <p id="photoBy">Photo taken by <a href="https://unsplash.com/@benjaminjsuter">Benjamin Suter</a></p>
                </article>

                <article className="slider-component">
                    <img src={mountain} alt="slider-component"/>
                    <p id="photoBy">Photo taken by <a href="https://unsplash.com/@lishaphoto">Lisha Riabinina</a></p>
                </article>

                <article className="slider-component">
                    <img src={redVan} alt="slider-component"/>
                    <p id="photoBy">Photo taken by <a href="https://unsplash.com/@whoisbenjamin">@whoisbenjamin</a></p>
                </article>
            </div>    

            <section className="swipe">
            <ion-icon className="phone" name="phone-portrait-outline"></ion-icon>
            <div className="white-line"></div>   
            <p className="swipe-text"> swipe the bar to see more</p>
            <div className="underline"></div> 
            </section>   
            <section className="social">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-linkedin"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            </section>         
            </div>

        )
    }
}


