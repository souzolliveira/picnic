export interface Props {
  previous: Function;
}

export default function Back(props: Props) {
  return (
    <div
      className="flex items-center cursor-pointer"
      onClick={() => props.previous()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        aria-hidden="true"
        className="w-4 h-4 text-gray-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5"
        ></path>
      </svg>
      <p className="font-medium text-sm text-gray-500 ml-2">Voltar</p>
    </div>
  );
}
