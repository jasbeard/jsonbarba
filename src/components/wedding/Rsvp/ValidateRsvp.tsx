import { Dispatch, SetStateAction } from "react";
import { WeddingThemeInputWithButton } from "./WeddingThemedInputWithButton";
import { GuestData } from "@/pages/jasonandjosan/[section]";

export const ValidateRsvp = ({
  isLoading,
  setLoading,
  setResponse
}: {
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setResponse: Dispatch<SetStateAction<GuestData | null>>;
}) => {
  // TODO: fix responsive concern
  return (
    <div className="flex flex-col gap-4 my-4">
      <p className="font-medium">
        Let&apos;s confirm if your name appears on the guest list.
      </p>
      <WeddingThemeInputWithButton
        inputName="name"
        inputPlaceholder="Enter your name"
        buttonLoading={isLoading}
        buttonText="Validate your invitation"
        buttonLoadingText="Validating"
        buttonOnClick={async () => {
          const name = (document.getElementById('name') as HTMLInputElement).value;
          if (!name) {
            return;
          }

          setResponse(null);
          setLoading(true);
          const inviteName = document.getElementById("name") as HTMLInputElement;
          const data = await fetch(`/api/validateInvitation?name=${encodeURIComponent(inviteName.value)}`)
          .then((response) => {
            setLoading(false);
            return response.json();
          });

          setResponse(data);
        }}
      />
    </div> 
  );
};