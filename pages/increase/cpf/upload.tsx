import { FormEvent, useState } from "react";
import Back from "@/components/back";
import Describe from "./describe";
import InputFile from "@/components/inputFile";
import Step from "@/components/step";

export interface Props {
  document: string;
  next: Function;
  previous: Function;
}

export default function Document(props: Props) {
  const [CNH, setCNH] = useState({});
  const [frontRG, setFrontRG] = useState({});
  const [backRG, setBackRG] = useState({});
  const [selfie, setSelfie] = useState({});

  const renderDocument = () => {
    let component = null;
    switch (props.document) {
      case "CNH":
        component = (
          <InputFile
            name="document-cnh"
            label="Foto da CNH aberta"
            setDocument={setCNH}
          />
        );
        break;
      case "RG":
        component = (
          <div>
            <InputFile
              name="document-rg-front"
              label="Foto do RG (frente)"
              setDocument={setFrontRG}
            />
            <InputFile
              name="document-rg-back"
              label="Foto do RG (verso)"
              setDocument={setBackRG}
            />
          </div>
        );
        break;
    }
    return component;
  };

  const alertMissedFiles = (file: string) => {
    const element = document.getElementById(`document-${file}-input`);
    element?.classList.add("border-red-300");
    element?.classList.add("text-red-900");
    const label = document.getElementById(`document-${file}-label`);
    label?.classList.add("text-red-900");
    const button = document.getElementById(`document-${file}-button`);
    button?.classList.add("border-red-300");
    button?.classList.add("bg-red-300");
    button?.classList.add("text-red-900");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (props.document === "CNH" && JSON.stringify(CNH) === "{}") {
      alertMissedFiles("cnh");
    }
    if (props.document === "RG" && JSON.stringify(frontRG) === "{}") {
      alertMissedFiles("rg-front");
    }
    if (props.document === "RG" && JSON.stringify(backRG) === "{}") {
      alertMissedFiles("rg-back");
    }
    if (JSON.stringify(selfie) === "{}") {
      alertMissedFiles("selfie");
    }
    // todo: enviar documentos
    // props.next();
  };

  return (
    <main className="flex sm:min-h-screen bg-gray-100 justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 px-6 pt-10 pb-[100px] sm:py-4 lg:py-8 lg:px-8 mx-auto sm:grid-cols-2 lg:grid-cols-6">
          <div className="max-w-2xl mx-auto col-span-full my-12">
            <Back previous={props.previous} />
            <form
              className="divide-y divide-gray-200"
              onSubmit={(event) => onSubmit(event)}
            >
              <div className="max-w-[430px] flex flex-col rounded-2xl bg-white p-8 mt-4">
                <Describe />
                <div className="flex flex-col pt-6">
                  <div className="flex gap-x-6">
                    <span className="font-medium text-sm">Passo 1 de 2</span>
                    <div className="flex gap-x-4">
                      <Step step="passed" />
                      <Step step="active" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    Envie os arquivos solicitados
                  </span>
                  {renderDocument()}
                  <InputFile
                    name="document-selfie"
                    label="Foto do rosto (selfie)"
                    setDocument={setSelfie}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white mt-6 sm:w-auto sm:text-sm bg-emerald-500"
                >
                  <p className="mr-1">Finalizar</p>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
