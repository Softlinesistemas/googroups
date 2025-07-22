'use client'

import React, { useState } from 'react';
import { FiCalendar, FiClock, FiCloud, FiChevronDown } from 'react-icons/fi';
import { MdOutlineQrCodeScanner } from "react-icons/md";
import QrCode from './QrCode';
import { Button } from '@/utils/ui/Button';

export const UserSelect: React.FC<{ onActionSelect?: (action: string) => void }> = ({ onActionSelect }) => {
  const handleSearchClick = () => onActionSelect?.('qrcode');
  const handleCalendarClick = () => onActionSelect?.('calendar');
  const handleClockClick = () => onActionSelect?.('clock');
  const handleCloudClick = () => onActionSelect?.('cloud');

  const [showDropdown, setShowDropdown] = useState(false);
  const [showQrCode, setShowQrCode] = useState(false);

  const [selectedUser, setSelectedUser] = useState({
    name: 'Maria da Silva',
    role: '',
  });

  const users = [
    { name: 'Sítio Canaã', role: 'Alimentos Orgânicos' },
    { name: 'Maria da Silva', role: '' },
    // { name: 'Maria Souza', role: 'Operadora' },
    // { name: 'Carlos Lima', role: 'Supervisor' },
  ];

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  const selectUser = (user: { name: string; role: string }) => {
    setSelectedUser(user);
    setShowDropdown(false);
  };

  const handleCloseQrCode = () => setShowQrCode(false); // Fechar QR Code se quiser

  return (
    <div className="bg-orange-100 mt-1 p-1 w-full mx-auto rounded-md shadow-md">
      {/* Renderiza o QR Code ou a seleção de usuário */}
      {showQrCode ? (
        <QrCode 
          qrValue="https://seusite.com/usuario/123" 
          onScanClick={handleCloseQrCode}
        />
      ) : (
        <div className="flex h-24">
          {/* Avatar */}
          <div className="h-full rounded overflow-hidden flex-shrink-0">
            <img
              src="/avatar2.jpeg"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Conteúdo do lado direito */}
          <div className="flex-1 flex flex-col justify-between ml-4">
            {/* Select de usuário */}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="w-full text-left px-1 py-1 bg-orange-200 rounded flex items-center justify-between"
              >
                <span className="text-sm font-medium">
                  {selectedUser.name}  {selectedUser.role}
                </span>
                <FiChevronDown />
              </button>

              {showDropdown && (
                <div className="absolute top-full mt-1 w-full bg-white rounded shadow z-10">
                  {users.map((user, index) => (
                    <div
                      key={index}
                      onClick={() => selectUser(user)}
                      className="px-3 py-2 hover:bg-orange-100 cursor-pointer text-sm"
                    >
                      {user.name} - {user.role}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Ícones de ação */}
            <div className="mt-2 flex justify-around text-gray-700 text-xl gap-2 pb-3">
              <Button
                onClick={handleSearchClick}
                className="hover:text-orange-600 transition"
                title="Buscar"
                variant="userSelect"
              >
                <MdOutlineQrCodeScanner size={40} />
              </Button>

              <Button
                onClick={handleCalendarClick}
                className="hover:text-orange-600 transition"
                title="Calendário"
                variant="userSelect"
              >
                <FiCalendar size={40} />
              </Button>

              <Button
                onClick={handleClockClick}
                className="hover:text-orange-600 transition"
                title="Relógio"
                variant="userSelect"
              >
                <FiClock size={40} />
              </Button>

              <Button
                onClick={handleCloudClick}
                className="hover:text-orange-600 transition"
                title="Nuvem"
                variant="userSelect"
              >
                <FiCloud size={40} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
