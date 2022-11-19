import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  return (
    <div className="App">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container px-lg-5">
                <a className="navbar-brand" href="#!">InstaYA</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            </div>
        </nav>

        <header className="py-5">
            <div className="container px-lg-5">
                <div className="p-4 p-lg-5 bg-light rounded-3 text-center">
                    <div className="m-4 m-lg-5">
                        <h1 className="display-5 fw-bold">Gestiona tus pedidos</h1>
                        <p className="fs-4">Solicita el envío de un paquete a un destino especificado, de manera fácil y rápida, sin moverte de tu hogar. Nosotros nos encargaremos del resto</p>
                    </div>
                </div>
            </div>
        </header>

        {/* <!-- Page Content--> */}
        <section className="pt-4">
            <div className="container px-lg-5">
                {/* <!-- Page Features--> */}
                <div className="row gx-lg-5">
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-collection"></i></div>
                                <h2 className="fs-4 fw-bold">Solicitar una nueva entrega</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-xxl-4 mb-5">
                        <div className="card bg-light border-0 h-100">
                            <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                <div className="feature bg-primary bg-gradient text-white rounded-3 mb-4 mt-n4"><i className="bi bi-cloud-download"></i></div>
                                <h2 className="fs-4 fw-bold">Ver mis entregas</h2>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        {/* <!-- Footer--> */}
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Carlos David Pardo Ortiz. Todos los derechos reservados
</p></div>
        </footer>

    </div>
  )
}

export default App
