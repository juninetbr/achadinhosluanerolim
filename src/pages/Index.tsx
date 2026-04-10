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
  const [showConsent, setShowConsent] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  const handleCtaClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowConsent(true);
  };

  const handleConfirm = () => {
    setShowConsent(false);
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

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
          <button
            onClick={handleCtaClick}
            className="block w-full text-center bg-accent text-accent-foreground font-semibold text-[16px] rounded-lg px-7 py-3.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 active:scale-[0.97]"
          >
            ENTRAR NO GRUPO
          </button>
          <p className="text-muted-foreground text-sm mt-3 opacity-70">
            Acesso direto pelo WhatsApp
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

              <button
                onClick={handleCtaClick}
                className="inline-block bg-accent text-accent-foreground font-semibold text-[17px] rounded-lg px-7 py-3.5 cursor-pointer transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,214,0,0.3)] active:scale-[0.97]"
              >
                ENTRAR NO GRUPO
              </button>

              <p className="text-muted-foreground text-sm mt-3 opacity-70">
                Acesso direto pelo WhatsApp
              </p>
              {lgpdNotice}
            </div>
          </div>
        </div>
      </section>

      {/* Pop-up de Consentimento */}
      <Dialog open={showConsent} onOpenChange={setShowConsent}>
        <DialogContent className="sm:max-w-[440px] rounded-2xl border-border">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Falta só um passo 👇
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm leading-relaxed pt-3 space-y-3">
              <span className="block">
                Você será direcionado para o WhatsApp para entrar no grupo.
              </span>
              <span className="block">
                Ao continuar, você concorda em compartilhar seu nome e número de
                telefone para participar e receber conteúdos e ofertas.
              </span>
              <span className="block">
                Seus dados não serão armazenados fora do WhatsApp nem
                compartilhados com terceiros.
              </span>
              <span className="block">
                Você pode sair do grupo a qualquer momento.
              </span>
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-3 mt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setShowConsent(false)}
              className="w-full block text-center bg-accent text-accent-foreground font-semibold text-[15px] rounded-lg px-6 py-3 cursor-pointer transition-all duration-200 ease-in-out hover:scale-[1.02] active:scale-[0.98]"
            >
              Continuar para o WhatsApp
            </a>
            <button
              onClick={() => setShowConsent(false)}
              className="w-full text-muted-foreground font-medium text-[14px] rounded-lg px-6 py-2.5 cursor-pointer border border-border hover:bg-muted transition-colors"
            >
              Cancelar
            </button>
          </div>
        </DialogContent>
      </Dialog>

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
