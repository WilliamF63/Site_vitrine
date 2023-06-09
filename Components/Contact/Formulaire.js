const Formulaire = () => {
    return (
        <div className="bg-gray-600 mb-16 flex justify-center">

            <form className="flex items-center flex-col w-1/2">
                <div className="mb-4">
                    <label htmlFor="firstName" className="block font-bold mb-1">Prénom</label>
                    <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="lastName" className="block font-bold mb-1">Nom</label>
                        <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="subject" className="block font-bold mb-1">Objet</label>
                    <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block font-bold mb-1">Message</label>
                    <textarea id="message" className="w-full px-3 py-2 border border-gray-300 rounded" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Envoyer
                </button>
            </form>
        </div>
    )
}

export default Formulaire