export interface Props {
  selectedDocument: string;
  document: string;
  setDocument: Function;
  title: string;
  description: string;
}

export default function Document(props: Props) {
  return (
    <div
      className={`flex gap-x-2 p-4 border border-solid first-of-type:rounded-t-md last-of-type:rounded-b-md cursor-pointer ${
        props.selectedDocument === props.document
          ? "border-emerald-100 bg-emerald-50"
          : "first-of-type:border-b-0 last-of-type:border-t-0 border-gray-200"
      }`}
      onClick={() => props.setDocument(props.document)}
    >
      <div
        className={`w-4 h-4 aspect-square rounded-lg mt-1 bg-white border-solid ${
          props.selectedDocument === props.document
            ? "border-4 border-emerald-500"
            : "border border-gray-300"
        }`}
      />
      <div className="flex flex-col">
        <span
          className={`font-medium text-sm ${
            props.selectedDocument === props.document ? "text-emerald-900" : ""
          }`}
        >
          {props.title}
        </span>
        <span
          className={`text-sm ${
            props.selectedDocument === props.document
              ? "text-emerald-900"
              : "text-gray-500"
          }`}
        >
          {props.description}
        </span>
      </div>
    </div>
  );
}
