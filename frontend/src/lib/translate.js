export async function translateText(q, target, source = "auto") {
  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ q, source, target }),
  });
  const data = await res.json();
  return data.translatedText;
}
