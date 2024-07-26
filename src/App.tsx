
import Form from "./Components/Form";
import QrList from "./Components/QrList";


export default function App() {
  return (
    <>
      <header className="py-5 text-left bg-gray-100">
        <h1
          className=" text-5xl font-bold ">Creador de codigos QR</h1>
      </header>
      <Form />
      <QrList/>
     

    </>
  )
}
