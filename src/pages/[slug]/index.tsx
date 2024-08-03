import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Slug() {
  const router = useRouter();
  const textCopy = "shopex";
  const [alertCount, setAlertCount] = useState(1);

  const handleCopy = async (e: string) => {
    try {
      await navigator.clipboard.writeText(e);
      setAlertCount((prevCount) => prevCount + 1);
      alert("Password copied! Please klik OK");
      if (alertCount > 0) {
        window.open(
          `https://${router.asPath}`,
          "_blank",
          "noopener noreferrer"
        );
      }
    } catch (error) {
      console.log("Failed to copy: ", error);
      window.open("/");
      return error;
    }
  };

  return (
    <div className="container max-w-[1200px] mx-auto px-10 max-h-screen">
      <div className="flex text-center justify-center items-center min-h-screen">
        <div className="flex gap-10 flex-col rounded-lg px-10 lg:px-20 py-10 lg:py-32 shadow-lg bg-neutral-100">
          <h2 className="text-lg lg:text-xl">
            Please enter the following password, <br /> after you click copy
            password
          </h2>
          <div
            onClick={() => handleCopy(textCopy)}
            className="relative py-2 border border-black rounded-lg cursor-pointer"
          >
            <h2 className="text-lg">
              <b>&nbsp;{textCopy}</b>
            </h2>
            <div
              className="absolute top-[5px] right-[5px] hover:opacity-25 cursor-pointer"
              title="copy"
            >
              <Image
                src={"/assets/icons/copy.png"}
                alt="icon-copy"
                width={20}
                height={20}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
