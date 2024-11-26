import Image from "next/image";
import React from "react";
import RunningText from "./RunningText";

const Advertisements = () => {
  return (
    <aside className="flex-col gap-4 w-auto lg:w-[300px] hidden md:flex">
      {/* <p>
        საიტი Livetv.ge არ აწარმოებს რაიმე სახის ტრანსლაციას. ეს საიტი უბრალოდ
        ავრცელებს იმ ინფორმაციას, რომელიც საჯაროდ ისედაც ხელმისაწვდომია.
      </p> */}

      {/* <Image
        src="/images/advertisement1.jpg"
        alt="advertisement"
        width={306}
        height={306}
        className="lg:w-[306px] lg:h-[306px] w-[170px] h-[200px] object-contain"
      /> */}
      {/* <Image
        src="/images/advertisement2.jpg"
        alt="advertisement"
        width={306}
        height={306}
        className="lg:w-[306px] lg:h-[306px] w-[170px] h-[200px] object-contain"
      /> */}
      {/* <Image
        src="/images/advertisement3.jpg"
        alt="advertisement"
        width={306}
        height={306}
        className="lg:w-[306px] lg:h-[306px] w-[170px] h-[200px] object-contain"
      /> */}
      {/* <RunningText text="Special Offer: 50% off on all products! 🎉 Don't miss out! Special Offer: 50% off on all products! 🎉 Don't miss out!" /> */}
    </aside>
  );
};

export default Advertisements;
