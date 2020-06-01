//admin index.js
import Layout from '../../components/admin/Layout'
import HeaderTitle from '../../components/admin/HeaderTitle'
import React from 'react'
import axios from 'axios'
import {Cookies} from 'react-cookie'
import {handleAuthSSR} from '../../utils/auth'

export default function Index() {

    const cookies = new Cookies()
    const serverUrl = 'http://127.0.0.1:3333'

    return (
        <Layout>

            <HeaderTitle text="bem vindo" />

        </Layout>
    )

}

Index.getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx)

    return {}
}