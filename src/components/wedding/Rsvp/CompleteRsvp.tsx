import { CompletionData, GuestData } from "@/pages/jasonandjosan/[section]";
import { WeddingThemeInputWithButton } from "./WeddingThemedInputWithButton";
import { Dispatch, SetStateAction, useState } from "react";

export const CompleteRsvp = ({
  validateResponse,
  completionResponse,
  setCompletionResponse,
  setValidateResponse
}: {
  validateResponse: GuestData | null;
  completionResponse: CompletionData | null;
  setCompletionResponse: Dispatch<SetStateAction<CompletionData | null>>;
  setValidateResponse: Dispatch<SetStateAction<GuestData | null>>;
}) => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col mt-4">
      {completionResponse ? (
        <div className="break-words mt-2 font-medium">{completionResponse?.message}</div>
      ) : (
        <>
          <p className="mb-4 font-medium">{validateResponse && validateResponse.message}</p>
          <div className="flex items-center">
            <WeddingThemeInputWithButton
              inputPlaceholder="Enter your email address"
              inputName="email_address"
              buttonText="Complete RSVP"
              inputType="email"
              buttonLoading={loading}
              buttonLoadingText="Completing..."
              buttonOnClick={async () => {
                setCompletionResponse(null);
                const email = document.getElementById("email_address") as HTMLInputElement;
                if (email.reportValidity() && email.value) {
                  setLoading(true);
                  const data = 
                    await fetch(`/api/send?email=${encodeURIComponent(email.value)}&name=${encodeURIComponent(!!validateResponse && validateResponse.guestName)}&gi=${encodeURIComponent(validateResponse?.guest_id as number)}`)
                    .then((response) => {
                      setLoading(false);
                      return response.json();
                    });

                    setCompletionResponse(data);
                }
              }}
            />
          </div>
        </>
      )}
    </div> 
  );
};