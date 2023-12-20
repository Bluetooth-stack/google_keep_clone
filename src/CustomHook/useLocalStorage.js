import { useEffect, useState } from "react";

const prefix = 'Day'

function useLocalStorage(key, initialValue){
    const combiledKey = prefix+key;
    const [value, setValue] = useState(()=>{
        const storedValue = localStorage.getItem(combiledKey);

        if(storedValue !== null){
            return JSON.parse(storedValue);
        }
        else if(typeof initialValue === 'function'){
            return initialValue();
        }
        else{
            return initialValue;
        }
    })

    useEffect(()=>{
        localStorage.setItem(combiledKey, JSON.stringify(value))
    }, [combiledKey, value])

    return [value, setValue];
}

export default useLocalStorage