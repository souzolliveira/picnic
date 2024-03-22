import { FormEvent } from "react";
import { useTranslation } from "next-i18next";
import Back from "@/components/back/back";
import Describe from "./description";
import Input from "@/components/input/input";
import Step from "@/components/step/step";

export interface Props {
  CNPJ: string;
  setCNPJ: Function;
  name: string;
  setName: Function;
  date: string;
  setDate: Function;
  CPF: string;
  setCPF: Function;
  next: Function;
  previous: Function;
}

export default function Data(props: Props) {
  const { t } = useTranslation();

  const alertMissedData = (file: string) => {
    const element = document.getElementById(`input-${file}`);
    element?.classList.add("border-red-300");
    element?.classList.add("text-red-900");
    const label = document.getElementById(`input-${file}-label`);
    label?.classList.add("text-red-900");
  };

  const removeAlert = (file: string) => {
    const element = document.getElementById(`input-${file}`);
    element?.classList.remove("border-red-300");
    element?.classList.remove("text-red-900");
    const label = document.getElementById(`input-${file}-label`);
    label?.classList.remove("text-red-900");
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let verify = true;
    if (props.CNPJ === "") {
      alertMissedData("cnpj");
      verify = false;
    } else {
      removeAlert("cnpj");
    }
    if (props.name === "") {
      alertMissedData("name");
      verify = false;
    } else {
      removeAlert("name");
    }
    if (props.date === "") {
      alertMissedData("date");
      verify = false;
    } else {
      removeAlert("date");
    }
    if (props.CPF === "") {
      alertMissedData("cpf");
      verify = false;
    } else {
      removeAlert("cpf");
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
                      {t("increase/cnpj/data-step")}
                    </span>
                    <div className="flex gap-x-4">
                      <Step step="active" />
                      <Step step="deactivate" />
                      <Step step="deactivate" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {t("increase/cnpj/data-inform")}
                  </span>
                </div>
                <div className="flex flex-col gap-y-4 mt-6">
                  <Input
                    name="cnpj"
                    label={t("increase/cnpj/data-cnpj")}
                    value={props.CNPJ}
                    setValue={props.setCNPJ}
                  />
                  <Input
                    name="name"
                    label={t("increase/cnpj/data-name")}
                    value={props.name}
                    setValue={props.setName}
                  />
                  <Input
                    name="date"
                    label={t("increase/cnpj/data-date")}
                    value={props.date}
                    setValue={props.setDate}
                  />
                  <Input
                    name="cpf"
                    label={t("increase/cnpj/data-cpf")}
                    value={props.CPF}
                    setValue={props.setCPF}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white mt-6 sm:w-auto sm:text-sm bg-emerald-500"
                >
                  {t("increase/cnpj/data-action")}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
