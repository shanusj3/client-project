"use server";

import { z } from "zod";
import { inquireAboutExpertise } from "@/ai/flows/ai-powered-expertise-inquirer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export async function submitContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the errors and try again.",
      success: false,
    };
  }

  // Simulate sending the form data
  console.log("Contact form submitted:", validatedFields.data);

  return {
    message: "Thank you for your message! I will get back to you soon.",
    success: true,
  };
}

export async function getAIResponse(query: string, siteContent: string) {
  "use server";
  try {
    const result = await inquireAboutExpertise({ query, siteContent });
    return result.answer;
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm sorry, but I encountered an error while processing your request. Please try again later.";
  }
}
