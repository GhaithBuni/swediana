import Image from "next/image";
import Nav from "../components/Nav";
export default function Home() {
  return (
    <div>
      <div
        className="flex justify-center items-center h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/land-page.jpg')" }}
      >
        <h1 className="text-white text-5xl font-bold">Welcome to Swediana</h1>
      </div>
    </div>
  );
}
