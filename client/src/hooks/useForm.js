import { useEffect, useState } from "react"

export const useForm  = (initialValues, callBack) => {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e)  => {
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        callBack(values);
    }

    return  {
        values,
        changeHandler,
        submitHandler
    }
}