import { useEffect, useRef, useState } from 'react'
import styles from './user.module.css'
import { register } from '../../util/util'
import { useForm } from '../../hooks/useForm';

export default function Register() {

    const fields = register.fields;
    const formInitialValues = register.form;

    const submitFormHandler = (values) => {
        console.log(values);
    } 

    const {values, changeHandler, submitHandler} = useForm (formInitialValues, submitFormHandler)

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const inputRef = useRef();

    return (
        <div className='full_page'>
            <div className="about-us">
                <div className={styles['container']}>
                    <div className="row">
                        <div className="col-md-12 ">
                            <div className="text_align_center">
                                <h2>Create an Account</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <form onSubmit={submitHandler} className={styles['register_form']}>
                                <div className="row">
                                    <div className="col-md-12 ">
                                        <input
                                            className={styles['form_control']}
                                            placeholder="Username"
                                            type="text"
                                            name={fields.username}
                                            value={values.username}
                                            onChange={changeHandler}
                                            ref={inputRef}
                                        />

                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            className={styles['form_control']}
                                            placeholder="Email"
                                            type="email"
                                            name={fields.email}
                                            value={values.email}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            className={styles['form_control']}
                                            placeholder="Password"
                                            type="password"
                                            name={fields.password}
                                            onChange={changeHandler}
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            className={styles['form_control']}
                                            placeholder="Repeat Password"
                                            type="password"
                                            name={fields.rePassword}
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
        </div>
    );
}