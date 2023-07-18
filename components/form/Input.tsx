import { InputHTMLAttributes } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input(props: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {props.label && <label className="text-white">{props.label}</label>}
      <input
        className="bg-black border border-white/10 placeholder:text-white/30 duration-150 text-white rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500"
        {...props}
      />
    </div>
  );
}
