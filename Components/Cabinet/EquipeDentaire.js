import Image from "next/image";
const EquipeDentaire = ({ name, role, imageUrl }) => {
    
    return(
        <div className="flex flex-col items-center">
        <div className="bg-gray-300 w-16 h-16 rounded-full mb-2">
          <Image className="w-16 h-16 rounded-full" src={imageUrl} alt={name} width={50} height={50} />
        </div>
        <div className="text-center">
          <h2 className="text-lg font-bold">{name}</h2>
          <p>{role}</p>
        </div>
      </div>
    )
}

export default EquipeDentaire;