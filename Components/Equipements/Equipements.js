import Image from "next/image";
const Equipements = () => {
    return (
        <>
      <div className="text-center mt-16">
        <h1 className="text-5xl pt-16 uppercase md:text-6xl relative inline-block pb-8">
          Equipements
          <span className="block h-px bg-black absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2"></span>
        </h1>
        <p className='mt-16 text-justify text-l mx-6 md:text-lg pb-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. 
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
              pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, 
              vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis 
              pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo 
              ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
              Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. 
              Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, 
              sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit 
              id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. 
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis 
              magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,</p>
      </div>
      <div className="flex justify-start w-full sm:w-1/2 my-16 ">
        <Image className="w-full h-auto"
            src='/../public/images/equipements/eqp-dt.jpg'
            alt="Equipement 1"
            width={500}
            height={30}
        />
      </div>
    </>
    )
}
export default Equipements;
