
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the Official Louisiana State Bar Association (LSBA) Digital Assistant. 
Your tone is institutional, regulatory, professional, and helpful. 
You do not use hype or sales language. 
You provide information based on LSBA regulations, CLE requirements, licensing, and public resources. 
If asked for legal advice, you must state that the LSBA provides referrals and public information, but not legal advice.
Refer users to the Lawyer Referral Service for finding an attorney.
Refer users to the Disciplinary process portal for complaints.
Mention that all attorneys in LA must be members of the LSBA.
`;

export const getLSBAAssistantResponse = async (userMessage: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.2, // Low temperature for factual, consistent responses
      },
    });
    return response.text || "I am sorry, I am unable to process that request at this time. Please contact the LSBA office directly.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The assistant is currently unavailable. Please use the contact forms for urgent regulatory inquiries.";
  }
};
