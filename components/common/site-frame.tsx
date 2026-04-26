import CookieConsent from "@/components/common/cookie-consent";
import Footer from "@/components/common/footer";
import Navigation from "@/components/common/navigation";

const SiteFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="page-shell min-h-screen">
      <Navigation />
      <main className="relative min-h-screen">
        <div className="mx-auto w-full max-w-[1440px] px-4 pb-16 pt-8 sm:px-6 lg:px-8 lg:pt-10">
          {children}
        </div>
      </main>
      <CookieConsent />
      <Footer />
    </div>
  );
};

export default SiteFrame;
