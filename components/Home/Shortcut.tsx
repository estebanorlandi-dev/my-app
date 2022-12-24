import Image from "next/image";
import Link from "next/link";
import { BiDotsVertical, BiLinkAlt } from "react-icons/bi";
import { ShortcutContainer } from "styles/home.styles";
import { ShortcutModel } from "utils/types/models";

function Shortcut({ name, link, img }: ShortcutModel) {
  return (
    <ShortcutContainer>
      <button className="options">
        <BiDotsVertical />
      </button>

      <Link href={link} target="_blank" rel="noreferrer" className="content">
        <div className="shortcut-head">
          <div className="overlay">
            <BiLinkAlt />
          </div>
          <Image fill className="img" src={img} alt="" />
        </div>
        <div className="shortcut-name">
          {name} {name}
        </div>
      </Link>
    </ShortcutContainer>
  );
}

export default Shortcut;
