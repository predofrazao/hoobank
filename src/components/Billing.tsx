import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] h-[100%] relative object-contain z-[5]" />

      <div className="absolute top-0 -left-1/2 w-[50%] h-[50%] rounded-full white__gradient z-[3]" />
      <div className="absolute bottom-0 -left-1/2 w-[50%] h-[50%] rounded-full pink__gradient z-[0]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing & invoicing.
      </h2>
      <p className={`max-w-[50ch] mt-5 ${styles.paragraph}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dicta obcaecati quo illo
        nesciunt. Quo impedit assumenda eligendi accusantium? Ullam perferendis saepe, itaque
        tenetur placeat quis sequi natus tempore eaque?
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <a href="#">
          <img
            src={apple}
            alt="Download on the App Store"
            className="w-[128px] h-[42px] mr-5 object-contain"
          />
        </a>
        <a href="#">
          <img
            src={google}
            alt="Download on the Google Play"
            className="w-[128px] h-[42px] mr-5 object-contain"
          />
        </a>
      </div>
    </div>
  </section>
);

export default Billing;
