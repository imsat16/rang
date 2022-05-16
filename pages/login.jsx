import logo from '../assets/img/logo.png';
import ill from '../assets/svg/ill.svg';
import ill2 from '../assets/svg/ill2.svg';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect} from 'react';
import Button from '../components/Button';

const LoginPage = () => {
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
    <div className="flex h-screen w-full justify-center">
      <div className="lg:basis-5/12 flex flex-col items-center justify-center">
        <div className="lg:w-1/2">
          <div className="flex justify-between items-end">
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
                  className="py-2 px-2 border-2 rounded-xl"
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
                  className="py-2 px-2 border-2 rounded-xl"
                  type="password"
                  placeholder="••••••••"
                  name=""
                  id=""
                />
              </div>
              <div className="flex justify-between text-sm">
                <p className="flex items-center gap-2">
                  <input type="checkbox" name="" id="" />
                  Remember me
                </p>
                <Link href={'/'}>
                  <p className=" text-blue-600 hover:font-semibold">
                    Forgot Password
                  </p>
                </Link>
              </div>
              <Button color="WARNING">
                Login
              </Button>
              <p>
                Not Registered yet?
                <Link href={'/register'}>
                  <a className="text-blue-500 font-semibold">
                    Create Account
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>

      </div>
      <div className="hidden basis-7/12 lg:flex items-center flex-col justify-center bg-blue-500">
        <div className=" h-full w-full bg-blue-500 flex justify-end 2xl:items-center 2xl:justify-center">
          <div className="flex justify-end">
            <div className="w-5/6">
              <Image alt="" src={ill} />
            </div>
          </div>
        </div>
        <div className="flex items-center translate-y-5 2xl:translate-y-20 2xl:-translate-x-3 justify-center absolute">
          <div className=" w-9/12 ">
            <Image alt="" src={ill2} />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center absolute gap-4 text-center">
          <div className="bg-white p-3 rounded-xl w-1/2 ">
            <div className="bg-blue-300 rounded-lg py-4 px-2">
              <h2 className="font-bold text-blue-500">
                So glad <br /> you&lsquo;re here!
              </h2>
              <p className="text-blue-700 font-medium">
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
            <div className="font-Fasthand pt-2">Positif Thingking</div>
          </div>
          <div className=" items-center flex flex-col">
            <h2 className="font-bold text-blue-400">Need help ?</h2>
            <p className="text-white font-light">
              Are you having trouble logging in? Click the help button below
            </p>
          </div>
          <Button color="LIGHT">Contact Support</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
