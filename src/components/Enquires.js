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
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe width="600" height="500" id="gmap_canvas"
                                    src="https://maps.google.com/maps?q=Carrer%20dels%20Viatgers,%2028,%20Barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
                            <a href="https://123movies-to.org"/><br/>
                        </div>
                    </div>
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