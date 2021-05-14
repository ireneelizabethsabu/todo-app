import React,{createContext, useContext,useState} from 'react';

const SelectedProjectContext = createContext();
const SelectedProjectProvider = ({children}) => {
    const [selectedProjects, setSelectedProjects] = useState('HOME');
    return (
        <SelectedProjectContext.Provider value={{selectedProjects, setSelectedProjects}}>
            {children}
        </SelectedProjectContext.Provider>
    );
};

const useSelectedProjectsValue = () => useContext(SelectedProjectContext);

export {SelectedProjectProvider,SelectedProjectContext,useSelectedProjectsValue}