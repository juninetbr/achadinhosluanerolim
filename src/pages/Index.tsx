import heroBg from "@/assets/hero-bg.png";

const Index = () => {
  return (
    <section className="w-full sm:h-screen sm:overflow-hidden flex flex-col sm:flex-row overflow-y-auto">
      {/* Mobile: image on top */}
      <div className="sm:hidden w-full flex-shrink-0 relative">
        <img
          src={heroBg}
          alt="Mulher sorrindo em ambiente aconchegante de casa"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Mobile: text below */}
      <div className="sm:hidden flex-1 flex flex-col justify-center px-6 py-6 bg-background overflow-y-auto">
        <h1
          className="text-foreground font-bold leading-[1.15] mb-4"
          style={{ fontSize: "28px" }}
        >
          Os achados para<br />
          sua casa que<br />
          <span className="text-accent">fazem sentido</span>,<br />
          em um só lugar!
        </h1>
        <p className="text-muted-foreground text-[15px] leading-[1.5] mb-6">
          Você não precisa perder tempo procurando. A gente já filtrou o que
          realmente compensa, só coisa útil, prática e que faz diferença no
          dia a dia. Tá tudo no grupo.
        </p>
        <a
          href="https://chat.whatsapp.com/SEU_LINK_AQUI"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-accent text-accent-foreground font-semibold text-[16px] rounded-lg px-7 py-3.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 active:scale-[0.97]"
        >
          ENTRAR NO GRUPO
        </a>
        <p className="text-muted-foreground text-sm mt-3 opacity-70">
          Acesso direto pelo WhatsApp
        </p>
      </div>

      {/* Desktop / Tablet layout */}
      <div className="hidden sm:flex w-full h-screen relative">
        {/* Background image - full, no crop */}
        <img
          src={heroBg}
          alt="Mulher sorrindo em ambiente aconchegante de casa"
          className="absolute inset-0 w-full h-full object-cover object-right"
        />

        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/8" />

        {/* Left gradient for text readability - ends at ~50% */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0) 50%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-[72px] lg:px-24">
          <div className="max-w-[380px] lg:max-w-[420px]">
            <h1
              className="text-foreground font-bold leading-[1.15] mb-6"
              style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
            >
              Os achados para<br />
              sua casa que<br />
              <span className="text-accent">fazem sentido</span>,<br />
              em um só lugar!
            </h1>

            <p className="text-foreground/80 text-sm lg:text-base leading-[1.5] mb-8 max-w-[340px]">
              Você não precisa perder tempo procurando. A gente já filtrou o
              que realmente compensa, só coisa útil, prática e que faz
              diferença no dia a dia. Tá tudo no grupo.
            </p>

            <a
              href="https://chat.whatsapp.com/SEU_LINK_AQUI"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-accent text-accent-foreground font-semibold text-[17px] rounded-lg px-7 py-3.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,214,0,0.3)] active:scale-[0.97]"
            >
              ENTRAR NO GRUPO
            </a>

            <p className="text-muted-foreground text-sm mt-3 opacity-70">
              Acesso direto pelo WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
