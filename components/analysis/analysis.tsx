import { GoClock } from "react-icons/go";
import { useTranslation } from "next-i18next";
import AnalysisSVG from "./analysisSVG";

export interface Props {
  next: Function;
}

export default function Analysis(props: Props) {
  const { t } = useTranslation();

  return (
    <main className="flex sm:min-h-screen bg-gray-100 justify-center">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 gap-x-6 gap-y-6 px-6 pt-10 pb-[100px] sm:py-4 lg:py-8 lg:px-8 mx-auto sm:grid-cols-2 lg:grid-cols-6">
          <div className="max-w-2xl mx-auto col-span-full my-12">
            <div className="divide-y divide-gray-200">
              <div className="max-w-[430px] flex flex-col gap-y-6 items-center rounded-2xl bg-white p-8 mt-4">
                <AnalysisSVG />
                <div>
                  <h3 className="text-2xl leading-7 font-bold tracking-tighter text-gray-900 text-center">
                    {t("components/analysis-title")}
                  </h3>
                  <p className="text-sm text-gray-600 mt-2">
                    {t("components/analysis-description")}
                  </p>
                </div>
                <div className="flex gap-x-1 items-center">
                  <GoClock />
                  <span className="text-sm font-medium text-gray-900">
                    {t("components/analysis-deadline")}
                  </span>
                </div>
                <button
                  type="button"
                  className="w-full inline-flex items-center justify-center p-3 border border-transparent font-medium rounded-md text-white sm:w-auto sm:text-sm bg-emerald-500"
                  onClick={() => props.next()}
                >
                  {t("components/analysis-action")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
