'use client';

export default function Error({error}){
  return <main className="error">
    <h1>an error occured</h1>
    <p>failed to fetch data. try again later</p>
  </main>
}