import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './user.module.css'

import { useForm } from '../../hooks/useForm';
import { useLogin } from '../../hooks/useAuth';
import { loginData } from '../../util/form-util';

export default function Login() {

    const fields = loginData.fields;
    const formInitialValues = loginData.form;
    const [error, setError] = useState(false)

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])

    const navigate = useNavigate();

    const login = useLogin();

    const loginHandler = async ({ email, password }) => {
        setError('')

        if (email.trim() == '' || password.trim() == '') {
            return setError('Please enter your credentials')
        }
        try {
            await login(email, password)
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(formInitialValues, loginHandler)

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
                                <h2>Login</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div>
                                <form id="register" className={styles['register_form']} onSubmit={submitHandler}>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <input
                                                ref={inputRef}
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
                                                value={values.password}
                                                onChange={changeHandler}
                                                autoComplete='false'
                                            />
                                        </div>
                                        <div className="col-md-12">
                                            <button type="submit" className={styles['send_btn']}>Log in</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}