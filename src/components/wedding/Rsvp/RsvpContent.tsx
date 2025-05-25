import { CompletionData, GuestData } from "@/pages/jasonandjosan/[section]";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ValidateRsvp } from "./ValidateRsvp";
import { CompleteRsvp } from "./CompleteRsvp";

const RsvpContent = ({
  validateResponse,
  comletionResponse,
  isLoading,
  setLoading,
  setValidateResponse,
  setCompletionResponse
}: {
  validateResponse: GuestData | null;
  comletionResponse: CompletionData | null;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setValidateResponse: Dispatch<SetStateAction<GuestData | null>>;
  setCompletionResponse: Dispatch<SetStateAction<CompletionData | null>>;
}) => {
  useEffect(() => {
    setValidateResponse(null);
    setCompletionResponse(null)
  }, [setValidateResponse, setCompletionResponse]);

  return (
    <>
      {(!validateResponse || !validateResponse.isInvited) && !comletionResponse && (
        <ValidateRsvp
          isLoading={isLoading}
          setLoading={setLoading}
          setValidateResponse={setValidateResponse}
        />
      )}
      {(validateResponse && (validateResponse.isInvited && !validateResponse.did_confirmed)) ? (
        <CompleteRsvp
          completionResponse={comletionResponse}
          validateResponse={validateResponse}
          setCompletionResponse={setCompletionResponse}
          setValidateResponse={setValidateResponse}
        />
      ) : (
        <div className="break-words mt-4 font-medium">{validateResponse?.message}</div>
      )}
    </>
  );
};

export default RsvpContent;