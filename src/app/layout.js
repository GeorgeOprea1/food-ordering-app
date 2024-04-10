import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./../components/layout/Header";
import Footer from "./../components/layout/Footer";
import AppProvider from "./../components/AppContext";
import { Toaster } from "react-hot-toast";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "St Pizza",
  description:
    "Explore our delicious range of gourmet pizzas made with fresh ingredients. Order online for quick delivery to satisfy your pizza cravings!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl  mx-auto p-4">
          <AppProvider>
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            {children}
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
