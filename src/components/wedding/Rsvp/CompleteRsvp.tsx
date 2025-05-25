import { GuestData } from "@/pages/jasonandjosan/[[section]]";
import { WeddingThemeInputWithButton } from "./WeddingThemedInputWithButton";

export const CompleteRsvp = ({ response }: { response: GuestData | null }) => {
  return (
    <div className="flex flex-col mt-4">
      <p className="mb-4 font-medium">{response && response.message}</p>
      <div className="flex items-center">
        <WeddingThemeInputWithButton
          inputPlaceholder="Enter your email address"
          inputName="email_address"
          buttonText="Complete RSVP"
          inputType="email"
          buttonOnClick={() => {
            const email = document.getElementById("email_address") as HTMLInputElement;
            if (email.reportValidity() && email.value) {
              fetch(`/api/send?email=${encodeURIComponent(email.value)}&name=${encodeURIComponent(!!response && response.guestName)}`)
            }
            
          }}
        />
      </div>
    </div> 
  );
};