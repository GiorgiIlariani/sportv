import Image from "next/image";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { CiMenuBurger } from "react-icons/ci";
import NavItems from "./NavItems";
import Link from "next/link";

const MobileTopbar = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle text-xl">
          <CiMenuBurger />
        </SheetTrigger>
        <SheetContent
          side={"top"}
          className="flex flex-col gap-6 bg-white md:hidden"
        >
          <Link href="/">
            <Image
              src="/images/sportv.png"
              alt="logo"
              width={128}
              height={38}
            />
          </Link>
          <Separator className="border border-gray-50" />
          <NavItems />

          <div>
            <p>
              საიტი Livetv.ge არ აწარმოებს რაიმე სახის ტრანსლაციას. ეს საიტი
              უბრალოდ ავრცელებს იმ ინფორმაციას, რომელიც საჯაროდ ისედაც
              ხელმისაწვდომია.
            </p>

            <div className="flex justify-between flex-wrap">
              {/* <Image
                src="/images/advertisement1.jpg"
                alt="advertisement"
                width={306}
                height={306}
                className="lg:w-[306px] lg:h-[306px] w-[170px] h-[200px] object-contain"
              /> */}
              <Image
                src="/images/advertisement2.jpg"
                alt="advertisement"
                width={306}
                height={306}
                className="lg:w-[306px] lg:h-[306px] w-[170px] h-[200px] object-contain"
              />
              {/* <Image
                src="/images/advertisement3.jpg"
                alt="advertisement"
                width={306}
                height={306}
                className="lg:w-[306px] lg:h-[306px] w-[170px] h-[200px] object-contain"
              /> */}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileTopbar;
