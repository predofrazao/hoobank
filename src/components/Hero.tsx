import { discount, robot } from "../assets";
import styles from "../style";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`${styles.paddingY} flex md:flex-row flex-col`}>
    <div className={`xl:px-0 sm:px-16 px-6 flex-1 ${styles.flexStart} flex-col`}>
      <div className="mb-2 py-[6px] px-4 flex flex-row items-center rounded-[10px] bg-discount-gradient">
        <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For{" "}
          <span className="text-white">1 Month </span> Account
        </p>
      </div>

      <div className="w-full flex flex-row justify-between items-center">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading=[100px] leading-[75px]">
          The Next <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Generation</span>{" "}
        </h1>
        <div className="md:mr-4 mr-0 ss:flex hidden">
          <GetStarted />
        </div>
      </div>

      <h1 className="w-full font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading=[100px] leading-[75px]">
        Payment Method.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards most likely to fit your
        needs. We examine annual percentage rates, annual fees.
      </p>
    </div>

    <div className={`md:my-0 my-10 relative flex-1 flex ${styles.flexCenter} `}>
      <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5] object-contain" />

      <div className="w-[40%] h-[35%] absolute top-0 pink__gradient z-0" />
      <div className="w-[80%] h-[80%] absolute top-0 bottom-40 rounded-full white__gradient z-1" />
      <div className="w-[50%] h-[50%] absolute right-0 bottom-20 blue__gradient z-0" />
    </div>

    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);
export default Hero;
