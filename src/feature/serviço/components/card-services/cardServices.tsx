import Image from "next/image"

type CardAboutProps = {
    title: string;
    description: string;
    image:string;
    alt: string;
}

export function CardAbout({title, description, image, alt}: CardAboutProps){
    return (
        <div className="p-6 bg-white text-left rounded-2xl gap-4 border border-gray-200 hover:border-[#FF4100] transition-colors duration-200 ease-out">
            <div className="items-center bg-gray-200 inline-block p-2 rounded-lg ">
                <Image 
                src={image}
                alt={alt}
                width={30}
                height={30}
                />
            </div>
            <div className="flex flex-col">
               <h3 className="text-lg font-medium mb-2">
                    {title}
                </h3> 

                <p className=" text-stone-600
                leading-relaxed">
                    {description}
                </p>
            </div>  
        </div>
    )
}