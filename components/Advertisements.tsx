import Image from "next/image";
import React from "react";

const Advertisements = () => {
  return (
    <aside className="flex flex-col gap-4 w-[300px]">
      <p>
        საიტი Livetv.ge არ აწარმოებს რაიმე სახის ტრანსლაციას. ეს საიტი უბრალოდ
        ავრცელებს იმ ინფორმაციას, რომელიც საჯაროდ ისედაც ხელმისაწვდომია.
      </p>

      <Image
        src="/images/advertisement1.jpg"
        alt="advertisement"
        width={306}
        height={306}
        className="w-[306px] h-[306px] object-contain"
      />
      <Image
        src="/images/advertisement2.jpg"
        alt="advertisement"
        width={306}
        height={306}
        className="w-[306px] h-[306px] object-contain"
      />
      <Image
        src="/images/advertisement3.jpg"
        alt="advertisement"
        width={306}
        height={306}
        className="w-[306px] h-[306px] object-contain"
      />
    </aside>
  );
};

export default Advertisements;
