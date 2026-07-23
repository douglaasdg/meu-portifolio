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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                    <article className="items-center p-6 border-green-800 rounded-lg flex flex-col h-50 sm:h-full md:h-80 bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                        <p className="text-zinc-400 mb-4 flex-grow">Se você deseja entrar em contato comigo, sinta-se à vontade para me enviar um e-mail ou me adicionar no LinkedIn ou GitHub.</p>
                        <a href="mailto:crisfer_012@outlook.com" target="_blank" rel="noopener noreferrer" className="p-3 text-black hover:text-green-600 font-semibold text-sm">
                            <div className="flex items-center gap-2">
                                <Mail className="w-6 h-6" />
                                <span>crisfer_012@outlook.com</span>
                            </div>
                        </a>

                        <a href="https://github.com/douglaasdg" target="_blank" rel="noopener noreferrer" className="p-3 flex gap-2 items-center text-black hover:text-green-600 font-semibold text-sm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 flex-shrink-0"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                />
                            </svg>
                            <span>@douglaasdg</span>
                        </a>
                    </article>

                    <article className="p-6 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
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
                </article>
                </div>
            </section>
        </>
    );
}