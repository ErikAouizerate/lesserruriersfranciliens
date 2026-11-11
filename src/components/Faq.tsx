import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Props = {
  items: { question: string; answer: string }[];
};

// Answers stay in the DOM when closed so they remain indexable.
export function Faq({ items }: Props) {
  return (
    <Accordion className="max-w-3xl rounded-lg border bg-card px-6">
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
            {item.question}
          </AccordionTrigger>
          <AccordionContent keepMounted className="pb-5 text-[0.95rem] text-muted-foreground">
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
