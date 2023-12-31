// "use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FaqsSection() {
  const faqsList = [
    {
      q: "What are some random questions to ask?",
      a: "That's exactly the reason we created this random question generator. There are hundreds of random questions to choose from so you're able to find the perfect random question.",
    },
    {
      q: "Do you include common questions?",
      a: "This generator doesn't include most common questions. The thought is that you can come up with common questions on your own so most of the questions in this generator.",
    },
    {
      q: "Can I use this for 21 questions?",
      a: "Yes! there are two ways that you can use this question generator depending on what you're after. You can indicate that you want 21 questions generated.",
    },
    {
      q: "Are these questions for girls or for boys?",
      a: "The questions in this generator are gender neutral and can be used to ask either male of females (or any other gender the person identifies with).",
    },
    {
      q: "What do you wish you had more talent doing?",
      a: "If you've been searching for a way to get random questions, you've landed on the correct webpage. We created the Random Question Generator to ask you as many random questions as your heart desires.",
    },
  ];

  return (
    <section className="leading-relaxed max-w-screen-xl py-36 mx-auto px-4 md:px-8">
      <div className="space-y-3 text-center">
        <h3 className="font-semibold text-indigo-600">
          Frequently asked questions
        </h3>
        <p className="mt-3 tracking-tight drop-shadow text-transparent bg-clip-text bg-gradient-to-r from-zinc-500 to-black text-3xl font-extrabold sm:text-4xl">
          All information you need to know
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        <Accordion type="single" collapsible className="w-full">
          {faqsList.map((o, i) => (
            <AccordionItem key={i} value={i + ""}>
              <AccordionTrigger>{o.q}</AccordionTrigger>
              <AccordionContent>{o.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
