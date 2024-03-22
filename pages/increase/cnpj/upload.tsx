import { FormEvent } from "react";
import { useTranslation } from "next-i18next";
import Back from "@/components/back/back";
import Describe from "./description";
import InputFile from "@/components/inputFile/inputFile";
import Step from "@/components/step/step";

export interface Props {
  document: string;
  CNH: object;
  setCNH: Function;
  frontRG: object;
  setFrontRG: Function;
  backRG: object;
  setBackRG: Function;
  selfie: object;
  setSelfie: Function;
  next: Function;
  previous: Function;
}

export default function Document(props: Props) {
  const { t } = useTranslation();

  const renderDocument = () => {
    let component = null;
    switch (props.document) {
      case "CNH":
        component = (
          <InputFile
            name="cnh"
            label={t("increase/cnpj/upload-cnh")}
            setFile={props.setCNH}
          />
        );
        break;
      case "RG":
        component = (
          <>
            <InputFile
              name="rg-front"
              label={t("increase/cnpj/upload-rg-front")}
              setFile={props.setFrontRG}
            />
            <InputFile
              name="rg-back"
              label={t("increase/cnpj/upload-rg-back")}
              setFile={props.setBackRG}
            />
          </>
        );
        break;
    }
    return component;
  };

  const alertMissedFiles = (file: string) => {
    const element = document.getElementById(`input-file-${file}-input`);
    element?.classList.add("border-red-300");
    element?.classList.add("text-red-900");
    const label = document.getElementById(`input-file-${file}-label`);
    label?.classList.add("text-red-900");
    const button = document.getElementById(`input-file-${file}-button`);
    button?.classList.add("border-red-300");
    button?.classList.add("bg-red-300");
    button?.classList.add("text-red-900");
  };

  const removeAlert = (input: string) => {
    const element = document.getElementById(`input-file-${input}-input`);
    element?.classList.remove("border-red-300");
    element?.classList.remove("text-red-900");
    const label = document.getElementById(`input-file-${input}-label`);
    label?.classList.remove("text-red-900");
    const button = document.getElementById(`input-file-${input}-button`);
    button?.classList.remove("border-red-300");
    button?.classList.remove("bg-red-300");
    button?.classList.remove("text-red-900");
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let verify = true;
    if (props.document === "CNH") {
      const inputCNH = document.getElementById(
        "input-file-cnh"
      ) as HTMLInputElement;
      if (!inputCNH?.files?.length) {
        alertMissedFiles("cnh");
        verify = false;
      } else {
        removeAlert("cnh");
      }
    } else if (props.document === "RG") {
      const inputRGFront = document.getElementById(
        "input-file-rg-front"
      ) as HTMLInputElement;
      if (!inputRGFront?.files?.length) {
        alertMissedFiles("rg-front");
        verify = false;
      } else {
        removeAlert("rg-front");
      }
      const inputRGBack = document.getElementById(
        "input-file-rg-back"
      ) as HTMLInputElement;
      if (!inputRGBack?.files?.length) {
        alertMissedFiles("rg-back");
        verify = false;
      } else {
        removeAlert("rg-back");
      }
    }
    const inputSelfie = document.getElementById(
      "input-file-selfie"
    ) as HTMLInputElement;
    if (!inputSelfie?.files?.length) {
      alertMissedFiles("selfie");
      verify = false;
    } else {
      removeAlert("selfie");
    }
    return verify ? props.next() : null;
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
                    <span className="font-medium text-sm">
                      {t("increase/cnpj/upload-step")}
                    </span>
                    <div className="flex gap-x-4">
                      <Step step="passed" />
                      <Step step="passed" />
                      <Step step="active" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {t("increase/cnpj/upload-archives")}
                  </span>
                  <div className="flex flex-col gap-y-4 mt-6">
                    {renderDocument()}
                    <InputFile
                      name="selfie"
                      label={t("increase/cnpj/upload-selfie")}
                      setFile={props.setSelfie}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white mt-6 sm:w-auto sm:text-sm bg-emerald-500"
                >
                  {t("increase/cnpj/upload-action")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
