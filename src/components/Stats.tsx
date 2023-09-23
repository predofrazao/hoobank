import { stats } from "../constants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-grow flex-wrap sm:mb-20 mb-6`}>
    {stats.map(({ id, title, value }) => (
      <div key={id} className={`m-3 flex-1 flex items-center justify-start flex-row`}>
        <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] text-white">
          {value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3">
          {title}
        </p>
      </div>
    ))}
  </section>
);
export default Stats;
