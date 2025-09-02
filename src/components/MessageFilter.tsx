'use client';

import { Button } from '@/utils/ui/Button';
import React from 'react';

export type FilterType = 'todos' | 'favoritos' | 'nao_lidas';

type Props = {
  activeFilter: FilterType;
  onFilterChange: (filter: FilterType) => void;
};

const MessageFilter: React.FC<Props> = ({ activeFilter, onFilterChange }) => {
  return (
    <div className="flex justify-around mt-3 sticky top-0 z-10">
      <Button
        className={`px-4 py-1 rounded-full text-md font-semibold ${
          activeFilter === 'favoritos' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        onClick={() => onFilterChange('favoritos')}
      >
        Favoritos
      </Button>
      <Button
        className={`px-4 py-1 rounded-full text-md font-semibold ${
          activeFilter === 'todos' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        onClick={() => onFilterChange('todos')}
      >
        Todos
      </Button>


      <Button
        className={`px-4 py-1 rounded-full text-md font-semibold ${
          
           activeFilter === 'nao_lidas' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        }`}
        onClick={() => onFilterChange('nao_lidas')}
      >
        Não lidas
      </Button>
    </div>
  );
};

export default MessageFilter;
