// stores/foretagstadStore.ts
import { create } from "zustand";
import { toast } from "sonner";

interface ForetagstadFormData {
  name: string;
  kvm: string;
  adress: string;
  postalcode: string;
  city: string;
  email: string;
  message: string;
  phone: string;
  subject: string;
}

interface ForetagstadState {
  isSubmitting: boolean;
  submitForetagstad: (data: ForetagstadFormData) => Promise<void>;
}
const api = process.env.NEXT_PUBLIC_API_KEY || "http://localhost:4000";

export const useForetagstadStore = create<ForetagstadState>((set) => ({
  isSubmitting: false,

  submitForetagstad: async (data: ForetagstadFormData) => {
    set({ isSubmitting: true });

    try {
      const response = await fetch(`${api}/foretagstad/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit företagsstädning form");
      }

      toast.success("Meddelande skickat!", {
        description: "Vi återkommer till dig så snart som möjligt.",
      });
    } catch (error) {
      console.error("Error submitting företagsstädning:", error);
      toast.error("Något gick fel", {
        description: "Försök igen senare.",
      });
      throw error;
    } finally {
      set({ isSubmitting: false });
    }
  },
}));
