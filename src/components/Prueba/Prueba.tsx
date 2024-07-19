import React, { useState } from 'react'
import "./Prueba.css"
const Prueba = () => {
    const [str, setStr] = useState<string>("");
    const [result, setResult] = useState("")
    const repetedValues = (word: string): string => {
        const contador: any = {};
        if(word.length > 0){

            for (const caracter of word.toLowerCase()) {
                contador[caracter] = (contador[caracter] || 0) + 1
            }
        }else{
            return ""
        }
        return JSON.stringify(contador)
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult(repetedValues(str))
    }

    return (
        <>
            <div className="container">
                <form action="" className="formulario" onSubmit={handleSubmit}>
                    <input className="wordInput" placeholder="Ingrese una palabra" type="text" onChange={(e) => {
                        setStr(e.target.value);
                    }} />
                    <button className="button">
                        Transformar
                    </button>
                </form>
                {
                    result &&
                    <span className="result">
                        {result}
                    </span>
                }
            </div>
        </>
    )
}

export default Prueba