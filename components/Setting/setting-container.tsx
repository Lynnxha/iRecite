import { useImmerAtom } from "jotai-immer";
import Translation from "./Setting-Sections/translation";
import WordByWord from "./Setting-Sections/wordByWord";
import { settingAtom } from "../atoms/setting-atom";
import { useEffect } from "react";
import { Moon, SunDim } from "@phosphor-icons/react";

export default function SettingContainer() {
  const [setting, setSetting] = useImmerAtom(settingAtom);

  useEffect(() => {
    setSetting((e) => {
      e.theme = 1;
      return e;
    });
  }, []);

  return (
    <div className="p-2 w-full max-h-96 overflow-y-scroll">
      <div className="font-semibold text-base mb-2">Tema</div>
      <div
        className={`h-9 w-[47%] absolute z[-1] transition duration-300 ease-in-out ${
          setting.theme && "translate-x-[100%]"
        }`}
      ></div>
      <div className="flex w-full">
        <button
          onClick={() =>
            setSetting((e) => {
              e.theme = 0;
              return e;
            })
          }
          className="flex-1 z-[1] p-2 items-center"
        >
          <SunDim size={20} />
        </button>
        <button
          onClick={() =>
            setSetting((e) => {
              e.theme = 1;
              return e;
            })
          }
          className="flex-1 items-center"
        >
          <Moon size={20} />
        </button>
      </div>
      <div className="w-full h-[1.5px] rounded-full bg-gray-700 dark:bg-zinc-300 my-4" />
      <WordByWord />
      <Translation />
    </div>
  );
}
