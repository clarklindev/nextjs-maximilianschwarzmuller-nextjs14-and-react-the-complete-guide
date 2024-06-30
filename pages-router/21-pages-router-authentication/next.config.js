const {PHASE_DEVELOPMENT_SERVER, PHASE_EXPORT, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER} = require('next/constants');

//https://nextjs.org/docs/pages/api-reference/next-config-js

module.exports = (phase)=>{
  
  //development
  if(phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
        // mongodb_username: '', //get from .env.local
        // mongodb_password: '', //get from .env.local
        mongodb_clustername: 'nextjs',
        mongodb_database: 'auth-demo-dev-test'
      }
    }
  }

  //not in development eg. production
  return {
    env: {
      // mongodb_username: '', //get from .env.local
      // mongodb_password: '', //get from .env.local
      mongodb_clustername: 'nextjs',
      mongodb_database: 'auth-demo'
    }
  }
}