import { IoMdArrowUp } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import { useTranslation } from "next-i18next";
import Back from "@/components/back/back";
import Describe from "./description";

export interface Props {
  next: Function;
  previous: Function;
}

export default function Start(props: Props) {
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
                <div>
                  <div className="flex flex-row pt-8 gap-x-4">
                    <div className="bg-black p-4 rounded-lg place-content-center flex relative h-fit">
                      <IoStorefrontSharp color="white" size={24} />
                      <div className="absolute -bottom-3 -right-3 bg-emerald-500 border-4 border-solid border-white rounded-full p-1 flex place-content-center">
                        <IoMdArrowUp color="white" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-y-1">
                      <span className="font-semibold text-sm">
                        {t("increase/cnpj/start-enroll-title")}
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        {t("increase/cnpj/start-enroll-description")}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col divide-y mt-4">
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        {t("increase/cnpj/start-cnpj-title")}
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        {t("increase/cnpj/start-cpnj-description")}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        {t("increase/cnpj/start-partner-title")}
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        {t("increase/cnpj/start-partner-description")}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        {t("increase/cnpj/start-document-title")}
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        {t("increase/cnpj/start-document-description")}
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        {t("increase/cnpj/start-selfie-title")}
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        {t("increase/cnpj/start-selfie-description")}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white mt-6 sm:w-auto sm:text-sm bg-emerald-500"
                  onClick={() => props.next()}
                >
                  {t("increase/cnpj/start-action")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
