import { InputBox } from "./box-input/inputBox";


export function SectionContact() {
    return(
        <section id="contato" className=" bg-gray-200 mt-10 pt-10 pb-10 ">
            <div className="flex flex-col justify-center lg:justify-between">
                <div className="text-center">
                    <h1 className="font-contact text-2xl lg:text-6xl">
                        Alguma sugestão? <br />
                        Nos envie!
                    </h1>
                </div>

                <InputBox />
        
            </div>
        </section>
    )
}