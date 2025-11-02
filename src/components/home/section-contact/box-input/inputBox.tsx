

export function InputBox() {
    return (
        <div>
            <form className="flex flex-col gap-4 mr-20">
                <input 
                    type="text" 
                    name="box-name" 
                    id="box-name" 
                    placeholder="Digite seu nome" 
                    className="bg-white rounded-lg mr-20 p-2 w-full" 
                />

                <input 
                    type="email" required
                    name="box-email" 
                    id="box-email" 
                    placeholder="Digite seu email"
                    className="bg-white rounded-lg mr-20 p-2 w-full" 
                />

                <textarea 
                name="opiniao" 
                id="opiniao"
                placeholder="Digite sua opinião"
                className="bg-white rounded-lg p-2"
                >
                </textarea>

                <div>
                    <button 
                    type="submit"
                    className="bg-black hover:bg-stone-900 text-white text-lg rounded-lg cursor-pointer p-4 w-full">
                        Enviar
                </button>
            </div>  
            </form>


          
        </div>

    )
}