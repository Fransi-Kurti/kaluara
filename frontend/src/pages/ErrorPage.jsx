import MainNavigation from "../components/MainNavigation";
import Header from "../components/Header";

export default function ErrorPage() {
  return (
    <>
      <Header />
      <MainNavigation />
      <main
        style={{ textAlign: "center", color: "white", backgroundColor: "red" }}
      >
        <h1>An error occurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
}
