import Home from "./page/Home.jsx";
import Layout from "./components/Layout.jsx";
import Profil from "./page/Profil.jsx";
import("./index.css");
export default function App() {
  return (
    <Layout>
      <Home />
      <Profil />
    </Layout>
  );
}
