'use client';

import Link from 'next/link';
import {useFormState} from 'react-dom';
import { auth } from '@/actions/auth-actions';

export default function AuthForm({mode}) {
  const [formState, formAction] = useFormState(auth.bind(null, mode), {});

  return (
    <form id="auth-form" action={formAction}>
      <div>
        <img src="/images/auth-icon.jpg" alt="A lock icon" />
      </div>
      <p>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </p>
      <p>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </p>
      {formState.errors && <ul if="form-errors">

        {/* validation errors */}
          {Object.keys(formState.errors).map(error=>{
            return <li key={error}>
              {formState.errors[error]}
            </li>
          })}
        </ul>} 
      <p>
        <button type="submit">
          {mode === 'login' ? 'login': 'create account'}
        </button>
      </p>
      <p>
        {mode === 'login' && <Link href="/?mode=signup">Create an account</Link>}
        {mode === 'signup' && <Link href="/?mode=login">Login with existing account</Link>}
      </p>
    </form>
  );
}
