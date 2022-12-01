import { useState, createContext } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { FormLogin } from './components/FormLogin'
import { Registro } from './components/Registro'
import { BandejaInicio } from './components/BandejaInicio'
import { RegistroEntrega } from './components/RegistroEntrega'
import { ConsultaEntrega } from './components/ConsultaEntrega'
import { ActualizaEntrega } from './components/ActualizaEntrega'

import { UserContext } from './components/UserContext'

function App() {

    const [user, setUser] = useState('');

    const userValueContext = {user, setUser};

    const sesion = user === '' ? 'collapse hide-user-info' : 'collapse show-user-info';

    const handlerLogout = () => setUser('');

    const envio = () => {
        alert("Presionado")
    }

    return (
        <>
            {/* 

        <UserContext.Provider>
            <div className='sesion' >
                <span>{user}</span>
                <span onClick={() =>handlerLogout}>Cerrar Sesión</span>
            </div>
        </UserContext.Provider> */}

            <div className="container">
                <UserContext.Provider value={userValueContext}>
                    
    
                    <BrowserRouter>

                        <nav className="navbar navbar-expand-lg text-bg-danger">
                            <div className="container-fluid px-lg-5">
                                <a className="navbar-brand text-bg-danger" href="/">
                                    <img src="./src/assets/Logo.png" alt="InstaYA" width="35" height="35" />
                                    InstaYA
                                </a>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                                <div className={sesion} id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item m-1"><span>{user}</span></li>
                                        <li className="nav-item m-1" role={"button"} onClick={handlerLogout} >
                                            <Link to={'/'} style={{textDecoration: 'none', color: "inherit" }}>
                                                <span>Cerrar Sesión</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <Routes>

                            <Route path='/registro' element={<Registro />}>

                            </Route>

                            <Route path='/login' element={<FormLogin />}>

                                {/* <Route path='/bandeja_inicio' element={ <BandejaInicio /> }>

                                </Route> */}

                            </Route>

                            <Route path='/bandeja_inicio' element={ <BandejaInicio /> }>

                            </Route>
    
                            <Route path='/nueva_entrega' element={ <RegistroEntrega /> } >
                                
                            </Route>

                            <Route path='/mis_entregas' element={ <ConsultaEntrega /> } >

                            </Route>

                            <Route path='/cambiar_entrega' element={ <ActualizaEntrega /> } >

                            </Route>

                            <Route path='/' element={<FormLogin />}>

                            </Route>

                        </Routes>

                    </BrowserRouter>

                    {/* <!-- Footer--> */}
                    <footer className="py-5 text-bg-danger">
                        <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Carlos David Pardo Ortiz. Todos los derechos reservados </p></div>
                    </footer>

                </UserContext.Provider>

            </div>
        </>
    )
}

export default App
