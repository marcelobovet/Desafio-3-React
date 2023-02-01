import Table from 'react-bootstrap/Table';
import colaboradores from '../data/colaboradores';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react'

const { Group, Label, Control } = Form;

const Listado = () => {

    const [newName, setNewName] = useState("")
    const [listadoPersonas, setListadoPersonas] = useState(colaboradores)
    const [newEmail, setNewEmail] = useState("")
    const [buscar, setBuscar] = useState("")


    const registrar = (evento) => {
        evento.preventDefault()
        let ingresar = {
            id: "1",
            nombre: newName,
            correo: newEmail,
        };

        setListadoPersonas([...listadoPersonas, ingresar])

    }

    const cambiarInput = (evento) => {
        setNewName(evento.target.value)

    }

    const cambiarInputEmail = (evento) => {
        setNewEmail(evento.target.value)
    }


    return (
        <>
            <nav className="navbar navbar-light bg-dark pt-4 pb-4 mb-3">
                <div className="container-fluid">
                    <h1 className="text-white">Buscador de colaboradores</h1>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" value={buscar} onChange={(event) => setBuscar(event.target.value)} />
                    </form>
                </div>
            </nav>


            <Form onSubmit={registrar}>
                <Group className="mb-3" controlId="formBasicNombre" >
                    <Label>Nombre del colaborador </Label>
                    <Control type="text" placeholder="Ingresa el colaborador" value={newName} onChange={(e) => cambiarInput(e)} />
                </Group>

                <Group className="mb-3" controlId="formBasicEmail">
                    <Label>Email del colaborador </Label>
                    <Control type="text" placeholder="Ingresa el Email" value={newEmail} onChange={(e) => cambiarInputEmail(e)} />
                </Group>

                <Button variant="primary" type="submit" > Agregar colaborador </Button>
            </Form>
            <table>
                <Table striped bordered hover size="md">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Colaborador</th>
                            <th>Correo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listadoPersonas.map((colaboradores, index) => {
                            let nombre = colaboradores.nombre.toLowerCase()
                            if (buscar === '' || nombre.includes(buscar.toLowerCase())) {
                                return (
                                    <tr key={index}>
                                        <td> {index + 1} </td>
                                        <td> {colaboradores.nombre}</td>
                                        <td> {colaboradores.correo} </td>
                                    </tr>)
                            }
                        })}
                    </tbody>
                </Table>
            </table>
        </>
    )
}

export default Listado;