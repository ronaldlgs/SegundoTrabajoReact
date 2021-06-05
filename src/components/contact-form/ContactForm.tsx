import { useState } from "react"

interface Contacto {
    nombre: string,
    apellidos: string,
    correo: string,
    mensaje: string
}


export default function ContactForm() {

    const [contacto, setcontacto] = useState<Contacto>({
        nombre: '',
        apellidos: '',
        correo: '',
        mensaje: ''
    });
   

    const submit = (event: any): void => {     
        event.preventDefault();
        setcontacto({
            nombre: '',
            apellidos: '',
            correo: '',
            mensaje: ''
        })
        alert(JSON.stringify(contacto));


    };

    const hanlderInput = (event: any): void => {
        setcontacto({
            ...contacto,
            [event.target.name] : event.target.value
        })
       
    };

    return (
        <section
            id="contacto">
            <div
                className="container py-5 text-center">
                <h2>Contacto</h2>
                <p
                    className="lead">
                    Formulario contacto
                </p>
            </div>
            <div
                className="container d-flex justify-content-center">
                <div
                    className="col-md-7 col-lg-8">
                    <form className="needs-validation"
                        noValidate={false}
                        onSubmit={submit}>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <label className="form-label"
                                    htmlFor="Name">
                                    Nombre
                                    </label>
                                <input className="form-control"
                                    type="text"                                    
                                    id="Name"
                                    placeholder=""
                                    value={contacto?.nombre}
                                    name="nombre"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <label className="form-label"
                                    htmlFor="lastName">
                                    Apellidos
                                    </label>
                                <input className="form-control"
                                    type="text"                                    
                                    placeholder=""
                                    value={contacto?.apellidos}
                                    name="apellidos"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-12">
                                <label className="form-label"
                                    htmlFor="email">
                                    Email
                                    </label>
                                <input className="form-control"
                                    type="email"
                                    placeholder="ejemplo@email.cl"
                                    value={contacto?.correo}
                                    name="correo"
                                    onChange={hanlderInput}
                                    required />
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>

                            <div className="col-12">
                                <label className="form-label"
                                    htmlFor="email">
                                    Mensaje
                                    </label>
                                <textarea className="form-control"
                                    rows={3} 
                                    value={contacto?.mensaje}
                                    name="mensaje"
                                    onChange={hanlderInput}
                                    required>

                                </textarea>
                                <div className="invalid-feedback">
                                    Valor requerido.
                                </div>
                            </div>


                            <button className="w-100 btn btn-secondary btn-lg"
                                type="submit">
                                Enviar
                                </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}