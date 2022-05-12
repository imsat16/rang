import c1 from '../components/svg/ill.svg';
import logo from '../components/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';
const LoginPage = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center ">
      <div className=" grid grid-cols-7 place-content-between w-full ">
        <div className="col-span-7 lg:col-span-3 w-full lg:p-5 md:px-52 px-8 grid grid-cols-5 items-center ">
          <div className="hidden lg:block">{' '}</div>
          <div className="lg:col-span-3 col-span-5 h-screen lg:h-0 grid place-content-center">
            <div className="flex flex-col">
              <div className="flex justify-between w-full items-center font-semibold text-lg text-gray-500">
                <Image alt="" height="50" width="122.22" src={logo} />
                Sign in
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet!
              </p>
              <form action="">
                <div className="flex flex-col">
                  <label htmlFor="" className="font-bold text-gray-500">
                    Email
                  </label>
                  <input
                    className="p-4 border-2 rounded-xl"
                    type="email"
                    placeholder="johndoe@mail.com"
                    name=""
                    id=""
                  />
                  <label htmlFor="" className="font-bold text-gray-500">
                    Password
                  </label>
                  <input
                    className="p-4 border-2 rounded-xl"
                    type="password"
                    placeholder="********"
                    name=""
                    id=""
                  />
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" name="" id="" />
                      Remember me
                    </div>
                    <div className="font-semibold text-sky-400">
                      Forgot Password
                    </div>
                  </div>

                  <button className="bg-sky-500 text-white font-semibold rounded-lg py-2">
                    Login
                  </button>
                  <div>
                    Not Registered yet?
                    {' '}
                    <Link href={"/Register"}>
                      <a className="text-sky-500 font-semibold">
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
        <div className=" lg:col-span-4 bg-sky-500 h-screen hidden lg:flex  ">
          <div className="grid">
            <div className="flex justify-end ">
              <div className="w-8/12">
                <Image alt="" src={c1} className="shadow-xl" />
              </div>
            </div>
            <div className="px-8 text-center text-white">
              <h1 className="font-bold text-3xl opacity-70">
                Manage employees easier with lybra
              </h1>
              <p className="font-light text-sm">
                Organize everything here more easily, starting from the attendance list, payroll, leave and many more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
