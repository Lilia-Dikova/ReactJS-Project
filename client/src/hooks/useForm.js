import { useEffect, useState } from "react"

export const useForm = (initialValues, callBack, noReset) => {
    const [values, setValues] = useState(initialValues);

    useEffect(() => {
        setValues(initialValues)
    }, [initialValues])

    const changeHandler = (e) => {

        setValues(oldValues => ({
            ...oldValues,
            [e.target.name]: e.target.value
        }))
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        await callBack(values);

        if (!noReset) {
            setValues(initialValues)
        }

    }

    return {

        values,
        changeHandler,
        submitHandler,
    }
}