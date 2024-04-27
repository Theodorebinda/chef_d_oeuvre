import { createContext, useState } from "react";
import Data from "../data/initial-data.json";

export const ContextGlobal = createContext();

const ContextData = ({ children }) => {
  const [dataMentoree, setDataMentoree] = useState(Data.mentoree);
  const [dataMentor, setDataMentor] = useState(Data.mentor);
  const [dataPartenaire, setDataPartenaire] = useState(Data.partenaire);
  const [dataSessions, setDataSessions] = useState(Data.sessions);
  const [dataReunion, setDataReunion] = useState(Data.reunions);

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
