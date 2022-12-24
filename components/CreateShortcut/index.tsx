import Input from "components/Input";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

type OnChange = (_: ChangeEvent<HTMLInputElement>) => any;

interface Inputs {
  name: string;
  link: string;
  img: File | null;
}

interface Props {
  className?: string;
}
function CreateShortcut({ className }: Props) {
  const [inputs, setInputs] = useState<Inputs>({
    name: "",
    link: "",
    img: null,
  });
  const [preview, setPreview] = useState<null | string>(null);

  const onChange: OnChange = ({ target: { name, value, files } }) => {
    if (!files?.[0]) return setInputs((old) => ({ ...old, [name]: value }));
    return setInputs((old) => ({ ...old, img: files[0] }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (!inputs.img) return;
    const obj = URL.createObjectURL(inputs.img);
    return () => {
      URL.revokeObjectURL(obj);
    };
  }, [inputs.img]);

  return (
    <form className={className} onSubmit={onSubmit}>
      <Input
        label="Name"
        name="name"
        type="text"
        value={inputs.name}
        onChange={onChange}
      />
      <Input
        label="Link"
        name="link"
        type="text"
        value={inputs.link}
        onChange={onChange}
      />

      <Input label="Image" name="img" type="file" onChange={onChange} />
    </form>
  );
}

export default CreateShortcut;
