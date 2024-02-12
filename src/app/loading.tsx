import Image from "next/image";

const Loading = () => {
  return (
    <div className="h-screen w-screen grid m-auto place-items-center">
        <Image  className=" animate-bounce " src="/logo.svg" height={300} width={300} alt="flexibble"></Image>
    </div>
  );
};

export default Loading;
