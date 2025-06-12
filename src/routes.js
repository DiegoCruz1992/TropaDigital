import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Layout from './Layout';
import Home from './pages/Home';
import Eventos from './pages/Eventos';
import Equipes from './pages/Equipes';
import Inscricoes from './pages/Incricoes';
import Painel from './pages/Painel';

export default function AppRoutes({ isLoggedIn, setIsLoggedIn }) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isLoggedIn ? <Navigate to="/" replace /> : <Login setIsLoggedIn={setIsLoggedIn} />
          }
        />

        {isLoggedIn && (
          <Route path="/" element={<Layout setIsLoggedIn={setIsLoggedIn} />}>
            <Route index element={<Home />} />
            <Route path="eventos" element={<Eventos />} />
            <Route path="equipes" element={<Equipes />} />
            <Route path="inscricoes" element={<Inscricoes />} />
            <Route path="painel-usuario" element={<Painel />} />
          </Route>
        )}

        <Route path="*" element={<Navigate to="/login" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
}
