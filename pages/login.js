import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Login.module.css'
import React, {useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import {Cookies} from 'react-cookie'

export default () => {


    const [values, setValues] = useState({email: '', password:  ''})
    const cookies = new Cookies();

    let [token, setToken] = useState(cookies.get('token') || null)

    const handleImputChange = e => {
        const {name, value } = e.target
        setValues({...values, [name]:value})
        console.log(name, value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        
        axios.post(`http://127.0.0.1:3333/auths`, values)
        .then(
            (res) => {
                const tokenData = res.data.token
                cookies.set('token', tokenData)
                alert('usuario autorizado')
            }
        )
        .catch(err => alert(`nao conseguiu fazer login`))
            
    }
    

    return(
        <>
            <Header/>
                <main id={styles["login"]} className={styles["page"]}>
                    <div className={styles["page-header"]}>
                        <header>
                            <h1>Login</h1>
                        </header>
                        <hr className="italy" />
                    </div>
                    
                    <section>
                        <div className={styles["image"]}></div>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <div className={styles["fields"]}>
                                    <div className={styles["field"]}>
                                        <input type="email" name="email" id="email" onChange={handleImputChange} onFocus={handleImputChange}/>
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                    <div className={styles["field"]}>
                                        <input type="password" name="password" id="password" onChange={handleImputChange} onFocus={handleImputChange} />
                                        <label htmlFor="password">Senha</label>
                                    </div>
                                </div>
                                <div className={styles["actions"]}>
                                    <button type="submit">Entrar</button>
                                    <a href="#">Esqueci a senha</a>
                                </div>
                            </div>
                            <p>Você ainda não tem conta, 
                                <Link href="/register">
                                    <a title="Cadastre-se">clique aqui</a> 
                                </Link>
                            e cadastre-se.</p>
                        </form>
                    </section>
                </main>
            <Footer/>
        </>
    )
}