'use client';
import React, { useState, useEffect } from 'react';

import { Studio } from './Studio';

const StudioPage = () => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const correctPassword = 'asdasd';

  const checkPassword = () => {
    password === correctPassword ? setIsAuthenticated(true) : setIsAuthenticated(false);
  };

  useEffect(() => {
    checkPassword();
  }, [password]);

  if (!isAuthenticated) {
    return (
      <div className='flex flex-col gap-4  mt-5 max-w-[600px]'>
        <p>Please enter the password to access the Studio page.</p>
        <input
          className='"shadow appearance-none border rounded w-1/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"'
          type='password'
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
    );
  } else {
    return <Studio />;
  }
};

export default StudioPage;
