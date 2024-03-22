export interface Props {
  name: string;
  label: string;
  value: string;
  setValue: Function;
}

export default function Input(props: Props) {
  return (
    <div className="flex flex-col gap-y-1">
      <label id={`input-${props.name}-label`} htmlFor={props.name} className="text-gray-700 font-medium text-sm">
        {props.label}
      </label>
      <input
        id={`input-${props.name}`}
        name={`input-${props.name}`}
        type="text"
        className="bg-white border border-solid border-gray-300 rounded-md h-10 p-2 text-gray-900 text-sm"
        value={props.value}
        onChange={(event) => props.setValue(event.target.value)}
      />
    </div>
  );
}
