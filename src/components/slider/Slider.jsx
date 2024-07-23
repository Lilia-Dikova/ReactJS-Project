import Controls from "./controls/Controls";
import SliderElement from "./slider-element/SliderElement";

export default function Slider() {
    return (
        <div className="full_bg">
            <div className="slider_main">
                <div id="banner1" className="carousel slide">
                    <div className="carousel-inner">
                        <SliderElement />
                    </div>
                <Controls />
                </div>
            </div>
        </div>
    );
}