

type CardAboutProps = {
    title: string
    description: string
}

export function CardAbout({title, description}: CardAboutProps){
    return (
        <div className="bg-white text-center w-[50%] p-6 rounded-2xl">
            <h1 className="font-h1serv text-3xl">
                {title}
            </h1>
            <p className="font-pserv p-5">
                {description}
            </p>
        </div>
    )
}