import Image from "next/image";

const About = () => {
  return (
    <section className=" w-full flex justify-center mb-24 ">
      <div className="flex flex-col md:flex-row w-11/12">
        <section className="w-full md:w-2/4">
          <h2 className="text-5xl md:text-6xl font-bold break-words tracking-wide mb-5">
            How does our generator work?
          </h2>
          <div className="text-xl font-medium flex flex-col gap-2">
            <p>
              ● Our generator uses the <strong>Bip39</strong> and{" "}
              <strong>Ether.js</strong> libraries to create a seed phrase, and
              from it, generate your private and public keys.
            </p>
            <p>
              ● These keys will allow you to access and manage your
              cryptocurrencies safely.
            </p>
          </div>
        </section>
        <section className="w-full md:w-2/4 flex flex-col items-center justify-center">
          <div className="w-24 h-28 rotate-45 relative">
            <Image
              src="/ledger2.svg"
              alt="hardware wallet"
              fill
              className="object-cover"
            />
          </div>
          <p className="w-3/4 md:w-3/5 break-words text-neutral-700">
            It is highly recommended to opt for more secure solutions such as a
            hardware wallet.
          </p>
        </section>
      </div>
    </section>
  );
};

export default About;
