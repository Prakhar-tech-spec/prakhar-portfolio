
"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { UnderlinedText } from "./ui/underlined-text";

const faqs = [
    {
        question: "How is We Brand You different?",
        answer: "We Brand You focuses on a holistic approach to personal branding. We don't just create content; we build a comprehensive strategy that integrates social media, video, paid ads, and AI automation to create a powerful and consistent brand presence. Our data-driven approach ensures that every action we take is aimed at achieving measurable results."
    },
    {
        question: "What kind of results can I expect?",
        answer: "You can expect significant growth in your online presence, including increased followers, engagement, and leads. Our clients have seen results like 50% month-over-month growth, going from 0 to 10k followers in 30 days, and a 10x increase in revenue from their YouTube channels. We focus on sustainable growth that translates into real business outcomes."
    },
    {
        question: "How do we communicate?",
        answer: "Communication is key to our process. We use a combination of scheduled strategy calls, a dedicated Slack channel for day-to-day communication, and regular performance reports to keep you informed. This ensures that you are always in the loop and that we are aligned with your goals."
    },
    {
        question: "If I cancel, do I get a refund?",
        answer: "We do not offer refunds on our services as our work involves significant upfront investment in strategy, research, and creative resources. However, you can cancel your subscription at any time. We believe in the quality of our work and are confident that you will be satisfied with the results."
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
            </div>
        </section>
    );
}
