import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/logo/logo.PNG"
        alt="logo"
        width={50}
        height={50}
        quality={100}
        className="dark:hidden"
      />

      <Image
        src="/images/logo/logo2.PNG"
        alt="logo"
        width={30}
        height={30}
        quality={100}
        className="hidden dark:block"
      />
    </Link>
  );
};

export default Logo;
