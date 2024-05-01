import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextGlobal = createContext();

const ContextData = ({ children }) => {
  const [dataMentoree, setDataMentoree] = useState([]);
  const [dataMentor, setDataMentor] = useState([]);
  const [dataPartenaire, setDataPartenaire] = useState([]);
  const [dataSessions, setDataSessions] = useState([]);
  const [dataReunion, setDataReunion] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/mentoree").then((response) => {
      setDataMentoree(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/mentor").then((response) => {
      setDataMentor(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/partenaire").then((response) => {
      setDataPartenaire(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/sessions").then((response) => {
      setDataSessions(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios.get("http://localhost:3000/reunions").then((response) => {
      setDataReunion(response.data);
      console.log(response.data);
    });
  }, []);
  return (
    <ContextGlobal.Provider
      value={{
        dataMentoree,
        dataMentor,
        dataPartenaire,
        dataSessions,
        dataReunion,
        setDataReunion,
      }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextData;
