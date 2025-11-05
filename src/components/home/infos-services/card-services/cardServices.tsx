import Image from "next/image"

type CardAboutProps = {
    title: string
    description: string
    image:string
}

export function CardAbout({title, description, image}: CardAboutProps){
    return (
        <div className="flex items-center bg-white text-left p-3 lg:p-6 rounded-2xl gap-4">
            <div className="flex items-center">
                <Image 
                src={image}
                alt=''
                width={30}
                height={30}
                />
            </div>
            <div className="flex flex-col">
               <h1 className="font-h1serv text-lg lg:text-3xl">
                    {title}
                </h1> 

                <p className="font-pserv text-sm lg:text-base text-stone-600">
                    {description}
                </p>
            </div>
            
            
        </div>
    )
}