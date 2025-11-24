import type { ReactNode } from "react";

interface Props {
  name: string;
  value: string;
  checked: boolean;
  onChange: () => void;
  title: string;
  description: string;
  icon: ReactNode;
  variant?: "blue" | "purple";
}

export const ServiceCard = ({
  name,
  value,
  checked,
  onChange,
  title,
  description,
  icon,
  variant = "blue",
}: Props) => {
  const isBlue = variant === "blue";

  const activeStyles = isBlue
    ? "peer-checked:border-blue-500 peer-checked:bg-blue-500/10 peer-checked:shadow-lg peer-checked:shadow-blue-500/20 peer-checked:scale-[1.02]"
    : "peer-checked:border-purple-500 peer-checked:bg-purple-500/10 peer-checked:shadow-lg peer-checked:shadow-purple-500/20 peer-checked:scale-[1.02]";

  const focusStyles = isBlue
    ? "peer-focus-visible:ring-2 peer-focus-visible:ring-blue-500 peer-focus-visible:border-blue-500"
    : "peer-focus-visible:ring-2 peer-focus-visible:ring-purple-500 peer-focus-visible:border-purple-500";

  const hoverStyles = isBlue
    ? "hover:border-blue-400 hover:bg-blue-500/5"
    : "hover:border-purple-400 hover:bg-purple-500/5";

  return (
    <label className="relative h-full w-full cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="peer sr-only"
      />

      <div
        className={`flex h-full flex-col items-center justify-center rounded-xl border-2 border-slate-700 p-8 transition-all duration-300 ${hoverStyles} ${activeStyles} ${focusStyles} `}
      >
        <span
          className="mb-4 text-5xl transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        >
          {icon}
        </span>

        <span className="text-lg font-bold text-white">{title}</span>

        <span className="mt-2 text-center text-sm text-slate-400">
          {description}
        </span>
      </div>
    </label>
  );
};
