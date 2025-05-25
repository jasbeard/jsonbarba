import { HTMLInputTypeAttribute, MouseEventHandler } from "react";

export const WeddingThemeInputWithButton = ({
  buttonLoading = false,
  buttonOnClick,
  inputPlaceholder,
  buttonText,
  buttonLoadingText,
  inputName,
  inputType = 'text'
}: {
  buttonLoading?: boolean;
  buttonOnClick: MouseEventHandler<HTMLButtonElement> | undefined;
  buttonText: string;
  buttonLoadingText?: string;
  inputPlaceholder: string;
  inputName: string
  inputType?: HTMLInputTypeAttribute;
}) => {
  return (
    <div className="flex w-full flex-col md:flex-row md:items-center gap-4">
      <div>
        <div className="md:w-[484px] border p-2 bg-white rounded-md text-sm md:text-base">
          <input
            type={inputType}
            name={inputName}
            id={inputName}
            placeholder={inputPlaceholder}
            className="bg-white outline-none w-full p-0 h-full"
          />
        </div>
      </div>
      <button
        className="flex rounded-md font-medium py-1.5 px-4 bg-stone-300 items-center h-10"
        disabled={buttonLoading}
        onClick={buttonOnClick}>
          {buttonLoading && 
            <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
              <circle className="" cx="12" cy="12" r="10" stroke="white" fill="transparent" strokeWidth="4"></circle>
              <path className="opacity-75" fill="#515152" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          }
          <span className="w-full text-center text-sm md:text-base">{!buttonLoading ? buttonText : (buttonLoadingText ?? '')}</span>
      </button>
    </div>
  );
};