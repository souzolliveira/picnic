import { ImFilePicture } from "react-icons/im";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { TbPaperclip } from "react-icons/tb";
import { useState } from "react";
import { useTranslation } from "next-i18next";

export interface Props {
  name: string;
  label: string;
  setFile: Function;
}

export default function InputFile(props: Props) {
  const { t } = useTranslation();

  const [name, setName] = useState("");

  const verifyEmpty = (input: HTMLInputElement) => {
    setTimeout(() => {
      const onFocus = () => {
        window.removeEventListener("focus", onFocus);
        document.body.addEventListener("mousemove", onMouseMove);
      };
      const onMouseMove = () => {
        document.body.removeEventListener("mousemove", onMouseMove);
        if (!input?.files?.length) {
          setName("");
          props.setFile({});
          onClick();
        }
      };
      window.addEventListener("focus", onFocus);
    }, 0);
  };

  const onClick = () => {
    const input = document.getElementById(
      `input-file-${props.name}`
    ) as HTMLInputElement;
    input?.click();
    verifyEmpty(input);
  };

  const onChange = () => {
    const archive = (
      document.getElementById(`input-file-${props.name}`) as HTMLInputElement
    )?.files?.[0];
    setName(archive?.name || "");
    props.setFile(archive);
  };

  return (
    <div className="flex flex-col gap-y-1 relative">
      <label
        htmlFor={`input-file-${props.name} `}
        className="text-gray-700 font-medium text-sm"
      >
        {props.label}
      </label>
      {name === "" ? (
        <div
          className="flex border border-solid border-gray-300 rounded-md justify-between cursor-pointer h-10"
          id={`input-file-${props.name}-input`}
          onClick={() => onClick()}
        >
          <div className="flex gap-x-2 place-items-center p-2">
            <TbPaperclip />
            <span
              className="font-sm text-gray-500"
              id={`input-file-${props.name}-label`}
            >
              {t("components/inputfile-none")}
            </span>
          </div>
          <span
            className="bg-gray-50 p-2 text-gray-700 font-md font-semibold border-l border-solid border-gray-300 rounded-r-md"
            id={`input-file-${props.name}-button`}
          >
            {t("components/inputfile-action")}
          </span>
        </div>
      ) : (
        <div className="flex gap-x-2 items-center justify-between h-10 border border-solid border-gray-300 rounded-md p-2">
          <div className="flex gap-x-2 items-center">
            <ImFilePicture />
            <span className="max-w-[300px] overflow-hidden whitespace-nowrap text-ellipsis text-sm text-gray-500">
              {name}
            </span>
          </div>
          <button
            type="button"
            className="flex items-center justify-center h-42 w-fit-content"
            onClick={() => onClick()}
          >
            <IoIosCloseCircleOutline />
          </button>
        </div>
      )}
      <input
        id={`input-file-${props.name}`}
        name={`input-file-${props.name}`}
        type="file"
        className="invisible w-0 h-0"
        onChange={() => onChange()}
        accept="image/png, image/jpeg"
      />
    </div>
  );
}
