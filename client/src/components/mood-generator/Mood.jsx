import React, { useState, useEffect } from 'react';

export default function Mood() {
    const [imgUrl, setImgUrl] = useState('../images/mood.svg');
    const [render, setRender] = useState(null);

    useEffect(() => {
        if (render) {
            (async function getImage() {
                try {
                    const req = await fetch(render.url);
                    const res = await req.json();
                    render.setter(res);
                } catch (err) {
                    console.log(err.message);
                }
            })();
            setRender(null);
        }
    }, [render]);

    return (
        <>
            <div className='full_page'>
                <div className="page-us">
                    <div className='container-mood'>
                        <div className="col-md-12 text_align_center mood-font">
                            <h1>Mood Generator</h1>
                            <h2> Purrfectly Random: Your Daily Dose of Pet Happiness!🐾😸</h2>
                            <div >
                                <img className="custom_img" src={imgUrl} alt="Mood" />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-6 d-flex justify-content-center">
                                <button
                                    className="animal_btn"
                                    onClick={() => setRender({
                                        url: 'https://dog.ceo/api/breeds/image/random',
                                        setter: (res) => {
                                            setImgUrl(res.message);
                                        },
                                    })}
                                >
                                    Dog Mood
                                </button>
                            </div>
                            <div className="col-sm-6 d-flex justify-content-center">
                                <button
                                    className="animal_btn"
                                    onClick={() => setRender({
                                        url: 'https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1',
                                        setter: (res) => {
                                            if (res.length > 0) {
                                                setImgUrl(res[0].url);
                                            }
                                        },
                                    })}
                                >
                                    Cat Mood
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
