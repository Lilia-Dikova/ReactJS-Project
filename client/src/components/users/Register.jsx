import { useEffect, useRef, useState } from 'react'
import styles from './user.module.css'

export default function Register() {

    const [formValues, setFormValues] = useState({
        username: '',
        email: '',
        password: '',
        rePassword: ''
    });

    const onSubmitRegister = (e) => {
        e.preventDefault()
        console.log('ok')
    }
    
    const changeHandler = (e) => { 
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value,
        }));
        console.log(formValues)
    };

    useEffect(()=> {
        inputRef.current.focus();
    },[])

    const inputRef = useRef();

    return (
    <div className="about-us">
        <div className={styles['container']}>
            <div className="row">
                <div className="col-md-12 ">
                    <div className="titlepage text_align_center">
                        <h2>Create an Account</h2>
                    </div>
                </div>
                <div className="col-md-12">
                    <form onSubmit={onSubmitRegister} className={styles['register_form']}>
                        <div className="row">
                            <div className="col-md-12 ">
                                <input
                                    className={styles['form_control']}
                                    placeholder="Username"
                                    type="text"
                                    name= "username"
                                    id='username'
                                    value={formValues.username}
                                    onChange={changeHandler}
                                    ref={inputRef}
                                />

                            </div>
                            <div className="col-md-12">
                                <input
                                    className={styles['form_control']}
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    value={formValues.email}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className={styles['form_control']}
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <input
                                    className={styles['form_control']}
                                    placeholder="Repeat Password"
                                    type="password"
                                    name="rePassword"
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className="col-md-12">
                                <button className={styles['send_btn']}>Register</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    );
}