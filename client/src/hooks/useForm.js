import { useEffect, useState } from "react"

export const useForm  = (initialValues, callBack) => {
    const [values, setValues] = useState(initialValues);

    useEffect(()=> {
        setValues(initialValues)
    },[initialValues])
    
    const changeHandler = (e)  => {
     
        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        await callBack(values);

        setValues(initialValues)
    
    }

    return  {

        values,
        changeHandler,
        submitHandler,
    }
}