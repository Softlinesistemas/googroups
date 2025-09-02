'use client';

import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import MessageFilter, { FilterType } from './MessageFilter';
import { ItemList } from './ItemList';

type Item = {
  name: string;
  lastMessage: string;
  avatarUrl: string;
  time: string;
};

export const SearchFilter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('todos');
  const [favorites, setFavorites] = useState<number[]>([]);
  const [unreadItems, setUnreadItems] = useState<number[]>([1, 3, 5]); // Exemplo: os itens 1,3,5 começam como não lidos

  const items: Item[] = Array.from({ length: 8 }).map((_, i) => ({
    name: `Contato ${i + 1}`,
    lastMessage: 'Última mensagem do contato exibida aqui...',
    avatarUrl: `https://i.pravatar.cc/150?img=${i + 10}`,
    time: '12:3' + i,
  }));

  const handleFilterChange = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  const toggleFavorite = (index: number) => {
    setFavorites((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleReadStatus = (index: number) => {
    setUnreadItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  // Aplicando o filtro
  const filteredItems = items.filter((_, index) => {
    if (activeFilter === 'favoritos') {
      return favorites.includes(index);
    }
    if (activeFilter === 'nao_lidas') {
      return unreadItems.includes(index);
    }
    return true; // Caso "todos"
  });

  return (
    <div className="w-full mt-2 m-1 mb-2 ml-1 rounded-xl  ">
      {/* Campo de busca */}
      <div className='mb-2 text-sm font-medium text-black justify-center flex'>
      <p>Pesquise pelo Nome ou Usuário <span className="!text-green-700">GooGroups</span></p>
      </div>
      <div className="flex items-center bg-white rounded-lg shadow-sm px-4 py-3 border-2 border-green-700">
        <FiSearch className="text-black shadow-md mr-2" />
        <input
          type="text"
          placeholder="Buscar AMIGOS, Grupos, Fornecedores ou Empresas."
          className="w-full text-sm font-medium  bg-white  placeholder-gray-500 outline-none"
        />
      </div>

      {/* Filtros */}
      <MessageFilter activeFilter={activeFilter} onFilterChange={handleFilterChange} />

      {/* Lista */}
      <ItemList
        items={filteredItems}
        favorites={favorites}
        unreadItems={unreadItems}
        toggleFavorite={toggleFavorite}
        toggleReadStatus={toggleReadStatus}
      />
    </div>
  );
};