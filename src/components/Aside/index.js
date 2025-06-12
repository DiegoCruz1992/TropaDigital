import { NavLink } from 'react-router-dom';
import Logo from '../../assets/img/FrameLogo.png';
import icon from '../../assets/img/iconSidebar.svg';
import icon2 from '../../assets/img/iconSidebar2.svg';
import icon3 from '../../assets/img/iconSidebar3.svg';
import icon4 from '../../assets/img/iconSidebar4.svg';
import icon5 from '../../assets/img/iconSidebar5.svg';
import icon6 from '../../assets/img/iconSidebar6.svg';
import Avatar from '../Avatar';

const menuItems = [
  { to: '/', label: 'Dashboard', icon: icon },
  { to: '/eventos', label: 'Eventos', icon: icon3 },
  { to: '/equipes', label: 'Equipes', icon: icon4 },
  { to: '/inscricoes', label: 'Inscrições', icon: icon2 },
];

const opcoes = [
  { to: '/painel-usuario', label: 'Alterar dados', icon: icon5 },
]

export default function Aside({ setIsLoggedIn }) {
    return (
      <aside className="w-[210px] bg-white flex flex-col justify-between h-screen pt-5 px-3.5">
        <div>
          <div className="flex items-center justify-center mb-8">
            <img src={Logo} alt="Logo" className="w-full h-auto" />
          </div>
          <nav className="text-white">
            <span className="text-[#A3A3A3] font-bold text-[10px] block ml-2.5">MENU</span>
            <ul>
              {menuItems.map(({ to, label, icon }) => (
                <li key={to} className="mb-1">
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `p-2.5 text-[#252525] w-full flex rounded-[5px] gap-2 ${
                        isActive
                          ? 'text-[#FFF] bg-[#CC6237] font-bold'
                          : 'text-[#252525] font-semibold hover:bg-[#F6F6F6] hover:duration-300'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={icon}
                          alt={`Icon for ${label}`}
                          className="inline-block"
                          style={{
                            filter: isActive ? 'invert(1) brightness(2)' : 'none',
                          }}
                        />
                        <span>{label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className='border-t border-[#00000015] py-8'>
          <Avatar />
          <nav className='mt-2'>
            <ul>
              {opcoes.map(({ to, label, icon }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `p-2.5 text-[#252525] w-full flex rounded-[5px] gap-2 ${
                        isActive
                          ? 'text-[#FFF] bg-[#CC6237] font-bold'
                          : 'text-[#252525] font-semibold hover:bg-[#F6F6F6] hover:duration-300'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <img
                          src={icon}
                          alt={`Icon for ${label}`}
                          className="inline-block"
                          style={{
                            filter: isActive ? 'invert(1) brightness(2)' : 'none',
                          }}
                        />
                        <span>{label}</span>
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <button onClick={() => setIsLoggedIn(false)} className='flex items-center gap-2 text-[#252525] font-semibold hover:bg-[#F6F6F6] hover:duration-300 p-2.5 w-full rounded-[5px]'>
            <img src={icon6} alt="Sair" className="inline-block" />
            <span>Sair</span>
          </button>
        </div>
      </aside>
    );
}