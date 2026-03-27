import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={heroBg}
        alt="Mulher sorrindo em ambiente aconchegante de casa"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Left-to-right gradient for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 35%, rgba(0,0,0,0) 65%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full px-20 md:px-24 lg:px-28 flex items-center justify-start">
        <div className="max-w-[500px]">
          <h1
            className="font-bold leading-[1.1] mb-6 text-5xl text-secondary-foreground mx-[72px]"
            style={{ fontSize: "clamp(30px, 4.5vw, 56px)" }}
          >
            Os achados pra casa que fazem sentido, num só lugar
          </h1>

          <p className="text-muted-foreground text-lg leading-[1.5] mb-8 max-w-[460px] mx-[72px]">
            Você não precisa perder tempo procurando. A gente já filtrou o que
            realmente compensa, só coisa útil, prática e que faz diferença no
            dia a dia. Tá tudo no grupo.
          </p>

          <a
            href="https://chat.whatsapp.com/SEU_LINK_AQUI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-accent text-accent-foreground font-semibold text-[17px] rounded-lg py-3.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,214,0,0.3)] active:scale-[0.97] px-[28px] mx-[72px]"
          >
            ENTRAR NO GRUPO
          </a>

          <p className="text-muted-foreground text-sm mt-3 opacity-70 mx-[72px]">
            Acesso direto pelo WhatsApp
          </p>
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 768px) {
          section > div:nth-child(2) {
            background: rgba(0,0,0,0.55) !important;
          }
          section > div:nth-child(3) {
            background: linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 100%) !important;
          }
          section > div:nth-child(4) {
            padding-left: 1.5rem !important;
            padding-right: 1.5rem !important;
            align-items: flex-end !important;
            padding-bottom: 3rem !important;
          }
          section > div:nth-child(4) > div {
            max-width: 100% !important;
          }
          section > div:nth-child(4) a {
            display: block !important;
            text-align: center;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Index;
