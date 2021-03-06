import React, { useState } from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Interrupcion.css'

export const Interrupcion = () => {

  const [modalCorrecto, setModalCorrecto] = useState(false);
  const [modalIncorrecto, setModalIncorrecto] = useState(false);
  const [State, setState] = useState({
    numPar: 0,
    nombre: ""
  });
  const [Msg, setMsg] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value
    }))
    console.log(setState);
  }

  const ValidarDatos = () => {
    const { numPar, nombre } = State;
    try {

      if (numPar % 2 === 0 && nombre === 'Par') {
        abrirCerrarModalCorrecto();
      } else if (numPar % 2 !== 0) {
        throw 'Número es impar'
      } else throw 'Nombre incorrecto'

    } catch (error) {
      if (error === 'Número es impar' || error === 'Nombre incorrecto') {
        setMsg(error)
        abrirCerrarModalIncorrecto();
      }
    }
  }

  const abrirCerrarModalCorrecto = () => {
    setModalCorrecto(!modalCorrecto);
  }

  const abrirCerrarModalIncorrecto = () => {
    setModalIncorrecto(!modalIncorrecto);
  }


  return (
    <div className='Cuerpo'>
      <div className="Formulario" >
        <h1>Interrupciones</h1>
        <div className="Input par">
          <span>Ingresa un número par </span>
          <input type="number" name='numPar' onChange={handleChange} id='NumPar' placeholder='24' required></input>
        </div>
        <div className="Input correo">
          <span>Ingresa el nombre 'Par' </span>
          <input type="text" name='nombre' onChange={handleChange} placeholder='Par' required></input>
        </div>
        <button className='button Validacion' onClick={() => ValidarDatos()}><span>Comprobar</span></button>
      </div>

      <Modal isOpen={modalCorrecto}>
        <ModalHeader>¡CORRECTO! Todos los datos son validos</ModalHeader>
        <ModalBody>
          <div className='Modal'>
            <span>Ahora intenta equivocarte para generar una Interrupcion</span>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-success" onClick={() => abrirCerrarModalCorrecto()}>Aceptar</button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={modalIncorrecto}>
        <ModalHeader>¡Felicidades! Acabas de generar una interrupción </ModalHeader>
        <ModalBody>
          <div className='Modal'>
            <p> Excepción Capturada es : {Msg}</p>
            <span> Aprendimos cuando se genera una interrupción </span>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => abrirCerrarModalIncorrecto()}>Interrupcion</button>
        </ModalFooter>
      </Modal>
    </div>
  )
}
