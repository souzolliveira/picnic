import { useTranslation } from "next-i18next";

export default function Description() {
  const { t } = useTranslation();
  return (
    <div>
      <span className="bg-emerald-100 text-emerald-800 font-medium text-xs py-1 px-3 rounded-full w-fit mb-2">
        {t("increase/cpf/description-level")}
      </span>
      <h3 className="text-2xl leading-7 font-bold tracking-tighter text-gray-900 mt-2">
        {t("increase/cpf/description-increase")}
      </h3>
      <p className="text-sm text-gray-600 mt-2">
        {t("increase/cpf/description-enroll")}
        <strong>{t("increase/cpf/description-limit")}</strong>
      </p>
    </div>
  );
}
