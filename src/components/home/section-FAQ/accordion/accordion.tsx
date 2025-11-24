"use client"
import { useState } from "react"
import { ChevronDown } from "lucide-react";


type FaqProps = {
    pergunta?:string,
    resposta?:string
}

export function Accordion({pergunta, resposta}:FaqProps) {

    const [openItem, setOpenItem] = useState<string|null>(null)
    const handleItemClick = (value:string) => {
         setOpenItem(openItem===value?null:value)
        }

    return (
        <div className="rounded-md sm:p-9">
            <div className="w-full">
                <div className="rounded-md">
                    <button
                        onClick={() => handleItemClick("item-1")}
                        className="flex justify-between w-full px-4 py-2 text-left text-lg font-bold cursor-pointer text-white hover:underline dark:text-black">
                        {pergunta}
                        <ChevronDown />
                    </button>
                  

                    <div
                        style={{maxHeight:openItem==="item-1"?"none":0}}
                        className="overflow-hidden">
                            <div className=" font-aboutCompany font-medium p-4 ">
                                <p>{resposta}</p>
                            </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}