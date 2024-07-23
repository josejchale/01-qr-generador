import QRCode from "react-qr-code"
import Form from "./Components/Form";


export default function App() {
  return (
    <>
      <header className="py-5 text-left bg-gray-100">
        <h1
          className=" text-5xl font-bold ">Generador de QR</h1>
      </header>
      <Form />

      <QRCode
      className="max-w-4xl mx-auto m-5"
      value="https://www.youtube.com/@AxelSoda26"
        /> 

    </>
  )
}
