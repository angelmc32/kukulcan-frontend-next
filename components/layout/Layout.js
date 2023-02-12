import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="flex justify-center px-2 pt-2 md:px-4 md:pt-4">
        {children}
      </main>
    </>
  );
}
