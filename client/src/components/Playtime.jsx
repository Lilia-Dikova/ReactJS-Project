import { useState } from 'react';

export function PlayTime() {


    const [cat, setCat] = useState('ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ');


    return (

        <>
            <div className="col-md-12 ">
                <div className="titlepage text_align_center">
                    <h2>Choose Avatar</h2>
                </div>
            </div>
            <div className="main_form">
                <div className="row">
                    <div className="col-md-12 ">
                        <h1
                            className="titlepage text_align_center"
                        >
                                 ฅ⁠^⁠•⁠ﻌ⁠•⁠^⁠ฅ
                        </h1>
                    </div>
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown</button>
                        <div className="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}