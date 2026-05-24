# JEANDERSON SILVA
**Full-Stack Engineer | React, Node.js, Python**  
📍 Luís Eduardo Magalhães, BA, Brasil | 📞 +55 (75) 99706-7931  
✉️ silvajeanderson165@gmail.com | 🔗 [jeanderson.dev](https://jeanderson.dev) | 💻 [GitHub](https://github.com/jeanderson-silva8) | 👔 [LinkedIn](https://www.linkedin.com/in/jeanderson-silva-rodrigues821)

---

## 🎯 PERFIL PROFISSIONAL
Desenvolvedor Full Stack obstinado por **performance extrema, segurança de dados por design e interfaces fluidas**. Especialista em construir plataformas SaaS prontas para o mundo real, otimizando da modelagem do banco de dados até a suavidade do pixel renderizado. Criador do **Protocolo de Segurança**, um método próprio de auditoria de código que blinda aplicações contra vulnerabilidades críticas.

---

## 🛠️ SKILLS TÉCNICAS
*   **Linguagens & Contratos:** JavaScript (ES6+), TypeScript, Python, HTML5, CSS3, SQL, GraphQL, tRPC.
*   **Frontend:** React (v19/18), Next.js, Vite, Tailwind CSS, Framer Motion, GSAP, Lenis (Smooth Scroll), WebGL (Three.js / React Three Fiber, GLSL Shaders).
*   **Backend & APIs:** Node.js (Express, Hono), Python (Django), REST APIs, Server-Sent Events (SSE), Web Push API.
*   **Bancos de Dados:** PostgreSQL (SQL Avançado, índices complexos), MongoDB (Mongoose, modelagem NoSQL).
*   **Infraestrutura, DevOps & Segurança:** Docker, docker-compose, GitHub Actions (CI/CD), Vercel Serverless & Edge Functions, Linux CLI, Nginx, JWT (Cookie HttpOnly, Refresh Tokens), Criptografia (bcrypt), Zod (Validação Dupla).

---

## 💼 EXPERIÊNCIA PROFISSIONAL / PROJETOS DE ENGENHARIA

### **Desenvolvedor Full Stack Independente** | *Projetos de Produção e SaaS*  
*Janeiro de 2023 – Presente*

Desenvolvimento autônomo de softwares prontos para o mundo real, focados em resolver gargalos de negócios de forma escalável e com segurança corporativa de ponta a ponta.

#### **Case 1: BrieflyAI — SaaS de Resumos com IA em Tempo Real**
*   **Problema:** Alta latência de APIs tradicionais de IA deixando a interface em branco por longos segundos e frustrando o usuário.
*   **Ação:** Desenvolvi um pipeline de streaming reativo usando **Server-Sent Events (SSE)** em HTTP nativo e migrei a inferência de LLM para **Groq LPU** (LLaMA 3).
*   **Resultado:** Reduzi a latência inicial da resposta para **menos de 1 segundo**, entregando tokens de resumos de reuniões em tempo real a uma velocidade de **500+ tokens/segundo**.
*   **Repositório:** [BrieflyAI GitHub](https://github.com/jeanderson-silva8/BrieflyAI-) | **Deploy:** [BrieflyAI Live](https://briefly-ai-nine.vercel.app)

#### **Case 2: Lumina Analytics — Motor Analítico Comercial de Alta Performance**
*   **Problema:** Painéis comerciais clássicos travavam no navegador ao cruzar e agrupar históricos de 3 anos de dados transacionais complexos.
*   **Ação:** Substituí o tráfego REST por consultas cirúrgicas via **GraphQL** (reduzindo over-fetching) e contornei as limitações de ORM escrevendo consultas **SQL brutas com índices compostos** no Postgres.
*   **Resultado:** Agreguei milhões de linhas respondendo no dashboard em **menos de 2 segundos** e reduzi em **70%** o tráfego total de dados de rede.
*   **Repositório:** [Lumina GitHub](https://github.com/jeanderson-silva8/Lumina-Booking-SaaS) | **Deploy:** [Lumina Live](https://marketing-site-black-pi.vercel.app)

#### **Case 3: FlowSnyker — Kanban de Colaboração em Tempo Real Multitenant**
*   **Problema:** Conflitos de render no drag & drop em dispositivos móveis e riscos de invasão XSS na sessão dos usuários.
*   **Ação:** Implementei o **@dnd-kit** com física mobile nativa, isolei o re-render de colunas e blindei a autenticação usando **tokens JWT em cookies HttpOnly** com rotação de refresh tokens.
*   **Resultado:** Garanti **60 FPS constantes** em navegadores móveis e eliminei por completo vulnerabilidades de roubo de sessão (XSS) e vazamento de dados multitenant.
*   **Repositório:** [FlowSnyker GitHub](https://github.com/jeanderson-silva8/FlowSnyker) | **Deploy:** [FlowSnyker Live](https://flow-snyker.vercel.app/login)

#### **Case 4: Nord Nails Studio — Landing Page de Alta Conversão de Alta Fidelidade**
*   **Problema:** Portfólios e sites institucionais genéricos e lentos que perdiam potenciais clientes de alto valor no celular devido à demora no carregamento.
*   **Ação:** Criei uma landing page focada em conversão e agendamentos mobile-first, otimizando assets com **compressão WebP**, aplicando **loading="lazy"** e transições nativas CSS aceleradas por GPU.
*   **Resultado:** Consegui **nota 100 de performance no Google PageSpeed** (Lighthouse) e carregamento inicial em redes móveis (4G) abaixo de **1 segundo**.
*   **Repositório:** [Nord Nails GitHub](https://github.com/jeanderson-silva8/nord-nails) | **Deploy:** [Nord Nails Live](https://nord-nails.vercel.app)

#### **Case 5: TrendScope — Buscador Serverless Ultraveloz**
*   **Problema:** Cold starts lentos no Express.js em funções serverless elevavam os custos operacionais e aumentavam a latência percebida pelo usuário no primeiro clique.
*   **Ação:** Migrei a API Express para o framework leve **Hono**, configurando deploy elástico em **Vercel Serverless & Edge**, e adotei **tRPC com Zod** para garantir contratos estritos de tipo ponta a ponta.
*   **Resultado:** Reduzi o cold start do backend em **90%** (caindo de **800ms para 80ms**) e zerei completamente bugs de divergência de tipos no deploy de produção.
*   **Repositório:** [TrendScope GitHub](https://github.com/jeanderson-silva8/TrendScope) | **Deploy:** [TrendScope Live](https://trend-scope.vercel.app)

---

## 🔒 METODOLOGIAS & INOVAÇÃO DE SEGURANÇA

### **Autor do "Protocolo de Segurança" — Método de Auditoria de Código**  
*Desenvolvido em 2025*  
*   **Contexto:** Criei de forma independente um framework prático e replicável focado em auditar a segurança de códigos e mitigar vulnerabilidades ativamente antes da fase de produção.
*   **Ação:** Mapeei vulnerabilidades críticas do OWASP Top 10 e criei mecanismos automatizados e manuais para mitigar brechas de SQL Injection, Cross-Site Scripting (XSS), vazamento de segredos (env vars) no CI/CD e falhas de validação de payload.
*   **Resultado:** Redução a zero de brechas de segurança nos deploys full stack executados e um corte de **40%** no overhead de revisões de segurança manuais.
*   **Repositório:** [Protocolo de Segurança GitHub](https://github.com/jeanderson-silva8/protocolo-de-seguranca)

---

## 🎓 EDUCAÇÃO & FORMAÇÃO
*   **Devclub — Full Stack Pro** | *Formação Profissional em Desenvolvimento Full Stack (Rodolfo Mori)*
*   **MasterClass Antigravity + Claude Code** | *Engenharia de Software de Alta Performance com Inteligência Artificial e Melhores Práticas Profissionais*
