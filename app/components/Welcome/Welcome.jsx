import Image from "next/image";
import WelcomeButton from "@/app/components/Welcome/WelcomeButton";

const Welcome = () => {
  return (
    <section className="h-screen max-h-[1000px] w-full flex justify-center items-center">
      <div className="w-full h-2/6 flex flex-col justify-between items-center py-5 md:px-5 gap-16 relative">
        <h1 className="text-3xl text-center w-full md:text-6xl md:w-4/5 tracking-tight font-bold">
          The simplest and most intuitive app for creating your Ethereum wallet.
        </h1>
        <WelcomeButton />
        <div className="size-20 rotate-12 absolute right-5 mt-28 lg:size-40 lg:mt-10">
          <Image
            src={"/astronaut.webp"}
            alt="astronaut fun"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
