import {useState} from 'react';

export default (initialVal)=>{

    const [state, setState] = useState(initialVal);
    
    const handleChange = (e)=>{
        setState(e.target.value)
    }

    const resetState = ()=>{
        setState("")
    }

    return [state, handleChange, resetState];
}