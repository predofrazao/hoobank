import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} w-full mb-8 md:flex-row flex-col`}>
      <div className="mr-10 flex-1 flex flex-col justify-start">
        <img src={logo} alt="Hoobank logo" className="w-[266px] h-[72px] object-contain" />
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>

      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map(({ title, links }) => (
          <div key={title} className="min-w-[150px] ss:my-0 my-4 flex flex-col">
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {title}
            </h4>
            <ul className="list-none mt-4">
              {links.map(({ name, link }) => (
                <li
                  key={name}
                  className="[&:not(:last-child)]:mb-4 font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                >
                  <a href={link} title={name}>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full pt-6 flex md:flex-row flex-col justify-between items-center border-t-[1px] border-t-[#3f3e45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright &copy; 2023 HooBank. All Rights Reserved.
      </p>

      <ul className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map(({ id, name, icon, link }) => (
          <li key={id} className=" [&:not(:last-child)]:mr-6 object-contain cursor-pointer">
            <a href={link} title={name}>
              <img src={icon} alt={name} className="w-[21px] h-[21px]" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  </footer>
);

export default Footer;
