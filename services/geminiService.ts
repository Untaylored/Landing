import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateContentPlan = async (niche: string): Promise<string[]> => {
  try {
    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: `Create a 4-week content calendar (28 articles) for a "${niche}" business.
        
        The strategy must follow this progression:
        Week 1: Awareness (Broad educational topics, high volume keywords). Focus on "What is" and "How to" guides.
        Week 2: Consideration (Comparison, "best of", problem solving). Focus on "Best X for Y" and "Alternatives to Z".
        Week 3: Decision (Product specific, case studies, buying guides). Focus on ROI and implementation.
        Week 4: Retention & Viral (Industry trends, thought leadership, expert tips). Focus on future predictions and contrarian takes.
        
        Strictly avoid generic AI titles. Use click-worthy, specific, and authoritative headlines that answer real user intent.`,
        config: {
          systemInstruction: "You are an expert SEO strategist. Your goal is to build high-authority topical maps that dominate search rankings. You analyze user intent deeply before suggesting titles.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING
            }
          },
          // Enable thinking for deeper strategic reasoning
          thinkingConfig: {
            thinkingBudget: 2048
          },
          // Ensure enough tokens for both thinking (2048) and the JSON output (~1000)
          maxOutputTokens: 5000 
        }
    });
    
    const text = response.text;
    if (!text) return [];
    
    const titles = JSON.parse(text);
    return Array.isArray(titles) ? titles : [];
  } catch (error) {
    console.error("Error generating strategy:", error);
    return [];
  }
};