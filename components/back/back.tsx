import { MdChevronLeft } from "react-icons/md";
import { useTranslation } from "next-i18next";

export interface Props {
  previous: Function;
}

export default function Back(props: Props) {
  const { t } = useTranslation();

  return (
    <div
      className="flex items-center cursor-pointer gap-x-2"
      onClick={() => props.previous()}
    >
      <MdChevronLeft className="text-gray-500" />
      <span className="flex items-center font-medium text-sm text-gray-500 leading-none">
        {t("components/back-action")}
      </span>
    </div>
  );
}
