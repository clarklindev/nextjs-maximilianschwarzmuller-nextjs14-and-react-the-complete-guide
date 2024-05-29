import { Suspense } from 'react';
import Link from 'next/link';

import classes from './page.module.css';
import MealsGrid from '@/components/meals/meals-grid';
import {getMeals} from '@/lib/meals';

export const metadata = {
  title: 'All Food',
  description: 'Browser meals',
};

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals}/>
}

export default function MealsPage() {

  return (
    <>
      <header className={classes.header}>
        <h1>meals <span className={classes.highlight}>by you</span></h1>
        <p>choose a recipe</p>
        <p className={classes.cta}>
          <Link href="/meals/share">share your recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>fetching meals</p>}>
          <Meals/>
        </Suspense>
      </main>
    </>
  );
}
