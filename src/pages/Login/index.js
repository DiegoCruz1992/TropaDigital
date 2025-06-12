import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Logo from '../../assets/img/FrameLogo.png';
import Olho from '../../assets/img/Frame.svg';
import Monitorando from '../../assets/img/monitoring.png';
import Button from '../../components/Button';
export default function Login({ setIsLoggedIn }){

    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleLogin = () => {
        setIsLoggedIn(true);
        navigate('/');
    };

    const handleTogglePassword = (e) => {
        e.preventDefault();
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="flex md:items-center justify-center min-h-screen bg-[#F9FBFF]">
            <div className="flex flex-col md:flex-row gap-10 bg-white md:p-2.5 shadow-md w-full md:w-[750px] h-auto md:h-[500px] md:rounded-[20px]">
                <div className='w-full md:w-2/4 md:pt-10 px-2.5 order-2 md:order-1'>
                    <img src={Logo} alt="Logo" className="w-[160px] h-[25px] mb-9" />
                    <h2 className="text-2xl font-bold text-[#CC6237]">Bem-vindo de volta</h2>
                    <p className="text-[#2A4D8E] opacity-50 mb-9">Entre com sua conta para acessar o painel.</p>
                    <form>
                        <div className="mb-5">
                            <label className="block font-semibold mb-1.5 text-[#CC6237]" htmlFor="email">Email</label>
                            <input type="email" id="email" className="w-full h-10 py-2.5 px-5 bg-[#F6F6F6] rounded-[100px]" placeholder="Digite seu email" />
                        </div>
                        <div className="mb-5">
                            <label className="block font-semibold mb-1.5 text-[#CC6237]" htmlFor="password">Senha</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="w-full h-10 py-2.5 px-5 bg-[#F6F6F6] rounded-[100px] pr-10"
                                    placeholder="Digite sua senha"
                                />
                                <button
                                    type="button"
                                    onClick={handleTogglePassword}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    tabIndex={-1}
                                >
                                    <img src={Olho} alt="Mostrar senha" className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                        <Button 
                            className="w-full hover:!bg-[#B85A2F] !transition-colors !duration-300"
                            onClick={handleLogin}
                        >Entrar</Button>
                    </form>
                </div>
                <div className='w-full md:w-2/4 flex items-center justify-center bg-[#CC6237] md:rounded-[20px] relative order-1 md:order-2'>
                    <img src={Monitorando} alt="Monitorando" className='w-[330px] object-cover md:absolute bottom-0 left-[-38px]' />
                </div>
            </div>
        </div>
    );
}