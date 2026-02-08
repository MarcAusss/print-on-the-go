import Image from "next/image";
import NavBar from "./components/NavBar";
import Main from "./pages/Main";

export default function Home() {
  return (
    <div className="">
      <Main/>
      <NavBar/>
    </div>
  );
}
