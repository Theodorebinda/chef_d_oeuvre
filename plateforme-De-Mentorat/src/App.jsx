import Home from "./page/Home.jsx";
import Layout from "./components/Layout.jsx";
import Profil from "./page/Profil.jsx";
import ContextData from "./components/ContexGlobal.jsx";
import("./index.css");
export default function App() {
  return (
    <Layout>
      <Home />
      <Profil />
    </Layout>
  );
}
