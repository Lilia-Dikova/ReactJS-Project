import { useForm } from '../../hooks/useForm';
import { login } from '../../util/util';

import styles from './user.module.css'

export default function Login() {

    const fields = login.fields;
    const formInitialValues = login.form;



    const submitFormHandler = (values) => {
        console.log(values)
    }


    const {values, changeHandler, submitHandler} = useForm (formInitialValues, submitFormHandler)

    return (
        <div className='full_page'>
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