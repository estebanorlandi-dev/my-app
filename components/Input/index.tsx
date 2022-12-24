import { HTMLProps, ReactNode } from "react";

type InputTypes = Omit<HTMLProps<HTMLInputElement>, "label">;
interface Props extends InputTypes {
  className?: string;
  label?: ReactNode | ReactNode[];
  type?: "file" | "text";
}
function Input({ className, type, label, onChange, value }: Props) {
  if (!type || type === "text")
    return (
      <label className={className}>
        {label && <span>{label}</span>}
        <input onChange={onChange} type="text" value={value} />
      </label>
    );

  if (type === "file")
    return (
      <label>
        {label && <span>{label}</span>}
        <input
          style={{
            opacity: 0,
            position: "absolute",
            top: 0,
            left: 0,
            height: 0,
            width: 0,
          }}
          onChange={onChange}
          type="file"
        />
      </label>
    );

  return null;
}

export default Input;
