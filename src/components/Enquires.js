<<<<<<< HEAD
import FormReservation from "./FormReservation";
=======
>>>>>>> d7cd6828da46b7e82f062ee42f750c7d31b2b0f7

function Enquires() {

    return (
        <main className="container">
            <div className="page-header">
                <div className="page-name">
                    <h1 className="h1">Contacta</h1>
                </div>
            </div>
            <div className="page-content">
                <ul className="d-flex flex-column w-50">
                <li>Teléfono: 93 123 45 67</li>
                <li>Correo: info@econotravel.com</li>
                <li>Dirección: Carrer dels Viatgers, 28, 08001 Barcelona</li>
                </ul>
            </div>

            <FormReservation/>

        </main>
    )
}

export default Enquires