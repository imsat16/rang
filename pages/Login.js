import logo from '../assets/img/logo.png';
import ill from '../assets/svg/ill.svg';
import ill2 from '../assets/svg/ill2.svg';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect} from 'react';
import Button from '../components/Button';

const LoginPage = () => {
  useEffect (() => {
    console.log ('ssss');
  }, []);
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const current = new Date ();
  const date = current.getDate ();
  const month = current.getMonth ();
  const years = current.getFullYear ();

  return (
    <div className="w-full flex flex-row justify-center items-center ">
      <div className=" grid grid-cols-7 place-content-between w-full">
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

                  <Button color="WARNING">
                    Login
                  </Button>
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
            {/*  */}
            <div />
            {/*  */}
          </div>
        </div>

        <div className=" lg:col-span-4 bg-blue-500 h-screen hidden lg:flex items-center justify-center flex-col">
          <div className="h-full flex items-center justify-center">
            <div className="flex justify-end absolute h-full">
              <div className="w-10/12 ">
                <Image alt="" src={ill} className="shadow-xl" />
              </div>
            </div>
            <div className="flex justify-center items-center -translate-y-16 absolute h-full">
              <div className="w-9/12 translate-y-4 translate-x-3 ">
                <Image alt="" src={ill2} className="shadow-xl" />
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-y-4">
              <div className="bg-white p-3 rounded-xl w-1/2 text-center z-10 ">
                <div className=" bg-blue-300 py-3 rounded-lg flex justify-center ">
                  <div className="w-11/12 grid gap-2 py-3 px-3">
                    <h2 className="font-bold text-blue-500 ">
                      So glad <br />you&lsquo;re here!<br />
                    </h2>
                    <p className=" text-blue-700 font-medium">
                      Just one small positive thought in the morning can change your whole day.
                    </p>
                    <div className="flex justify-center gap-1">
                      <a className="font-bold text-sm text-yellow border-b-4">
                        {date} {monthNames[month]}
                      </a>
                      <a className="text-blue-700">
                        {years}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="font-Fasthand pt-2">
                  Postitf Thinking
                </div>
              </div>
              <div className="z-20 text-center w-7/12">
                <h1 className="font-bold text-blue-400">
                  Need Help ?
                </h1>
                <p className="text-blue-400 font-medium">
                  Are you having trouble logging in? Click the help button below
                </p>
                <Button color="LIGHT">
                  Contact Support
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
