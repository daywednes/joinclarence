export function ChatBubble({
  who = "bot",
  text = "",
}: {
  who?: "bot" | "user";
  text: string;
}) {
  const isUser = who === "user";
  return (
    <div
      className={`mb-4 max-w-[85%] rounded-2xl px-5 py-3 text-base ${
        isUser
          ? "ml-auto bg-[#0057d9] text-white"
          : "bg-gray-50 border border-gray-200 text-gray-800"
      }`}
    >
      {text}
    </div>
  );
}

