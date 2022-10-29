import React, {
  useContext,
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

interface IExpertContext {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>
}

const ExpertContext = createContext<IExpertContext>({
  username: '',
  setUsername: () => {},
});

const ExpertContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [username, setUsername] = useState('');

  return (
    <ExpertContext.Provider
      value={{
        username,
        setUsername,
      }}
    >
      {children}
    </ExpertContext.Provider>
  );
};

export default ExpertContextProvider;

export const useExpertContext = () => useContext(ExpertContext) as IExpertContext