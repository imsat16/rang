import logo from '../assets/img/logo.png';
import ill from '../assets/svg/ill.svg';
import ill2 from '../assets/svg/ill2.svg';
import Image from 'next/image';
import Link from 'next/link';
import {useEffect} from 'react';
import Button from '../components/Button';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const RegistPage = () => {
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

  const {watch, register, formState: {errors,isValid}} = useForm ({mode: 'all'});
  const [formStep, setFormStep] = useState (0);
  const completeFormStep = () => {
    setFormStep (cur => cur + 1);
  };

  const current = new Date ();
  const date = current.getDate ();
  const month = current.getMonth ();
  const years = current.getFullYear ();

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <div className="w-full flex justify-center">
          <Button color={'PRIMARY'} disabled={!isValid} onClick={completeFormStep} type="button">
            Create Account
          </Button>
        </div>
      );
    } else {
      return (
        <div className="">
          <Button color={'PRIMARY'} disabled={!isValid} onClick={completeFormStep} type="button">
            Next Step{' '}
          </Button>
        </div>
      );
    }
  };

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="lg:basis-5/12 flex flex-col items-center justify-center ">
        <div className="md:w-4/6">
          <div className="flex justify-between items-end">
            <Image alt="" height="50" width="122.22" src={logo} />
            Sign in
          </div>
          <form action="" className="flex flex-col gap-4">
            <div className="flex flex-col gap-4">
              {formStep === 0 &&
                <section className="flex flex-col gap-4">
                  <p className="flex flex-col">
                    <label
                      htmlFor="fullname"
                      className="font-bold text-gray-500 "
                    >
                      Fullname
                    </label>
                    <input
                      className="py-2 px-2 border border-gray-500 rounded-md"
                      type="text"
                      placeholder="johndoe saparudin"
                      name="fullname"
                      id="fullname"
                      {...register ('fullname', {
                        required: {value: true, message: 'error message'},
                      })}
                    />
                    {errors.fullname && <p>{errors.fullname.message}</p>}
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col">
                      <label htmlFor="" className="font-bold text-gray-500">
                        Company name
                      </label>
                      <input
                        className="py-2 px-2 border rounded-md"
                        type="text"
                        placeholder="Apple inc"
                        name="company"
                        id="company"
                         {...register ('company', {
                        required: {value: true, message: 'error message'},
                      })}
                      />
                      {errors.company && <p>{errors.company.message}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="" className="font-bold text-gray-500">
                        Address
                      </label>
                      <textarea
                        className="py-2 px-2 border rounded-md"
                        placeholder="California Street"
                        name="address"
                        id="address"
                        {...register ('address', {
                          required: {value: true, message: 'error message'},
                        })}
                        />
                        {errors.address && <p>{errors.address.message}</p>}
                    </div>
                    <div className="flex flex-col md:grid grid-cols-3 gap-2">
                      <div className="flex flex-col col-span-1">
                        <label htmlFor=""><p className="font-bold text-gray-500"> Zip Code</p></label>
                        <input
                          className="py-2 px-2 border rounded-md"
                          type="number"
                          placeholder="12345"
                          name="zipcode"
                          id="zipcode"
                          {...register ('zipcode', {
                            required: {value: true, message: 'error message'},
                          })}
                          />
                          {errors.zipcode && <p>{errors.zipcode.message}</p>}
                      </div>
                      <div className="flex flex-col col-span-2">
                        <label htmlFor=""><p className="font-bold text-gray-500">Province</p></label>
                        <input
                          className="py-2 px-2 border rounded-md"
                          type="text"
                          placeholder="12345"
                          name=""
                          id=""
                          {...register ('province', {
                            required: {value: true, message: 'error message'},
                          })}
                          />
                          {errors.province && <p>{errors.province.message}</p>}
                      </div>
                    </div>
                  </div>
                </section>}
              {/* Batas 1 */}
              {formStep === 1 &&
                <section className="flex flex-col gap-4">
                  <div className="flex flex-col md:grid grid-cols-2 gap-2">
                    <div className="flex flex-col">
                      <label htmlFor=""><p> City</p></label>
                      <input
                        className="py-2 px-2 border rounded-md text-md"
                        type="text"
                        placeholder="Jakarta"
                        name="city"
                        id="city"
                        {...register ('city', {
                          required: {value: true, message: 'error message'},
                        })}
                        />
                        {errors.city && <p>{errors.city.message}</p>}
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor=""><p>Village</p></label>
                      <input
                        className="py-2 px-2 border rounded-md"
                        type="text"
                        placeholder="example"
                        name="village"
                        id="village"
                        {...register ('village', {
                          required: {value: true, message: 'error message'},
                        })}
                        />
                        {errors.village && <p>{errors.village.message}</p>}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-gray-500">
                      Number of employees
                    </label>
                    <input
                      className="py-2 px-2 border rounded-md"
                      type="text"
                      placeholder="100 - 200"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-gray-500">
                      Phone number
                    </label>
                    <input
                      className="py-2 px-2 border rounded-md"
                      type="tel"
                      placeholder="Apple inc"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-gray-500">
                      Email
                    </label>
                    <input
                      className="py-2 px-2 border rounded-md"
                      type="email"
                      placeholder="Apple inc"
                      name=""
                      id=""
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-bold text-gray-500">
                      Password
                    </label>
                    <input
                      className="py-2 px-2 border rounded-md"
                      type="password"
                      placeholder="Apple inc"
                      name=""
                      id=""
                    />
                  </div>
                  <p className="flex items-center gap-2">
                    <input type="checkbox" name="" id="" />
                    By clicking Free trial, you agree to the terms and conditions of using Lybra.
                  </p>
                </section>}
            </div>
            {renderButton ()}
          </form>
          {/* <pre>{JSON.stringify (watch (), null, 2)}</pre> */}
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

export default RegistPage;
