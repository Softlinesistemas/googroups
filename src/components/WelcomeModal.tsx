"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { FaTimes } from "react-icons/fa";

const WelcomeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Abre automaticamente ao montar
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleRedirect = () => {
    window.open(
      "https://www.ba.gov.br/educacao/avaliacoes-externas-sabe-e-saeb",
      "_blank" // abre em nova aba
    );
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      className="fixed inset-0 z-[9999] overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen bg-black/50 px-4 py-10">
        <DialogPanel className="bg-white rounded-xl p-4 w-full max-w-md relative shadow-2xl">
          {/* Botão de fechar */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Impede o clique no botão de fechar redirecionar
              handleClose();
            }}
            className="absolute top-4 right-4 text-gray-700 hover:text-red-500 transition z-10"
          >
            <FaTimes className="w-8 h-8" />
          </button>

          {/* Imagem + texto clicável */}
          <div
            onClick={handleRedirect}
            className="flex flex-col justify-center items-center cursor-pointer"
          >
            <img
              src="/images/banners/1.png"
              alt="Clique para acessar"
              className="rounded-lg max-h-[800px] object-contain"
            />
            <div className="mt-2 text-red-800 text-center text-lg font-semibold underline">
              <span>Clique para acessar</span>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default WelcomeModal;


// 'use client';

// import { useEffect, useState } from 'react';
// import { Dialog, DialogPanel } from '@headlessui/react';
// import { FaTimes } from 'react-icons/fa'

// const WelcomeModal = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Abre automaticamente ao montar
//   useEffect(() => {
//     setIsOpen(true);
//   }, []);

//   const handleRedirect = () => {
//     window.location.href = "https://consultaweb.conab.gov.br/consultas/consultaPgpaf.do?method=acaoCarregarConsulta";
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   return (
//     <Dialog open={isOpen} onClose={handleClose} className="fixed inset-0 z-[9999] overflow-y-auto">
//       <div className="flex items-center justify-center min-h-screen bg-black/50 px-4 py-10">
//         <DialogPanel
//           onClick={handleRedirect} // Redirecionar quando clicar no painel do modal
//           className="bg-blue-300 text-black font-extrabold rounded-xl p-6 w-full max-w-2xl min-h-[300px] relative cursor-pointer shadow-2xl"
//         >
//           <button
//             onClick={(e) => {
//               e.stopPropagation(); // Impede o clique no botão de fechar de redirecionar
//               handleClose();
//             }}
//             className="absolute top-4 right-4 text-white hover:text-gray-300 transition"
//           >
//             <FaTimes className="w-20 h-20" />
//           </button>

//           <div className="flex flex-col justify-center items-center text-center text-2xl font-extrabold gap-1 px-4 pt-6">
//             <p>Prezada(o)</p>
//             <p>Agricultora(o) Familiar</p>
//             <p className="text-red-600 uppercase">REGISTRE OS PREÇOS </p>
//             <p className="text-red-600 uppercase">DOS SEUS PRODUTOS.</p>
//             <p>É fácil e ajuda a</p>
//             <p>Agricultura Familiar a</p>
//             <p>Crescer ainda mais.</p>
//             <p className="mt-2 underline text-blue-300">CLICK AQUI!</p>
//           </div>
//         </DialogPanel>
//       </div>
//     </Dialog>
//   );
// };

// export default WelcomeModal;
