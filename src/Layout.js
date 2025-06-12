import { Outlet } from 'react-router-dom';
import Aside from './components/Aside';

export default function Layout({ setIsLoggedIn }) {
  return (
    <div className="flex min-h-screen">
      <Aside setIsLoggedIn={setIsLoggedIn} />
      <main className="flex-1 p-6 bg-gray-100">
        <div className='flex items-center mb-3 gap-1'>
          <h4 className="text-[#10101060] font-medium">Bem vindo de volta,</h4>
          <p className='text-[#101010] font-medium'>Diego Mauricio</p>
        </div>
        <Outlet />
      </main>
    </div>
  );
}
