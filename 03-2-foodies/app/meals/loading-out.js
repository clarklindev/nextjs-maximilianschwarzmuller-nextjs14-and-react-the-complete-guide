//NOTE: this file has been named loading-out.js because it is not used in project and do not want nextjs to pick up loading.js

import classes from "./loading.module.css";

export default function MealsLoadingPage(){
  return <p className={classes.loading}>fetching meals</p>
}