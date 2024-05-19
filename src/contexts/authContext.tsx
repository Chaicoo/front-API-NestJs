/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, ReactNode, useReducer, useEffect } from 'react';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
  token: string | null;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface AuthProviderProps {
  children: ReactNode;
  onLogout?: () => void;
}

const authReducer = (state: any, action: { type: any; payload?: any }) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, isAuthenticated: true, token: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, token: null };
    default:
      return state;
  }
};

export const AuthProvider = ({ children, onLogout }: AuthProviderProps) => {
  const initialState = {
    isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
    token: localStorage.getItem('userToken'),
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      dispatch({ type: 'LOGIN', payload: token });
    }
  }, []);

  const login = (token: string) => {
    localStorage.setItem('userToken', token);
    localStorage.setItem('isAuthenticated', 'true');
    dispatch({ type: 'LOGIN', payload: token });
  };

  const logout = () => {
    localStorage.removeItem('userToken');
    localStorage.setItem('isAuthenticated', 'false');
    dispatch({ type: 'LOGOUT' });
    if (onLogout) {
      onLogout();
    }
  };

  return (
    <AuthContext.Provider value={{ ...state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
