"use client"

import { 
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion"


type FaqProps = {
    pergunta:string,
    resposta:string
}

export function FaqAccordion({pergunta, resposta}:FaqProps) {


    return (
        <div className="px-5 md:px-0 p-5">
            <Accordion type="single" collapsible>
                <AccordionItem value="item">
                    <AccordionTrigger>
                        {pergunta}
                    </AccordionTrigger>
                    <AccordionContent>
                        {resposta}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}