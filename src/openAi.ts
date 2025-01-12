import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const MAX_OPEN_AI_QUERY_LENGTH = 200000;
export const MODEL_NAME = "gpt-3.5-turbo-16k";
export const TEMPERATURE = 0.5;
export const MAX_TOKENS = 512;

export const openai = new OpenAIApi(configuration);
