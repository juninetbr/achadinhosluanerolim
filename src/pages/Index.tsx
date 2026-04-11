import { useState } from "react";
import heroBgMobile from "@/assets/hero-bg-mobile.jpg";
import heroBgDesktop from "@/assets/hero-bg-desktop.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const WHATSAPP_URL = "https://chat.whatsapp.com/ExU0P1xeWmEGaVH4DFwN7L";

const Index = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);

  const lgpdNotice = (
    <p className="text-muted-foreground text-xs mt-2 opacity-60">
      Seus dados (nome e telefone) serão usados apenas para acesso ao grupo.{" "}
      <button
        type="button"
        onClick={() => setShowPrivacy(true)}
        className="underline cursor-pointer hover:opacity-100 transition-opacity"
      >
        Saiba mais
      </button>
    </p>
  );

  return (
    <>
      <section className="w-full sm:h-screen sm:overflow-hidden flex flex-col sm:flex-row overflow-y-auto">
        {/* Mobile: image on top */}
        <div className="sm:hidden w-full flex-shrink-0 relative">
          <img
            src={heroBgMobile}
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
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-accent text-accent-foreground font-semibold text-[16px] rounded-lg px-7 py-3.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 active:scale-[0.97]"
          >
            ENTRAR NO GRUPO
          </a>
          <p className="text-muted-foreground text-sm mt-3 opacity-70">
            Acesso direto pelo WhatsApp. Ao clicar, você concorda com o uso dos seus dados.
          </p>
          {lgpdNotice}
        </div>

        {/* Desktop / Tablet layout */}
        <div className="hidden sm:flex w-full h-screen relative">
          <img
            src={heroBgDesktop}
            alt="Mulher sorrindo em ambiente aconchegante de casa"
            className="absolute inset-0 w-full h-full object-contain object-right bg-background"
          />

          <div className="absolute inset-0 bg-black/8" />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0) 50%)",
            }}
          />

          <div className="relative z-10 flex items-center h-full px-[72px] lg:px-24">
            <div className="max-w-[480px] lg:max-w-[500px]">
              <h1
                className="text-foreground font-bold leading-[1.15] mb-6"
                style={{ fontSize: "clamp(28px, 3.5vw, 52px)" }}
              >
                Os achados para<br />
                sua casa que<br />
                <span className="text-accent">fazem sentido</span>,<br />
                em um só lugar!
              </h1>

              <p className="text-base lg:text-lg leading-[1.5] mb-8 max-w-[440px] text-muted-foreground mx-0 px-0">
                Você não precisa perder tempo procurando. A gente já filtrou o
                que realmente compensa, só coisa útil, prática e que faz
                diferença no dia a dia. Tá tudo no grupo.
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-accent-foreground font-semibold text-[17px] rounded-lg px-7 py-3.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,214,0,0.3)] active:scale-[0.97]"
              >
                ENTRAR NO GRUPO
              </a>

              <p className="text-muted-foreground text-sm mt-3 opacity-70">
                Acesso direto pelo WhatsApp. Ao clicar, você concorda com o uso dos seus dados.
              </p>
              {lgpdNotice}
            </div>
          </div>
        </div>
      </section>

      {/* Modal de Privacidade */}
      <Dialog open={showPrivacy} onOpenChange={setShowPrivacy}>
        <DialogContent className="sm:max-w-[400px] rounded-2xl border-border">
          <DialogHeader>
            <DialogTitle className="text-lg font-bold">
              Privacidade
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm leading-relaxed pt-3 space-y-3">
              <span className="block">
                Utilizamos apenas seu nome e número de telefone para permitir sua
                entrada no grupo de WhatsApp.
              </span>
              <span className="block">
                Não armazenamos seus dados em banco externo e não compartilhamos
                com terceiros.
              </span>
              <span className="block">
                Você pode sair do grupo a qualquer momento.
              </span>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Index;
