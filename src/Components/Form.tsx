
export default function Form() {

  return (
    <div>
        <form action="">

        <div className="grid grid-cols-1 gap-3">
            <label htmlFor="" className="max-w-4xl mx-auto text-lg font-semibold">Ingresa el enlace:</label>
            <input type="text" placeholder="Ingresa tu enlace aqui" className="max-w-4xl w-3/5 mx-auto text-center" />
            <input 
            className="max-w-4xl mx-auto bg-gray-700 text-white rounded-lg cursor-pointer p-2"
            type="submit" />
        </div>

        </form>
    </div>
  )
}
