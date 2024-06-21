import Image from "next/image";
const MoreInfo = () => {
  return (
    <section id="moreInfo" className="w-full flex justify-center mb-24">
      <div className="w-11/12  flex flex-col md:flex-row">
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl md:text-5xl font-bold break-words tracking-wide mb-5">
            BIP39 and Ether.js: Two Essential Libraries for Blockchain Security
            and Development
          </h2>
          <div className="text-xl font-medium flex flex-col gap-2">
            <p>
              ● BIP39: It is a specification that defines a process for
              generating mnemonic phrases (seed phrases) from a series of words,
              used to create and recover private keys in cryptocurrencies. A
              typical mnemonic phrase consists of 12, 15, 18, 21, or 24 words.
            </p>
            <p>
              ● Ether.js: It is a JavaScript library designed to interact with
              the Ethereum blockchain, providing a complete API for creating and
              managing accounts, signing transactions, and communicating with
              smart contracts. It is essential for developers working with
              decentralized applications (DApps) and smart contracts on the
              Ethereum network.
            </p>
          </div>
        </div>
        <div className="w-full h-52 md:w-1/3 md:h-full p-6">
          <div className="relative w-full h-full">
            <Image
              src={"/astronaut2.webp"}
              alt="astrounaut reading a book"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreInfo;
