export default function LogoMain() {
  return (
    <div className="grid w-full justify-items-center ml-25">
      <img
        src="/logo-principal.png"
        alt="Logo"
        className="top-22 absolute ml-[-280px] w-18"
      />
      <img
        src="./imagen-logo.svg"
        alt="Logo"
        className="top-[79px] absolute w-64 mt-3 ml-20 "
      />
    </div>
  );
}
