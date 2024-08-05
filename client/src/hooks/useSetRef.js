import { useEffect, useRef } from "react";

export const useSetRef = ()=> {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, [])
    return {inputRef};
}