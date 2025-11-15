import { ReactNode } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: ReactNode;
  className?: string;
}

export const Input = ({
  value,
  onChange,
  icon,
  placeholder,
  type = 'text',
  id,
  className = '',
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col items-start w-full max-w-sm">
      <div className="relative w-full">
        {icon && (
          <span className="absolute left-5 top-1/2 -translate-y-1/2 select-none">{icon}</span>
        )}

        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`
            w-full h-14 py-3 pr-4 rounded-2xl
            text-base
            border border-gray-700 bg-card 
            
            outline-none transition-all
            ${icon ? 'pl-14' : 'pl-4'}
            ${className}
          `}
          {...props}
        />
      </div>
    </div>
  );
};
