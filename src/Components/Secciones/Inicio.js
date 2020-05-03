import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img0 from '../../Assets/Img/Inicio/0.jpg'
import img1 from '../../Assets/Img/Inicio/1.jpg'
import img2 from '../../Assets/Img/Inicio/2.jpeg'
import img3 from '../../Assets/Img/Inicio/3.jpg'
import '../../App.css'
import i18n from '../../i18n'


export class Inicio extends Component {
    render() {
        return (
            
            <div>
                <div>
                    <div className="inicio-img" style={{'backgroundImage': 'url('+img1+')'}} />
                    <h2 className="Slider-Title"> {i18n.t('Inicio.Title')} </h2>
                    <p className="Slider-Subtitle">
                        {i18n.t('Inicio.SubTitle')}
                    </p>
                </div>
                {/*
                <Carousel infiniteLoop /*useKeyboardArrows*/ /*autoPlay showIndicators={false} showArrows={false} showStatus={false} showThumbs={false} dynamicHeight>
                    <div>
                        <img src={img1}/>
                        <div>
                            <h2 className="Slider-Title"> {i18n.t('Inicio.Title')} </h2>
                            <p className="Slider-Subtitle">
                                {i18n.t('Inicio.SubTitle')}
                            </p>
                        </div>
                    </div>
                    {/*
                    <div>
                        <img src={img0}/>
                        <h2 className="Slider-Title"> {i18n.t('Inicio.Title')} </h2>
                        <p className="Slider-Subtitle">
                            {i18n.t('Inicio.SubTitle')}
                        </p>
                    </div>
                    <div>
                        <img src={img2} />
                        <h2 className="Slider-Title"> {i18n.t('Inicio.Title')} </h2>
                        <p className="Slider-Subtitle">
                            {i18n.t('Inicio.SubTitle')}
                        </p>
                    </div>
                    <div>
                        <img src={img3} />
                        <h2 className="Slider-Title"> {i18n.t('Inicio.Title')} </h2>
                        <p className="Slider-Subtitle">
                            {i18n.t('Inicio.SubTitle')}
                        </p>
                    </div>
                    </Carousel>
                    */}
            </div>
        )
    }
}

export default Inicio