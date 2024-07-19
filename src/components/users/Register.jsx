import { useState } from 'react'
import styles from './user.module.css'



export function Register() {


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


    const onChangeRegisterInfo = (e) => {
        setUser(oldUser => ({
            ...oldUser,
            [e.target.name]: e.target.value

        }))

        console.log(user)
    }
    
    const changeHandler = (e) => {
        console.log(formValues)
 
        setFormValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.type === 'checkbox'
                ? e.target.checked
                : e.target.value,
        }));
       
    };

    return (
    <div className={styles['register']}>
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