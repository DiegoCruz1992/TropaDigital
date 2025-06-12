import ImgAvatar from '../../assets/img/avatar.png';
export default function Avatar() {
    return (
        <div className="flex items-center">
            <div className="w-10 h-10 rounded-[15px] mr-2 border border-[#CC6237] overflow-hidden">
            <img
                src={ImgAvatar}
                alt="Avatar"
                className="w-full h-full rounded-[15px] object-cover border-2 border-white"
            />
            </div>
            <div className="flex flex-col justify-center">
                <span className="text-black text-sm font-medium">Diego Mauricio</span>
                <span className="text-black text-xs font-normal opacity-50">Administrador</span>
            </div>
        </div>
    );
}