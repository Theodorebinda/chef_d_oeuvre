import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ContextGlobal = createContext();

const ContextData = ({ children }) => {
  const [dataMentoree, setDataMentoree] = useState([]);
  const [dataMentor, setDataMentor] = useState([]);
  const [dataPartenaire, setDataPartenaire] = useState([]);
  const [dataSessions, setDataSessions] = useState([]);
  const [dataReunion, setDataReunion] = useState([]);

  console.log({ dataMentoree });

  useEffect(() => {
    axios
      .get("https://capstone2-c2-theodorebinda.onrender.com/users")
      .then((response) => {
        setDataMentoree(response.data);
        console.log(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3001/users").then((response) => {
      setDataMentor(response.data);
      console.log(response.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get("https://capstone2-c2-theodorebinda.onrender.com/users")
      .then((response) => {
        setDataPartenaire(response.data);
        console.log(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://capstone2-c2-theodorebinda.onrender.com/sessions")
      .then((response) => {
        setDataSessions(response.data);
        console.log(response.data);
      });
  }, []);
  useEffect(() => {
    axios
      .get("https://capstone2-c2-theodorebinda.onrender.com/reunions")
      .then((response) => {
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
