import MainNavigation from "../components/MainNavigation";
import Header from "../components/Header";

export default function ErrorPage() {
    return <>
    <Header />
    <MainNavigation />
    <main style={{textAlign: 'center'}}>
        <h1>Am error occured!</h1>
        <p>Could not find this page!</p>
    </main>
    </>
}