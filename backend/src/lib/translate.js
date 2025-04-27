import axios from "axios";

export async function translateMessage(text, source, target) {
  const resp = await axios.post("http://localhost:5000/translate", {
    q: text,
    source,
    target,
  });
  return resp.data.translatedText;
}