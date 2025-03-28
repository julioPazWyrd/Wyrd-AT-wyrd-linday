"use client";

import Link from "next/link";
import BodyContent from "@/components/body";
import Card from "@/components/card";
import Header from "@/components/header";
import SearchBar from "@/components/searchbar";
import Sidebar from "@/components/sidebar";

export default function HomePageRevenda() {
  // Gera um array de 18 itens para replicar o Card
  const cards = Array.from({ length: 18 });

  return (
    <div className="w-full h-screen text-white flex bg-[#313131]">
      <Sidebar />

      <BodyContent>
        <Header page="" />

        {/* Seção rolável com barra de rolagem personalizada */}
        <div
          className="
            flex 
            flex-wrap 
            p-4
            justify-around 
            max-h-[80vh]
            overflow-auto 
            scrollbar 
            scrollbar-thin 
            scrollbar-thumb-red-500 
            scrollbar-track-gray-800
          "
        >
          {cards.map((_, index) => (
            <Link href="/maquina" key={index} className="w-1/4 m-4">
              <Card />
            </Link>
          ))}
        </div>
      </BodyContent>

      <SearchBar />
    </div>
  );
}
