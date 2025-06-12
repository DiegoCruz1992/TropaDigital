export default function Button({ children, className, icone, bgColor, textoColor, ...props }) {
  return (
    <button
      className={`flex items-center justify-center px-4 py-2 rounded-[100px] cursor-pointer ${className}`}
      style={{ backgroundColor: bgColor ? bgColor : '#CC6237', color: textoColor ? textoColor : '#FFF' }}
      {...props}
    >
      {icone && <img src={icone} alt="Icon" className="inline-block mr-2" />}
      {children}
    </button>
  );
}