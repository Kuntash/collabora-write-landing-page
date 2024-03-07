import { HeaderSection } from "@/components/header-section";
import { SubscribeSection } from "@/components/subscribe-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-grid-white/[0.06] p-2 gap-y-4">
      {/* Header section */}

      <HeaderSection />
      <SubscribeSection />
    </main>
  );
}
