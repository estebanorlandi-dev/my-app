import { useClock } from "hooks";
import Head from "next/head";

import Shortcut from "components/Home/Shortcut";
import { HomeContainer } from "styles/home.styles";
import { ShortcutModel } from "utils/types/models";
import Placeholder from "componentes/Placeholder";
import CreateShortcut from "components/CreateShortcut";

const shortcuts: ShortcutModel[] = Array.from({ length: 8 }).map((_, i) => ({
  name: `shortcut ${i}`,
  link: `http://localhost:3001#shortcut-${i}`,
  img: `https://picsum.photos/200/300?random=${i}`,
}));

export default function Home() {
  const { hh, mm, DD, month, day } = useClock();

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>

      <HomeContainer>
        <div className="clock-overlay">
          <time>
            {hh}:{mm}
          </time>
        </div>

        <div className="middle">
          <div className="clock">
            <time>
              {hh}:{mm}
            </time>
            <div className="date">
              <span className="day">{Days[day]}</span> {DD} de{" "}
              <span className="month">{Months[month].slice(0, 3)}.</span>
            </div>
          </div>

          <ul className="shortcuts">
            {Array.from({ length: 10 }).map((_, i) =>
              shortcuts[i] ? (
                <Shortcut {...shortcuts[i]} key={shortcuts[i].name} />
              ) : (
                <Placeholder>
                  <p>add shortcut</p>
                </Placeholder>
              )
            )}
          </ul>

          <CreateShortcut className="form" />
        </div>

        <div className="bottom"></div>
      </HomeContainer>
    </>
  );
}

const Days = [
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
];

const Months = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
