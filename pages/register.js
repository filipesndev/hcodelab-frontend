import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../components/Register.module.css'
import React, {useState} from 'react'
import Link from 'next/link'
import axios from 'axios'
import {Cookies} from 'react-cookie'

export default () => {


    const [values, setValues] = useState({name: '',email: '', password:  '', birth_at: '', level: '1', photo: 'user.png'})

    const handleImputChange = e => {
        const {name, value } = e.target
        setValues({...values, [name]:value})
        console.log(name, value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        
        axios.post(`http://127.0.0.1:3333/users`, values).then(res => {
            alert(`deucerto!`)
            window.location.href=("/login")
        }).catch( err => console.log('deu ruim'))
    }

    return(
        <>
            <Header/>
                <main id="register" class="page">
                    <div class="page-header">
                        <header>
                            <h1>Cadastro</h1>
                        </header>
                        <hr class="italy" />
                    </div>
                    <section>
                        <div class="image"></div>
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <div class={styles["fields"]}>
                                    <div class={styles["field"]}>
                                        <input type="text" name="name" id="name" onChange={handleImputChange} onFocus={handleImputChange} />
                                        <label htmlFor="name">Nome Completo</label>
                                    </div>
                                    <div class={styles["field"]}>
                                        <input type="email" name="email" id="email" onChange={handleImputChange} onFocus={handleImputChange} />
                                        <label htmlFor="email">E-mail</label>
                                    </div>
                                </div>
                                <div class={styles["fields"]}>
                                    <div class={styles["field"]}>
                                        <input type="date" name="birtha_at" id="birth_at" onChange={handleImputChange} onFocus={handleImputChange} />
                                        <label htmlFor="birth_at">Data de Nascimento</label>
                                    </div>
                                    <div class={styles["field"]}>
                                        <input type="password" name="password" id="password" onChange={handleImputChange} onFocus={handleImputChange}/>
                                        <label htmlFor="password">Senha</label>
                                    </div>
                                </div>
                                <button type="submit">Entrar</button>
                            </div>
                            <p>Se você já possui uma conta, 
                                
                                <Link href="/login">
                                    <a title="Cadastre-se">clique aqui</a> 
                                </Link>
                                
                             para fazer o login.</p>
                        </form>
                    </section>
                </main>
            <Footer/>
        </>
    )
}