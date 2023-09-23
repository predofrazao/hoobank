import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    <div className="absolute -right-[50%] w-[60%] h-[60%] rounded-full blue__gradient z-[0]" />

    <div className="relative w-full sm-mb-16 mb-6 flex justify-between items-center md:flex-row flex-col z-[1]">
      <h2 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>

      <div className="w-full md-mt-0 mt-6">
        <p className={`${styles.paragraph} max-w-[50ch]`}>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>
    </div>

    <div className="relative w-full flex flex-wrap sm:justify-start justify-center z-[1] feedback-container">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonials;
