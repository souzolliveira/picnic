export interface Props {
  step: string;
}

export default function Step(props: Props) {
  const renderStep = (step: string) => {
    let styles = "";
    switch (step) {
      case "active":
        styles = "bg-emerald-500 border-emerald-100";
        break;
      case "passed":
        styles = "bg-emerald-500 border-white";
        break;
      default:
        styles = "bg-gray-200 border-white";
        break;
    }
    return styles;
  };
  return (
    <div
      className={`w-5 h-5 aspect-square rounded-xl border-4 border-solid ${renderStep(
        props.step
      )}`}
    />
  );
}
