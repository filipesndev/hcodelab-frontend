import Layout from '../../components/admin/Layout'
import HeaderTitle from '../../components/admin/HeaderTitle'

export default function Contacts() {

    return (
        <Layout>

            <HeaderTitle text="Contatos" />

        </Layout>
    )

}

Contacts.getInitialProps = async (ctx) => {
    await handleAuthSSR(ctx)

    return {}
}