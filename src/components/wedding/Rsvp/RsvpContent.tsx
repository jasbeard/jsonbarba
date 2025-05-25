import { GuestData } from "@/pages/jasonandjosan/[section]";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ValidateRsvp } from "./ValidateRsvp";
import { CompleteRsvp } from "./CompleteRsvp";

const RsvpContent = ({
  response,
  isLoading,
  setLoading,
  setResponse
}: {
  response: GuestData | null;
  isLoading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  setResponse: Dispatch<SetStateAction<GuestData | null>>;
}) => {
  useEffect(() => {
    setResponse(null)
  }, [setResponse]);

  return (
    <>
      {(!response || !response.isInvited) && (
        <ValidateRsvp
          isLoading={isLoading}
          setLoading={setLoading}
          setResponse={setResponse} 
        />
      )}
      {(response && (response.isInvited && !response.did_confirmed)) ? (
        <CompleteRsvp response={response} />
      ) : (
        <span className="break-words mt-4 font-medium">{response?.message}</span>
      )}
    </>
  );
};

export default RsvpContent;