import { Contact } from "./Contact";
import ScrollReveal from "./ScrollReveal";
import { ExternalLink, Sparkles } from "lucide-react";

export function Main() {
    return (
        <>
            <main className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 w-full space-y-16 md:space-y-24">

                <section id="hero" className="py-12 md:py-24 flex flex-col-reverse md:flex-row items-center justify-between gap-10">

                    <ScrollReveal delay={0.1}>
                        <div id="hero-content" className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
                            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                                Olá, eu sou o Douglas Cristian!
                            </h1>
                            <h3 className="text-xl md:text-2xl font-bold text-green-800 mb-4">
                                Desenvolvedor Full Stack
                            </h3>
                            <p className="text-base md:text-lg text-zinc-500 max-w-lg leading-relaxed">
                                Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP e venho construindo minha trajetória no desenvolvimento Full Stack. Na prática, crio aplicações web modernas unindo o poder do Java/Spring Boot no back-end com a fluidez de React e Next.js no front-end, além de estruturar dados com Oracle SQL. Estou sempre em busca de novos desafios para aprimorar minhas habilidades e gerar impacto real através da tecnologia.
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
                        </div>
                    </ScrollReveal>

                    {/* IMAGEM */}
                    <ScrollReveal delay={0.3}>
                        <div id="hero-image" className="flex justify-center items-center flex-shrink-0">
                            <div className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 overflow-hidden shadow-lg border-8 border-zinc-100 transition duration-300 transform hover:-translate-y-1">
                                <img
                                    src="./foto_01001.png"
                                    alt="Douglas Cristian"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </ScrollReveal>
                </section>

                {/* SKILLS SECTION */}
                <section id="skills" className="scroll-mt-24">
                    <ScrollReveal delay={0.1}>
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

                            {/* SASS
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
                            */}

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

                            <div className="flex items-center justify-center gap-2 p-3 sm:p-4 border border-green-800 rounded-lg text-green-800 hover:bg-green-800 hover:text-white transition duration-300 transform hover:-translate-y-1 cursor-default">
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                                    alt="Tailwind CSS"
                                    width="32"
                                    height="32"
                                    className="w-8 h-8 flex-shrink-0 object-contain"
                                />
                                <span className="font-semibold text-sm sm:text-base">Tailwind</span>
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
                    </ScrollReveal>
                </section>

                {/* PROJECTS SECTION */}
                <section id="projects" className="scroll-mt-24 pb-20">
                    <ScrollReveal delay={0.1}>
                        <div className="flex justify-center mb-6">
                            <span className="px-4 py-1 bg-[#DEFCE0] text-green-800 border border-green-800 rounded-full font-semibold text-sm">
                                Portfólio
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center">Projetos</h2>
                    </ScrollReveal>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* 1. PORTFÓLIO */}
                        <ScrollReveal delay={0.1}>
                            <article className="group bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                                <div className="relative overflow-hidden aspect-video bg-zinc-100 border-b border-zinc-100">
                                    <img 
                                        src="./projeto_0.png" 
                                        alt="Portfólio Pessoal" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-green-800 transition-colors mb-2">
                                        Portfólio Pessoal
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                                        Aplicação web responsiva criada para centralizar meus projetos e habilidades. Conta com navegação intuitiva, suporte a mobile e alta performance com Next.js, TypeScript e Tailwind CSS.
                                    </p>
                                    <div className="flex gap-2 mb-6 flex-wrap">
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-3.5 h-3.5 object-contain" />
                                            <span>Next.js</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="w-3.5 h-3.5 object-contain" />
                                            <span>TypeScript</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-3.5 h-3.5 object-contain" />
                                            <span>Tailwind CSS</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-zinc-100 mt-auto grid grid-cols-2 gap-3">
                                        <a 
                                            href="https://github.com/douglaasdg/meu-portifolio" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 font-semibold text-xs transition"
                                        >
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 object-contain" />
                                            Repositório
                                        </a>
                                        <a 
                                            href="#hero" 
                                            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-green-800 hover:bg-green-900 text-white font-semibold text-xs shadow-sm hover:shadow transition"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Acessar Site
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>

                        {/* 2. E-PAY FINTECH (FULL-STACK DESTAQUE) */}
                        <ScrollReveal delay={0.2}>
                            <article className="group bg-white rounded-2xl border-2 border-green-800/80 overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full relative">
                                <div className="relative overflow-hidden aspect-video bg-zinc-100 border-b border-zinc-100">
                                    <img 
                                        src="./projeto_2.png" 
                                        alt="E-Pay Fintech" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                    <div className="absolute top-3 right-3 bg-green-800/95 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-green-600/50">
                                        <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
                                        FULL-STACK DESTAQUE
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-green-800 transition-colors mb-2">
                                        E-Pay Fintech (Full-Stack)
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                                        Plataforma fintech corporativa ponta a ponta. Arquitetura em camadas com Spring Boot e Oracle SQL, segurança stateless via JWT, transferências Pix atômicas com garantia ACID (@Transactional), gestão de cartões virtuais com ajuste dinâmico de limites e simulador de investimentos.
                                    </p>
                                    <div className="flex gap-2 mb-6 flex-wrap">
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="w-3.5 h-3.5 object-contain" />
                                            <span>React</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" alt="Java" className="w-3.5 h-3.5 object-contain" />
                                            <span>Java</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" alt="Spring Boot" className="w-3.5 h-3.5 object-contain" />
                                            <span>Spring Boot</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" alt="Oracle SQL" className="w-3.5 h-3.5 object-contain" />
                                            <span>Oracle SQL</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="w-3.5 h-3.5 object-contain" />
                                            <span>Tailwind CSS</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-zinc-100 mt-auto grid grid-cols-2 gap-3">
                                        <a 
                                            href="https://github.com/douglaasdg/epay-fintech" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 font-semibold text-xs transition"
                                        >
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="w-4 h-4 object-contain" />
                                            Repositório
                                        </a>
                                        <a 
                                            href="https://frontend-fpctn57gs-douglas-projects-3a4e46ac.vercel.app/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-green-800 hover:bg-green-900 text-white font-semibold text-xs shadow-sm hover:shadow transition"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Acessar Site
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>

                        {/* 3. O NOSSO SIM */}
                        <ScrollReveal delay={0.1}>
                            <article className="group bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                                <div className="relative overflow-hidden aspect-video bg-zinc-100 border-b border-zinc-100">
                                    <img 
                                        src="./projeto_1.png" 
                                        alt="O Nosso Sim" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-green-800 transition-colors mb-2">
                                        O Nosso Sim
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                                        Plataforma web responsiva para convite de casamento e gestão de eventos. Desenvolvida com HTML5, CSS3, JavaScript e Bootstrap, oferece uma experiência fluida, moderna e totalmente adaptada para dispositivos móveis.
                                    </p>
                                    <div className="flex gap-2 mb-6 flex-wrap">
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-3.5 h-3.5 object-contain" />
                                            <span>HTML5</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-3.5 h-3.5 object-contain" />
                                            <span>CSS3</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-3.5 h-3.5 object-contain" />
                                            <span>Bootstrap</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-3.5 h-3.5 object-contain" />
                                            <span>JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-zinc-100 mt-auto">
                                        <a 
                                            href="https://ebac-projeto-3-nine.vercel.app/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-green-800 hover:bg-green-900 text-white font-semibold text-xs shadow-sm hover:shadow transition"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Acessar Projeto
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>

                        {/* 4. E-COMMERCE */}
                        <ScrollReveal delay={0.2}>
                            <article className="group bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                                <div className="relative overflow-hidden aspect-video bg-zinc-100 border-b border-zinc-100">
                                    <img 
                                        src="./projeto_3.png" 
                                        alt="E-Commerce" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-green-800 transition-colors mb-2">
                                        E-Commerce Resorts
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                                        Plataforma de e-commerce e reservas voltada para o setor de resorts e hospedagem. Desenvolvida com HTML5, CSS3, Bootstrap e JavaScript, conta com design responsivo.
                                    </p>
                                    <div className="flex gap-2 mb-6 flex-wrap">
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-3.5 h-3.5 object-contain" />
                                            <span>HTML5</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-3.5 h-3.5 object-contain" />
                                            <span>CSS3</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-3.5 h-3.5 object-contain" />
                                            <span>Bootstrap</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-3.5 h-3.5 object-contain" />
                                            <span>JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-zinc-100 mt-auto">
                                        <a 
                                            href="https://fase-4-cap-8-fiap.vercel.app/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-green-800 hover:bg-green-900 text-white font-semibold text-xs shadow-sm hover:shadow transition"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Acessar Projeto
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>

                        {/* 5. CONSTELLATION */}
                        <ScrollReveal delay={0.1}>
                            <article className="group bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                                <div className="relative overflow-hidden aspect-video bg-zinc-100 border-b border-zinc-100">
                                    <img 
                                        src="./projeto_4.png" 
                                        alt="Constellation" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-green-800 transition-colors mb-2">
                                        Constellation
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                                        Plataforma web para busca e reserva de passagens aéreas. Desenvolvida com HTML5, CSS3 e Bootstrap, conta com navegação fluida por carrossel de destinos, cards interativos de ofertas e modais para confirmação de voos.
                                    </p>
                                    <div className="flex gap-2 mb-6 flex-wrap">
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-3.5 h-3.5 object-contain" />
                                            <span>HTML5</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-3.5 h-3.5 object-contain" />
                                            <span>CSS3</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-3.5 h-3.5 object-contain" />
                                            <span>Bootstrap</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-3.5 h-3.5 object-contain" />
                                            <span>JavaScript</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-zinc-100 mt-auto">
                                        <a 
                                            href="https://exercicio-ebac-bootstrap-chi.vercel.app" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-green-800 hover:bg-green-900 text-white font-semibold text-xs shadow-sm hover:shadow transition"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Acessar Projeto
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>

                        {/* 6. 112 HIGHWAY */}
                        <ScrollReveal delay={0.2}>
                            <article className="group bg-white rounded-2xl border border-zinc-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
                                <div className="relative overflow-hidden aspect-video bg-zinc-100 border-b border-zinc-100">
                                    <img 
                                        src="./projeto_5.png" 
                                        alt="112 HIGHWAY" 
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-green-800 transition-colors mb-2">
                                        112 HIGHWAY
                                    </h3>
                                    <p className="text-sm text-zinc-500 leading-relaxed mb-6 flex-grow">
                                        Plataforma web para vitrine de veículos e atendimento de concessionária. Desenvolvida com HTML5 e CSS3, possui design responsivo, catálogo visual de carros e navegação simples focada na conversão de clientes.
                                    </p>
                                    <div className="flex gap-2 mb-6 flex-wrap">
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" alt="HTML5" className="w-3.5 h-3.5 object-contain" />
                                            <span>HTML5</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200/70">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" alt="CSS3" className="w-3.5 h-3.5 object-contain" />
                                            <span>CSS3</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-zinc-100 mt-auto">
                                        <a 
                                            href="https://loja112highway.vercel.app/" 
                                            target="_blank" 
                                            rel="noopener noreferrer" 
                                            className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-green-800 hover:bg-green-900 text-white font-semibold text-xs shadow-sm hover:shadow transition"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Acessar Projeto
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </ScrollReveal>
                    </div>
                </section>

                <ScrollReveal delay={0.1}>
                    <Contact />
                </ScrollReveal>
            </main>
        </>
    );
}