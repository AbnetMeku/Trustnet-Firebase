"use server";

import { z } from "zod";
import { initializeFirebase, addDocumentNonBlocking } from "@/firebase";
import { collection } from "firebase/firestore";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    company?: string[];
    message?: string[];
  } | null;
};

export async function submitContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const { firestore } = initializeFirebase();
    const submissionsCollection = collection(firestore, 'contact_form_submissions');
    
    const submissionData = {
      ...validatedFields.data,
      submissionDate: new Date().toISOString(),
    };
    
    addDocumentNonBlocking(submissionsCollection, submissionData);

    return {
      success: true,
      message: "Thank you for your message! We'll be in touch soon.",
      errors: null,
    };
  } catch (error) {
    console.error("Error saving contact form submission:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
      errors: null,
    };
  }
}
