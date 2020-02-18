import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import img0 from '../../Assets/Img/Inicio/0.jpg'
import img1 from '../../Assets/Img/Inicio/1.jpg'
import img2 from '../../Assets/Img/Inicio/2.jpeg'
import img3 from '../../Assets/Img/Inicio/3.jpg'
import '../../App.css'

export class Inicio extends Component {
    render() {
        return (
            <div>
                <Carousel infiniteLoop useKeyboardArrows /*autoPlay*/ showStatus={false} showThumbs={false} dynamicHeight>
                    <div>
                        <img src={img0}/>
                        <div>
                            <h2 className="Slider-Title"> Excelencia en Cortes Argentinos </h2>
                            <p className="Slider-Subtitle">
                            Ahora podrán disfrutar de un rico asado bien completo o comer unas ricas milanesas sin tener que moverse de sus casas y sin tener que pagar una fortuna por ello...</p>
                        </div>
                    </div>

                    <div>
                        <img src={img1}/>
                        <h2 className="Slider-Title"> Excelencia en Cortes Argentinos </h2>
                        <p className="Slider-Subtitle">
                        Ahora podrán disfrutar de un rico asado bien completo o comer unas ricas milanesas sin tener que moverse de sus casas y sin tener que pagar una fortuna por ello...</p>
                    </div>
                    <div>
                        <img src={img2} />
                        <h2 className="Slider-Title"> Excelencia en Cortes Argentinos </h2>
                        <p className="Slider-Subtitle">
                        Ahora podrán disfrutar de un rico asado bien completo o comer unas ricas milanesas sin tener que moverse de sus casas y sin tener que pagar una fortuna por ello...</p>
                    </div>
                    <div>
                        <img src={img3} />
                        <h2 className="Slider-Title"> Excelencia en Cortes Argentinos </h2>
                        <p className="Slider-Subtitle">
                        Ahora podrán disfrutar de un rico asado bien completo o comer unas ricas milanesas sin tener que moverse de sus casas y sin tener que pagar una fortuna por ello...</p>
                    </div>
                    </Carousel>
            </div>
        )
    }
}

export default Inicio