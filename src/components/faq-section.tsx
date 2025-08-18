
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UnderlinedText } from "./ui/underlined-text";
import Link from "next/link";

const faqs = [
    {
        question: "How is We Brand You different?",
        answer: "We blend smart strategy with AI automation and killer creative for a complete personal branding solution. Our data-driven approach ensures measurable results and a powerful online presence."
    },
    {
        question: "What kind of results can I expect?",
        answer: "Expect significant growth in followers, engagement, and leads. Our clients see rapid, sustainable growth that directly translates into real business outcomes and increased revenue."
    },
    {
        question: "How do we communicate?",
        answer: "We use a dedicated Slack channel for daily updates and scheduled strategy calls for planning. You'll always be in the loop with regular, clear performance reports."
    },
    {
        question: "If I cancel, do I get a refund?",
        answer: "We don't offer refunds due to the significant upfront work involved in our strategies. However, you are free to cancel your subscription at any time, no questions asked."
    }
];

export function FaqSection() {
    return (
        <section id="faq" className="py-20 md:py-32">
            <div className="container max-w-3xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline">
                        Frequently Asked <UnderlinedText>Questions</UnderlinedText>
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Have questions? We have answers. Here are some of the most common questions we get.
                    </p>
                </div>
                <div className="mt-12">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                                <AccordionTrigger className="text-lg font-semibold text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
                 <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground mt-8">
                    <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                    <Link href="/refund-policy" className="hover:text-primary transition-colors">Refund Policy</Link>
                    <Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link>
                </div>
            </div>
        </section>
    );
}
