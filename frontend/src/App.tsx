import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

interface AppProps {
  children: ReactNode[] | ReactNode;
}

export const App = ({ children }: AppProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
