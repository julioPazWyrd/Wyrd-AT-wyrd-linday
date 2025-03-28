"use client";

import AlertHistory from "@/components/alertHistory";
import BodyContent from "@/components/body";
import Card from "@/components/card";
import CardText from "@/components/cardText";
import ClientEditContainer from "@/components/clientEditContainer";
import DetalhesMaquina from "@/components/detalhesMaquina";
import Header from "@/components/header";
import NavBar from "@/components/navbar";
import SearchBar from "@/components/searchbar";
import SelectExport from "@/components/selectExport";
import SideBAr from "@/components/sidebar";
import Image from "next/image";
import { useState } from "react";

export default function Maquina() {
  // Dados para cada card
  const cardData = [
    { field: "Instalação", value: "21/03/2024" },
    { field: "Última manutenção", value: "02/02/2025" },
    { field: "Localização", value: "Local" },
    { field: "Responsável", value: "Téc. João" },
  ];

  const [isDetailsOpen, setIsDetailsOpen] = useState(false);


  return (
    <div className="w-full h-screen text-white flex bg-[#313131]">
      {/* Sidebar à esquerda */}
      <SideBAr />

      {/* Conteúdo principal */}
      <BodyContent>
        <div className="w-full ">
          <Header page="perfilClient" />
          <ClientEditContainer page="perfilClient" />
          <SelectExport
            onclick_details={() => setIsDetailsOpen(true)}
            onClose_details={() => setIsDetailsOpen(false)}
          />
          <DetalhesMaquina isOpen={isDetailsOpen} onClose={() => setIsDetailsOpen(false)} />
          <div className="w-full flex justify-center px-6">

            <Image
              src="/irrigador.png"
              alt="FieldNet Logo"
              width={0}
              height={0}
              sizes="90vw"
              className="w-full"
            />
            {/* Div que abriga a imagem em largura total */}

          </div>

          {/* Cards com fields e values */}
          <div className="flex flex-wrap px-8 justify-between">
            {cardData.map((item, index) => (
              <CardText key={index} field={item.field} value={item.value} />
            ))}
          </div>

        </div>

        <AlertHistory />

      </BodyContent>
    </div>
  );
}
