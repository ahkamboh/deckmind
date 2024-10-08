import Image from "next/image";
import Spline from '@splinetool/react-spline/next';
import Link from "next/link";
import { SignInButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      <nav className="z-50 absolute top-0 left-0 w-full flex justify-between p-7">
        <div className="Nephilm-400 text-2xl z-10">Deck Mind</div>
        <Link href={"/generation"} className="poppins-medium  font-bold gradient-border-button">Try Now!</Link>
      </nav>
      <div className="text-center px-4 z-50 absolute space-y-7  top-[50%] w-full left-[50%] -translate-x-1/2 -translate-y-1/2">
        <div className="grid gap-3">
          <div className="Nephilm-Italic-600 text-4xl z-40">unlock knowledge</div>
          <div className="poppins-bold text-5xl gradient-text">Embrace the Quest</div>
        </div>
        <div className=" text-xs text-[#A6AAB2]">Where Every Question Unveils a World of Wisdom,
          Sparking the Flames of Learning <br /> and Illuminating the Path to Intellectual Brilliance!</div>
        <div className="w-full flex justify-center scale-75"><img src="/line.png" alt="" /></div>
        <div className="flex justify-center items-center gap-4">
          {/* <div className="poppins-medium  font-bold gradient-border-button2 w-fit text-sm"></div> */}
          <button
            className="group/button gradient-border-button2 relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-800/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out  hover:shadow-xl hover:shadow-gray-600/50 border border-white/20"
          >
            <Link href={"https://pay.sadabiz.co.uk/invoice/9c978613-8cd7-4432-9e0f-0be833093d6b"} className="text-sm">Subscription</Link>
            <div
              className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
            >
              <div className="relative h-full w-10 bg-white/20"></div>
            </div>
          </button>
       

          <SignInButton
            fallbackRedirectUrl="/generation"
            signUpFallbackRedirectUrl="/onboarding"
          >
         <button  className="poppins-medium  font-bold gradient-border-button w-fit text-sm ">Try Now!</button>
          </SignInButton>
        </div>
      </div>
      <div className="absolute  top-[50%] w-full left-[50%] -translate-x-1/2 -translate-y-1/2 h-full">
        <Spline
          scene="https://prod.spline.design/Cd695Ckh0GnuY2jh/scene.splinecode"
        />
      </div>
    </div>
  );
}
