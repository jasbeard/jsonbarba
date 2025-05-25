import { Dispatch, SetStateAction, useRef } from "react";
import { WeddingThemeInputWithButton } from "./WeddingThemedInputWithButton";
import { GuestData } from "@/pages/jasonandjosan/[section]";

export const ValidateRsvp = ({
  isLoading,
  setLoading,
  setValidateResponse,
}: {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setValidateResponse: Dispatch<SetStateAction<GuestData | null>>;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex flex-col gap-4 py-6">
      <p className="font-medium">
        Let&apos;s confirm your name on the guest list.
      </p>
      <WeddingThemeInputWithButton
        inputName="name"
        inputPlaceholder="Enter your invitation name"
        buttonLoading={isLoading}
        buttonText="Validate your invitation"
        buttonLoadingText="Validating"
        inputRef={inputRef}
        required={true}
        buttonOnClick={async (e) => {
          e.preventDefault();
          const name = document.getElementById('name') as HTMLInputElement;

          if (name.value && name.reportValidity()) {
            setValidateResponse(null);
            setLoading(true);
            const inviteName = document.getElementById("name") as HTMLInputElement;
            const data = await fetch(`/api/validateInvitation?name=${encodeURIComponent(inviteName.value)}`)
            .then((response) => {
              setLoading(false);
              return response.json();
            });

            setValidateResponse(data);
          }

          
        }}
        pattern="^[a-zA-Z]+( [a-zA-Z]+)+$"
        title="Please enter first name and last name"
      />
    </div> 
  );
};