import { useEffect, useRef, useState } from 'react'

import styles from './user.module.css'

import { registerData } from '../../util/form-util'
import { useForm } from '../../hooks/useForm';
import { useNavigate } from 'react-router-dom';
import { useRegister } from '../../hooks/useAuth';

export default function Register() {

    const fields = registerData.fields;
    const formInitialValues = registerData.form;
    const [error, setError] = useState('');

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const navigate = useNavigate();
    const register = useRegister();

    const registerHandler = async ({ email, password, rePassword, username }) => {
        setError('')

        if (password !== rePassword) {
            return setError('Password missmatch!')
        }
        if (username.trim() == '') {
            return setError('Please, enter your username')
        }
        try {
            await register(email, password, username);
            navigate('/')

        } catch (err) {
            setError(err.message)
            console.log(err.message)
        }
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(formInitialValues, registerHandler)


    return (
        <div className='full_page'>
            {error && <div className='errorContainer'>
                <p>{error}</p>
            </div>
            }
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