import { useState } from "react";
import Analysis from "@/components/analysis/analysis";
import ChooseDocument from "./chooseDocument";
import Data from "./data";
import Start from "./start";
import Upload from "./upload";

export default function Increase() {
  const steps = ["start", "data", "document", "upload", "analysis"];
  const [selectedStep, setSelectedStep] = useState("start");

  const [CNPJ, setCNPJ] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [CPF, setCPF] = useState("");

  const [document, setDocument] = useState("CNH");
  const [CNH, setCNH] = useState({});
  const [frontRG, setFrontRG] = useState({});
  const [backRG, setBackRG] = useState({});
  const [selfie, setSelfie] = useState({});

  const next = () => {
    if (selectedStep === "upload") {
      console.log(CNPJ, name, date, CPF, CNH, frontRG, backRG, selfie);
      return null;
    } else if (selectedStep === "analysis") {
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
      case "data":
        component = (
          <Data
            CNPJ={CNPJ}
            setCNPJ={setCNPJ}
            name={name}
            setName={setName}
            date={date}
            setDate={setDate}
            CPF={CPF}
            setCPF={setCPF}
            next={next}
            previous={previous}
          />
        );
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
          <Upload
            document={document}
            CNH={CNH}
            setCNH={setCNH}
            frontRG={frontRG}
            setFrontRG={setFrontRG}
            backRG={backRG}
            setBackRG={setBackRG}
            selfie={selfie}
            setSelfie={setSelfie}
            next={next}
            previous={previous}
          />
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
