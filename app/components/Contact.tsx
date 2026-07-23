import { Mail } from "lucide-react";

export function Contact() {
    return (
        <>
            {/* CONTACT SECTION */}
            <section id="contact" className="scroll-mt-24 pb-40">
                <div className="flex justify-center mb-6">
                    <span className="px-4 py-1 bg-[#DEFCE0] text-green-800 border border-green-800 rounded-full font-semibold text-sm">
                        Contato
                    </span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Entre em contato</h2>
                <div className="">
                    <article className="items-center p-6 border-green-800 rounded-lg flex flex-col h-80 sm:h-full md:h-80 bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                        <p className="text-zinc-400 mb-2 flex-grow">Se você deseja entrar em contato comigo, sinta-se à vontade para me enviar um e-mail, me adicionar no LinkedIn ou GitHub.<br></br> Confira também meu currículo logo abaixo!</p>
                        <a href="mailto:crisfer_012@outlook.com" target="_blank" rel="noopener noreferrer" className="p-3 text-black hover:text-green-600 font-semibold text-sm">
                            <div className="flex items-center gap-2">
                                <Mail className="w-6 h-6" />
                                <span>crisfer_012@outlook.com</span>
                            </div>
                        </a>

                        <a href="../Douglas_Cristian_Curriculo_pt-BR.pdf" target="_blank" rel="noopener noreferrer" className="p-3 flex gap-2 items-center text-black hover:text-green-600 font-semibold text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                                <line x1="10" y1="9" x2="8" y2="9"/>
                            </svg>
                            <span>Meu Currículo</span>
                        </a>
                    </article>

                    {/*<article className="p-6 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                <form action="">
                    <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-semibold mb-2">Nome</label>
                    <input type="text" id="name" name="name" className="w-full p-2 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800" required />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-semibold mb-2">E-mail</label>
                    <input type="email" id="email" name="email" className="w-full p-2 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800" required />
                    </div>
                    <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-semibold mb-2">Mensagem</label>
                    <textarea id="message" name="message" rows={4} className="w-full p-2 border border-green-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-800" required></textarea>
                    </div>
                    <button type="submit" className="p-3 bg-green-800 text-white hover:bg-green-600 font-semibold text-sm rounded-full">
                    Enviar Mensagem
                    </button>
                </form>
                </article>*/}
                </div>
            </section>
        </>
    );
}