import type { Metadata } from "next";
import "./globals.css";
import { RegistrationProvider } from "@/components/RegistrationProvider";
import { CheckoutProvider } from "@/components/CheckoutProvider";
import RegistrationModal from "@/components/RegistrationModal";
import CheckoutModal from "@/components/CheckoutModal";

export const metadata: Metadata = {
  title: "The Architectural Concierge | Reception Dashboard",
  description: "Professional Reception Management UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col">
        <CheckoutProvider>
          <RegistrationProvider>
            {children}
            <RegistrationModal />
            <CheckoutModal />
          </RegistrationProvider>
        </CheckoutProvider>
      </body>
    </html>
  );
}
