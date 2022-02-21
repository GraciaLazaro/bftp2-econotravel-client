import FormReservation from "./FormReservation";


function Enquires() {

    return (
        <main className="container">
            <div className="page-header">
                <div className="page-name">
                    <h1 className="h1">Contacta y Reserva</h1>
                </div>
            </div>
            <div className="row">
                <section className="col-6">

                    <div className="page-content">
                        <ul className="d-flex flex-column w-50">
                        <li>Teléfono: 93 123 45 67</li>
                        <li>Correo: info@econotravel.com</li>
                        <li>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</li>
                        </ul>
                    </div>
                </section>
                <section className="col-6">
                    <FormReservation/>
                </section>
            </div>
        </main>
    )
}

export default Enquires