import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => (
  <div
    className={`${styles.flexCenter} w-[140px] h-[140px] p-[2px] rounded-full bg-blue-gradient cursor-pointer`}
  >
    <div className={`${styles.flexCenter} flex-col w-[100%] h-[100%] rounded-full bg-primary`}>
      <div className={`${styles.flexCenter} flex-row`}>
        <p className="mr-2 font-poppins font-medium text-[18px] leading-[23px]">
          <span className="text-gradient">Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain" />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23px]">
        <span className="text-gradient">Started</span>
      </p>
    </div>
  </div>
);

export default GetStarted;
