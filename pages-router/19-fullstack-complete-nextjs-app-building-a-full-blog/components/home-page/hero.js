import Image from 'next/image';

import styles from './hero.module.css';

function Hero(){
  return <section className={styles.hero}>
    <div className={styles.image}>
      <Image src="/images/site/profile.png" alt="a profile image" width={300} height={300}/>
    </div>
    <h1>hi im swagfinger</h1>
    <p>
      I blog about web development - especially frontend frameworks like Nextjs
    </p>
  </section>
}

export default Hero;
