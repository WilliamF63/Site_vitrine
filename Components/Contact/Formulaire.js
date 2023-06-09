import React, { useState } from 'react';

const Formulaire = () => {
    const [constData, setFormData] = useState({
        firsName : '',
        lastName : '',
        object : '',
        message : ''
    })
    const handleChange = (e) => {
        setFormData({...formData, [e.target.id]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <div className="bg-gray-700 mb-16 flex justify-center text-white ">

            <form className="flex items-center flex-col w-1/2 mt-6">
            <div className="mb-4 flex w-full">
                    <div className="mr-2 w-full">
                        <label htmlFor="firstName" className="block font-bold mb-1">Prénom</label>
                        <input type="text" id="firstName" className="w-full px-3 py-2 border border-gray-300 rounded text-black" />
                    </div>
                    <div className="w-full">
                        <label htmlFor="lastName" className="block font-bold mb-1">Nom</label>
                        <input type="text" id="lastName" className="w-full px-3 py-2 border border-gray-300 rounded text-black" />
                    </div>
                </div>
                <div className="mb-4 w-full">
                    <label htmlFor="subject" className="block font-bold mb-1">Objet</label>
                    <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded text-black" />
                </div>
                <div className="mb-4 w-full h-full">
                    <label htmlFor="message" className="block font-bold  mb-1">Message</label>
                    <textarea id="message" className="w-full h-full px-3 py-2 border border-gray-300 rounded text-black" rows="4"></textarea>
                </div>
                <button type="submit" className="bg-cyan-900 hover:bg-cyan-950 text-white font-bold py-2 px-4 rounded my-10">
                    Envoyer
                </button>
            </form>
        </div>
    )
}

export default Formulaire