import { useTranslation } from "next-i18next";
import Back from "@/components/back/back";
import Describe from "./description";
import Document from "@/components/document/document";
import Step from "@/components/step/step";

export interface Props {
  document: string;
  setDocument: Function;
  next: Function;
  previous: Function;
}

export default function ChooseDocument(props: Props) {
  const { t } = useTranslation();

  return (
    <main className="flex sm:min-h-screen bg-gray-100 justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 px-6 pt-10 pb-[100px] sm:py-4 lg:py-8 lg:px-8 mx-auto sm:grid-cols-2 lg:grid-cols-6">
          <div className="max-w-2xl mx-auto col-span-full my-12">
            <Back previous={props.previous} />
            <div className="divide-y divide-gray-200">
              <div className="max-w-[430px] flex flex-col rounded-2xl bg-white p-8 mt-4">
                <Describe />
                <div className="flex flex-col pt-6">
                  <div className="flex gap-x-6">
                    <span className="font-medium text-sm">
                      {t("increase/cnpj/choosedocument-step")}
                    </span>
                    <div className="flex gap-x-4">
                      <Step step="passed" />
                      <Step step="active" />
                      <Step step="deactivate" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {t("increase/cnpj/choosedocument-select")}
                  </span>
                  <div className="flex flex-col mt-6">
                    <Document
                      selectedDocument={props.document}
                      document="CNH"
                      setDocument={props.setDocument}
                      title={t("increase/cpf/choosedocument-cnh-title")}
                      description={t(
                        "increase/cpf/choosedocument-cnh-description"
                      )}
                    />
                    <Document
                      selectedDocument={props.document}
                      document="RG"
                      setDocument={props.setDocument}
                      title={t("increase/cpf/choosedocument-rg")}
                      description={t(
                        "increase/cpf/choosedocument-rg-description"
                      )}
                    />
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white mt-6 sm:w-auto sm:text-sm bg-emerald-500"
                  onClick={() => props.next()}
                >
                  {t("increase/cnpj/choosedocument-action")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
