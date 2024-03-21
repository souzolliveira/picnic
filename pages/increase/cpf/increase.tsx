import { useState } from "react";
import Analysis from "./analysis";
import ChooseDocument from "./chooseDocument";
import Start from "./start";
import Upload from "./upload";

export default function Increase() {
  const steps = ["start", "document", "upload", "analysis"];
  const [document, setDocument] = useState("CNH");
  const [selectedStep, setSelectedStep] = useState("start");

  const next = () => {
    if (selectedStep === "analysis") {
      return null;
    }
    const index = steps.findIndex((item) => item === selectedStep);
    setSelectedStep(steps[index + 1]);
  };

  const previous = () => {
    if (selectedStep === "start") {
      return null;
    }
    const index = steps.findIndex((item) => item === selectedStep);
    setSelectedStep(steps[index - 1]);
  };

  const renderStep = () => {
    let component = null;
    switch (selectedStep) {
      case "start":
        component = <Start next={next} previous={previous} />;
        break;
      case "document":
        component = (
          <ChooseDocument
            document={document}
            setDocument={setDocument}
            next={next}
            previous={previous}
          />
        );
        break;
      case "upload":
        component = (
          <Upload document={document} next={next} previous={previous} />
        );
        break;
      case "analysis":
        component = <Analysis next={next} />;
      default:
        break;
    }
    return component;
  };

  return renderStep();
}
