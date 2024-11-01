export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-10 px-12 py-5 flex justify-between items-center text-xs bg-bgPrimary text-whiteColor">
        <h1 className="font-bold">Logo</h1>
        <nav className="flex items-center font-bold gap-3">
          <ul className="flex items-center gap-10">
            <li className="cursor-pointer">
              <a href="#">Início</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Óculos</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Benefícios</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Contato</a>
            </li>
          </ul>
          <button className="bg-black text-whiteColor px-4 py-2 rounded-md" aria-label="Abrir carrinho">
            Carrinho
          </button>
        </nav>
      </header>
    </>
  );
}
