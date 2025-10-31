import { InputBox } from "./box-input/inputBox";


export function SectionContact() {
    return(
        <section id="contato" className="bg-gray-200 w-full mt-10 pt-20 pb-20 ">
            <div className="flex justify-between items-center">
                <div className="ml-20">
                    <h1 className="font-contact text-6xl">
                        Alguma sugestão? <br />
                        Nos envie!
                    </h1>
                </div>

                <InputBox />
            </div>
        </section>
    )
}