module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.content) {
      data.summary = generateSummary(data.content);
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.content) {
      data.summary = generateSummary(data.content);
    }
  },
};

function generateSummary(content) {
  try {
    const plainText = extractText(content);
    const cleanText = plainText.replace(/\s+/g, " ").trim();
    return cleanText.length > 10 ? cleanText.slice(0, 10) : cleanText;
  } catch (err) {
    console.error("Error generating summary:", err);
    return "";
  }
}
function extractText(value) {
  if (!value) return "";

  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value.map(extractText).join(" ");
  }

  if (typeof value === "object") {
    if (value.text) return value.text;
    if (value.children) return extractText(value.children);
    return Object.values(value).map(extractText).join(" ");
  }

  return "";
}
