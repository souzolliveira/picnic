import Back from "@/components/back";
import Describe from "./describe";
import Document from "@/components/document";
import Step from "@/components/step";

export interface Props {
  next: Function;
  previous: Function;
}

export default function Data(props: Props) {
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
                    <span className="font-medium text-sm">Passo 1 de 3</span>
                    <div className="flex gap-x-4">
                      <Step step="active" />
                      <Step step="deactivate" />
                      <Step step="deactivate" />
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">
                    Informe os dados da empresa e responsável
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white mt-6 sm:w-auto sm:text-sm bg-emerald-500"
                  onClick={() => props.next()}
                >
                  <p className="mr-1">Continuar</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
