import { ChatBubble } from "./ChatBubble";

export function ChatSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <h3 className="text-5xl font-semibold mb-6 tracking-tight">
        Ask. Compare. Save.
      </h3>
      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
        Talk to Clarence just like you&apos;d text a friend who happens to be
        great at insurance.
      </p>
      <div className="mx-auto max-w-md rounded-3xl border border-gray-200 bg-white p-8 shadow-sm text-left">
        <ChatBubble
          who="user"
          text="Hey Clarence, am I covered for delivery drivers?"
        />
        <ChatBubble
          who="bot"
          text="Not yet! I found three options that include non-owned auto coverage. Want to see them?"
        />
      </div>
    </section>
  );
}

