import type { FC } from "react";

interface TodoCardProps {
  title: string;
  completed: boolean;
  onToggle: () => void;
}

export const TodoCard: FC<TodoCardProps> = ({ title, completed, onToggle }) => {
  return (
    <div className='w-[500px] bg-slate-500 rounded-lg p-4 text-white flex items-center justify-between'>
      <h2 className='text-lg font-semibold'>{title}</h2>
      <input
        type='checkbox'
        checked={completed}
        onChange={onToggle}
        className='w-5 h-5 accent-green-500 rounded focus:ring-2 focus:ring-green-300 cursor-pointer'
      />
    </div>
  );
};
