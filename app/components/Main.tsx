import { Contact } from "./Contact";

export function Main() {
    return (
        <>
            {/* CONTEÚDO PRINCIPAL */}
            < main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-16 md:space-y-24" >

                {/* HERO SECTION */}
                < section id="hero" className="py-12 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10" >
                    {/* TEXTO */}
                    < div id="hero-content" className="flex flex-col items-center md:items-start text-center md:text-left flex-1" >
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                            Olá, eu sou o Douglas Cristian!
                        </h1>
                        <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4">
                            Desenvolvedor Full Stack
                        </h3>
                        <p className="text-base md:text-lg text-zinc-500 max-w-lg leading-relaxed">
                            Estudante de Análise e Desenvolvimento de Sistemas na FIAP, com experiência real em desenvolvimento web, back-end com Java/Spring Boot, front-end com React e Next.js, além de habilidades em banco de dados SQL e NoSQL. Apaixonado por tecnologia e sempre em busca de novos desafios para aprimorar minhas habilidades.
                        </p>
                        <div id="hero-links" className="mt-8 flex flex-wrap justify-center md:justify-start gap-4 w-full">
                            <a href="#skills" className="bg-white border-2 border-green-800 text-green-800 px-6 py-3 rounded-lg hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 text-center w-full sm:w-auto">
                                Habilidades
                            </a>
                            <a href="#projects" className="bg-white border-2 border-green-800 text-green-800 px-6 py-3 rounded-lg hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 text-center w-full sm:w-auto">
                                Projetos
                            </a>
                            <a href="#contact" className="bg-white border-2 border-green-800 text-green-800 px-6 py-3 rounded-lg hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 text-center w-full sm:w-auto">
                                Contato
                            </a>
                        </div>
                    </div >
                    {/* IMAGEM */}
                    < div id="hero-image" className="flex justify-center items-center flex-shrink-0" >
                        <img
                            src="./foto_01001.png"
                            alt="Douglas Cristian"
                            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover shadow-lg border-8 border-zinc-100 transition duration-300 transform hover:-translate-y-1"
                        />
                    </div >
                </section >

                {/* SKILLS SECTION */}
                < section id="skills" className="scroll-mt-24" >
                    <div className="flex justify-center mb-6">
                        <span className="px-4 py-1 bg-[#DEFCE0] text-green-800 border border-green-800 rounded-full font-semibold text-sm">
                            STACK
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Habilidades</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">

                        {/* HTML5 */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                                alt="HTML5"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">HTML5</span>
                        </div>

                        {/* CSS3 */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                                alt="CSS3"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">CSS3</span>
                        </div>

                        {/* JavaScript */}
                        <div className="flex items-center justify-center gap-2 p-4 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                                alt="JavaScript"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">JavaScript</span>
                        </div>

                        {/* Node.js */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                                alt="Node.js"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Node.js</span>
                        </div>

                        {/* Bootstrap */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                                alt="Bootstrap"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Bootstrap</span>
                        </div>

                        {/* SASS */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg"
                                alt="SASS"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">SASS</span>
                        </div>

                        {/* Git */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                                alt="Git"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Git</span>
                        </div>

                        {/* React */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                                alt="React"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">React</span>
                        </div>

                        {/* Next.js */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                                alt="Next.js"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Next.js</span>
                        </div>

                        {/* Java */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg"
                                alt="Java"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Java</span>
                        </div>

                        {/* Spring Boot */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg"
                                alt="Spring Boot"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Spring Boot</span>
                        </div>

                        {/* TypeScript */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
                                alt="TypeScript"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">TypeScript</span>
                        </div>

                        {/* Oracle SQL */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg"
                                alt="Oracle SQL"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Oracle SQL</span>
                        </div>

                        {/* Linux */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg"
                                alt="Linux"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">Linux</span>
                        </div>

                        {/* GitHub */}
                        <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                            <img
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                                alt="GitHub"
                                width="32"
                                height="32"
                                className="w-8 h-8 flex-shrink-0 object-contain"
                            />
                            <span className="font-semibold text-sm sm:text-base">GitHub</span>
                        </div>

                    </div>
                </section >

                {/* PROJECTS SECTION */}
                < section id="projects" className="scroll-mt-24 pb-20" >
                    <div className="flex justify-center mb-6">
                        <span className="px-4 py-1 bg-[#DEFCE0] text-green-800 border border-green-800 rounded-full font-semibold text-sm">
                            Portfólio
                        </span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Projetos</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
                        {/* Os cards de projeto entram aqui */}
                        <article className="p-1 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                            <img src="./projeto_0.png" alt="Projeto 0" className="w-full h-auto object-cover mb-4"></img>
                            <h3 className="px-3 text-xl font-semibold mb-2 text-zinc-600">Portifólio</h3>
                            <p className="px-3 text-zinc-400 mb-4 flex-grow">Portifólio pessoal desenvolvido com Next.js e Tailwind CSS.</p>
                            <div className="px-3 flex gap-2 mb-6 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">Next.js</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">Tailwind CSS</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">JavaScript</span>
                            </div>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="p-3 text-green-800 hover:text-green-600 font-semibold text-sm">
                                Ver detalhes
                            </a>
                        </article>

                        <article className="p-1 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                            <img src="./projeto_1.png" alt="Projeto 1" className="w-full h-auto object-cover mb-4"></img>
                            <h3 className="px-3 text-xl font-semibold mb-2 text-zinc-600">O Nosso Sim</h3>
                            <p className="px-3 text-zinc-400 mb-4 flex-grow">Plataforma responsiva para eventos com frameworks modernos (HTML5, CSS3, JavaScript e Bootstrap).</p>
                            <div className="px-3 flex gap-2 mb-6 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">HTML5</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">CSS3</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">JavaScript</span>
                            </div>
                            <a href="https://ebac-projeto-3-nine.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 text-green-800 hover:text-green-600 font-semibold text-sm">
                                Ver detalhes
                            </a>
                        </article>

                        <article className="p-1 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                            <img src="./projeto_2.png" alt="Projeto 2" className="w-full h-auto object-cover mb-4"></img>
                            <h3 className="px-3 text-xl font-semibold mb-2 text-zinc-600">E-Pay</h3>
                            <p className="px-3 text-zinc-400 mb-4 flex-grow">Plataforma fintech com React e Api Rest.</p>
                            <div className="px-3 flex gap-2 mb-6 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">Java</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">Spring Boot</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">Rest</span>
                            </div>
                            <a href="https://fase-4-cap-9-fiap.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 text-green-800 hover:text-green-600 font-semibold text-sm">
                                Ver detalhes
                            </a>
                        </article>

                        <article className="p-1 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                            <img src="./projeto_3.png" alt="Projeto 3" className="w-full h-auto object-cover mb-4"></img>
                            <h3 className="px-3 text-xl font-semibold mb-2 text-zinc-600">E-Commerce</h3>
                            <p className="px-3 text-zinc-400 mb-4 flex-grow">Plataforma de vendas online com React.</p>
                            <div className="px-3 flex gap-2 mb-6 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">HTML5</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">CSS3</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">JavaScript</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">Bootstrap</span>
                            </div>
                            <a href="https://fase-4-cap-8-fiap.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 text-green-800 hover:text-green-600 font-semibold text-sm">
                                Ver detalhes
                            </a>
                        </article>

                        <article className="p-1 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                            <img src="./projeto_4.png" alt="Projeto 4" className="w-full h-auto object-cover mb-4"></img>
                            <h3 className="px-3 text-xl font-semibold mb-2 text-zinc-600">Constellation</h3>
                            <p className="px-3 text-zinc-400 mb-4 flex-grow">Plataforma responsiva com uso de Bootstrap, Cards e Modal.</p>
                            <div className="px-3 flex gap-2 mb-6 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">HTML</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">Bootstrap</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">JavaScript</span>
                            </div>
                            <a href="https://exercicio-ebac-bootstrap-chi.vercel.app" target="_blank" rel="noopener noreferrer" className="p-3 text-green-800 hover:text-green-600 font-semibold text-sm">
                                Ver detalhes
                            </a>
                        </article>

                        <article className="p-1 border-green-800 rounded-lg flex flex-col h-full bg-white hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
                            <img src="./projeto_5.png" alt="Projeto 5" className="w-full h-auto object-cover mb-4"></img>
                            <h3 className="px-3 text-xl font-semibold mb-2 text-zinc-600">112 HIGHWAY</h3>
                            <p className="px-3 text-zinc-400 mb-4 flex-grow">Plataforma responsiva com uso de (HTML, CSS, JavaScript)</p>
                            <div className="px-3 flex gap-2 mb-6 flex-wrap">
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">HTML</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">CSS</span>
                                <span className="px-3 py-1 text-xs rounded-full bg-green-800 text-white">JavaScript</span>
                            </div>
                            <a href="https://loja112highway.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-3 text-green-800 hover:text-green-600 font-semibold text-sm">
                                Ver detalhes
                            </a>
                        </article>
                    </div>
                </section >

                <Contact />
            </main >
        </>
    );
}