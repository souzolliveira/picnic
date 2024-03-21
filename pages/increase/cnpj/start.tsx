import { IoMdArrowUp } from "react-icons/io";
import { IoStorefrontSharp } from "react-icons/io5";
import Back from "@/components/back";
import Describe from "./describe";

export interface Props {
  next: Function;
  previous: Function;
}

export default function Start(props: Props) {
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
                        Cadastro de Pessoa Jurídica
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        Para aumentar seu limite os seguintes documentos serão
                        necessários:
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col divide-y mt-4">
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        CNPJ da empresa
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        Dados de cadastro da empresa cadastrada
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        Dados de um sócio
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        Nome completo, data de nascimento e número de CPF
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        Foto do documento pessoal de um sócio
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        Foto nítida de sua Carteira Nacional de Habilitação
                        (CNH) ou Registro Geral (RG)
                      </span>
                    </div>
                    <div className="flex flex-col gap-y-1 py-3">
                      <span className="font-semibold text-sm">
                        Foto do Rosto (Selfie) de um sócio
                      </span>
                      <span className="font-normal text-sm leading-5 text-gray-600">
                        Foto em um ambiente com boa iluminação com o seu rosto
                        claramente visível
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white mt-6 sm:w-auto sm:text-sm bg-emerald-500"
                  onClick={() => props.next()}
                >
                  <p className="mr-1">Iniciar</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
