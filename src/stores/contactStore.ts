// store/useContactStore.ts
import { create } from "zustand";
import { toast } from "sonner";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactState {
  isSubmitting: boolean;
  contacts: ContactFormData[];
  submitContact: (data: ContactFormData) => Promise<void>;
  fetchContacts: () => Promise<void>;
}

export const useContactStore = create<ContactState>((set) => ({
  isSubmitting: false,
  contacts: [],

  submitContact: async (data: ContactFormData) => {
    set({ isSubmitting: true });

    const api = process.env.NEXT_PUBLIC_API_URL;

    try {
      // Get JWT token from localStorage or your auth store
      const token = localStorage.getItem("token"); // Adjust based on your auth implementation

      const response = await fetch(`${api}/contact/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit contact");
      }

      const result = await response.json();

      toast.success("Meddelande skickat!", {
        description: "Vi återkommer till dig så snart som möjligt.",
      });

      return result;
    } catch (error) {
      console.error("Error submitting contact:", error);
      toast.error("Något gick fel", {
        description: "Försök igen senare.",
      });
      throw error;
    } finally {
      set({ isSubmitting: false });
    }
  },

  fetchContacts: async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch contacts");
      }

      const contacts = await response.json();
      set({ contacts });
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast.error("Kunde inte hämta kontakter");
    }
  },
}));
