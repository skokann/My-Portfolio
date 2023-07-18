import { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export default function Textarea(props: TextareaProps) {
  return (
    <div className="flex flex-col gap-1">
      {props.label && <label className="text-white">{props.label}</label>}
      <textarea
        className="bg-black border border-white/10 placeholder:text-white/30 duration-150 text-white rounded-lg px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-emerald-500 h-28"
        {...props}
      />
    </div>
  );
}
