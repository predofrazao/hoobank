import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy steps.
      </h2>
      <p className={`max-w-[50ch] mt-5 ${styles.paragraph}`}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dolorum mollitia
        eum repellendus consectetur vero quas, quam, adipisci similique sed, ipsam placeat
        perspiciatis. Exercitationem amet voluptatem explicabo suscipit quam facilis.
      </p>

      <Button styles="mt-10" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%] object-contain" />
    </div>
  </section>
);

export default CardDeal;
