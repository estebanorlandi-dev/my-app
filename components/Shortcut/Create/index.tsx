import Image from "next/image";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { BiImageAlt } from "react-icons/bi";

interface Inputs {
  name: string;
  url: string;
  img: FileList;
}

interface Props {
  className?: string;
}
function CreateShortcut({ className }: Props) {
  const { handleSubmit, register, watch } = useForm<Inputs>();
  const [preview, setPreview] = useState<string | null>(null);

  const img = watch("img");

  useEffect(() => {
    if (!img || !img[0]) return;
    const obj = URL.createObjectURL(img[0]);
    setPreview(obj);
    return () => {
      URL.revokeObjectURL(obj);
      setPreview(null);
    };
  }, [img]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.debug(data);
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      <div className="form-container">
        <div className="form-left">
          <label>
            <div className="img-container">
              <div className="overlay">
                <BiImageAlt size={26} />
              </div>
              {preview && <Image className="img" src={preview} alt="" fill />}
            </div>
            <div className="right">
              <input type="file" {...register("img")} />
            </div>
          </label>
        </div>

        <div className="form-right">
          <label className="name">
            <div className="right">
              <input placeholder="Example" type="text" {...register("name")} />
            </div>
          </label>

          <label className="url">
            <div className="right">
              <input
                placeholder="www.example.com"
                type="text"
                {...register("url")}
              />
            </div>
          </label>
        </div>
      </div>

      <button type="submit">submit</button>
    </form>
  );
}

export default CreateShortcut;
