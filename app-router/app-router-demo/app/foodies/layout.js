import "./globals.css";
import MainHeader from "@/components/foodies/main-header/main-header";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
