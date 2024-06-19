import Image from "next/image";
import BoxButton from "../ReactScroll/BoxButton";

const Welcom = () => {
  return (
    <section className="h-dvh max-h-[1000px] w-full flex justify-center items-center">
      <div className="w-full h-2/6 flex flex-col justify-between items-center py-5 md:px-5 gap-16 relative">
        <h1 className="text-3xl text-center w-full md:text-6xl md:w-4/5 tracking-tight font-bold">
          The simplest and most intuitive app for creating your Ethereum wallet.
        </h1>
        <BoxButton section={"generator"} />
        <div className="size-20 rotate-12 absolute right-5 mt-28 lg:size-40 lg:mt-10">
          <Image
            id="robot"
            src={"/111.png"}
            alt="robot fun"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcom;
