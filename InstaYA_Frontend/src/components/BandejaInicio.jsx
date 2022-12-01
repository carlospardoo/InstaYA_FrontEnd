import React from 'react'
import { Link } from 'react-router-dom'

export const BandejaInicio = () => {
  return (
    <>
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
                    
                    <div className="col-lg-6 col-xxl-4 mb-5" role="button" >
                        <Link to={'/nueva_entrega'} style={{textDecoration: 'none', color: "inherit" }} >
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"><img src="/src/assets/InstaYA_Logo_Nueva_Entrega.png" alt="Nueva Entrega" /></div>
                                    <h2 className="fs-4 fw-bold">Solicitar una nueva entrega</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                    <div className="col-lg-6 col-xxl-4 mb-5" role="button" >
                        <Link to={'/mis_entregas'} style={{ textDecoration: 'none', color: 'inherit' }} >
                            <div className="card bg-light border-0 h-100">
                                <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
                                    <div className="feature bg-danger bg-gradient text-white rounded-3 mb-4 mt-n4"><img src="/src/assets/InstaYA_Logo_Consulta_Entrega.png" alt="Consula Entregas"  /></div>
                                    <h2 className="fs-4 fw-bold">Ver mis entregas</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}
