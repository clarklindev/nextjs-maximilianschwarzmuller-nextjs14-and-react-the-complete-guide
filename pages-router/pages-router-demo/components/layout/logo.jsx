import Image from 'next/image';

import styles from './logo.module.css';

function Logo(){
  return (<div className={styles.logo}>
    <Image src="/images/site/profile.png" alt="swagfinger logo" width={35} height={35} />
    swagfinger
  </div>);
}

export default Logo;