import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";

type FeatureCardProps = {
  icon: string;
  title: string;
  content: string;
};

const FeatureCard = ({ icon, title, content }: FeatureCardProps) => (
  <div className={`p-6 flex flex-row rounded-[20px] [&:not(:last-child)]:mb-6 feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt={title} className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section id="features" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        You do the business, <br className="sm:block hidden" /> we'll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[50ch]`}>
        With the right credit card, you can improve your financial life by building credit, earning
        rewards and saving money. But with hundred of credit cards on the market.
      </p>

      <Button styles={"mt-3"} />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature) => (
        <FeatureCard key={feature.id} {...feature} />
      ))}
    </div>
  </section>
);

export default Business;
