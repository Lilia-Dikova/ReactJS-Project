import styles from './user.module.css'

export function Login() {
    return (
        <div className={styles['register']}>
            <div className={styles['container']}>
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="titlepage text_align_center">
                            <h2>Login</h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <form id="register" className={styles['register_form']}>
                                <div className="row">
                                    <div className="col-md-12">
                                        <input
                                            className={styles['form_control']}
                                            placeholder="Email"
                                            type="email"
                                            name="email"
                                        />
                                    </div>
                                    <div className="col-md-12">
                                        <input
                                            className={styles['form_control']}
                                            placeholder="Password"
                                            type="password"
                                            name="password"
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