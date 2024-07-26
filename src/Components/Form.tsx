
import { FormEvent,ChangeEvent, useState } from "react"
import { Answers } from '../types/index';
import QRCode from "react-qr-code";

export default function Form() {

  const initial: Answers={
    enlace: '',
    title:'',
    codeValue:'https://github.com/josejchale'
  }

   const [answers, setAnswers] = useState(initial)
 

  const handleChange = (e: ChangeEvent<HTMLInputElement> ) => {
    const newEnlace = e.target.value;
    setAnswers(answers => ({
      ...answers,
      enlace: newEnlace,
      codeValue: newEnlace === '' ? 'https://github.com/josejchale' : newEnlace
    }))
  }


  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault()
    setAnswers({...answers})
  }

  return (
    <div>
        <form
        className="space-y-5 bg-white shadow rounded-lg p-10"
        onClick={handleSubmit}
        >

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="enlace" className="max-w-4xl mx-auto text-3xl font-semibold">Ingresa el enlace:</label>

            <input type="text"
            id="enlace"
            placeholder="Ingresa tu enlace (Ejemplo: https://github.com/josejchale)"
            className="p-2 max-w-4xl w-3/5 mx-auto max-h-4xl h-3xl my-auto text-center text-2xl " 
            value={answers.enlace}
            onChange={handleChange}
            />
            
            <input 
            className="max-w-4xl mx-auto bg-gray-700 text-white rounded-lg cursor-pointer p-2 text-xl"
            type="submit" 
            value={'Guardar'}  
            />

<QRCode
    className="max-w-4xl mx-auto m-10"
    size={250}
    value={answers.codeValue}
    />
        </div>

        </form> 

        

    </div>
  )
}
