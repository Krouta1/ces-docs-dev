import LandingHeader from "@/components/landing/LandingHeader";

export default function LadingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <LandingHeader />
      {children}
    </div>
  );
}
