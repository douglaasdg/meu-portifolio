export default function Portifolio() {

  return (
    <div className="min-h screen flex flex-col justify-between bg-white text-black">
      <header className="p-6 border-b border-green-800">
        <h1 className="text-3xl font-bold">Douglas Cristian</h1>
        <nav className="max-w-6x1 mx-auto flex justify-between items-center">
          <ul>
            <li>
              <a href="/" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="/sobre" className="hover:underline">
                Sobre
              </a>
            </li>
            <li>
              <a href="/contato" className="hover:underline">
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}