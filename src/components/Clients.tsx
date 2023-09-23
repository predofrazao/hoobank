import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} w-full flex-wrap`}>
      {clients.map(({ id, logo, name }) => (
        <div
          key={id}
          className={`${styles.flexCenter} sm:min-w-[192px] min-w-[120px] [&:not(:last-child)]:mr-6 flex-1`}
        >
          <img
            src={logo}
            alt={`${name}'s logo`}
            className="sm:w-[192px] w-[100px] object-contain"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
