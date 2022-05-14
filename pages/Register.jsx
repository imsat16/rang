import logo from '../assets/img/logo.png';
import ill from '../assets/svg/ill.svg';
import ill2 from '../assets/svg/ill2.svg';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect} from 'react';
import Button from '../components/Button';
import React from 'react'

const RegistPage = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center ">
      <div className=" grid grid-cols-7 place-content-between w-full ">
        <div className="col-span-7 lg:col-span-3 w-full lg:p-5 md:px-52 px-8 grid grid-cols-5 items-center ">
          <div className="hidden lg:block">{' '}</div>
          <div className="lg:col-span-3 col-span-5 h-screen lg:h-0 grid  place-content-center">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between w-full items-end font-semibold text-gray-500">
                <Image alt="" height="50" width="122.22" src={logo} />
                Sign in
              </div>
              <form action="">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-gray-500">
                      Email
                    </label>
                    <input
                      className="py-3 px-2 border-2 rounded-xl"
                      type="email"
                      placeholder="johndoe@mail.com"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-gray-500">
                      Password
                    </label>
                    <input
                      className="py-3 px-2 border-2 rounded-xl"
                      type="password"
                      placeholder="••••••••"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="" id="" />
                      Remember me
                    </div>
                    <Link href={'/'}>
                      <a className=" text-blue-600 hover:font-semibold">
                        Forgot Password
                      </a>
                    </Link>
                  </div>

                  {/* <button className="bg-blue-500 text-white font-semibold rounded-full py-2">
                    Login
                  </button> */}
                  <Button colors="ERROR">Next</Button>
                  <div>
                    Not Registered yet?
                    {' '}
                    <Link href={'/register'}>
                      <a className="text-blue-500 font-semibold">
                        Create Account
                      </a>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            <div />
          </div>
        </div>

        <div className=" lg:col-span-4 bg-blue-500 h-screen hidden lg:flex items-center justify-center flex-col">
          <div className="h-full flex items-center justify-center">
            s
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistPage;
