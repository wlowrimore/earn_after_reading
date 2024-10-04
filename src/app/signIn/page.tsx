"use client";

import React from "react";
import Image from "next/image";
import GoogleLogo from "../../../public/logos/google.webp";

const SignInPage = () => {
  return (
    <main className="container bg-signIn bg-no-repeat bg-contain bg-center flex flex-col mx-auto pl-24 mt-12">
      <header className="max-w-[50rem] mx-auto pt-24 mb-10b bg-white/80">
        <h3 className="text-2xl">
          The first thing we need to do is get you registered. If you have a
          valid Google Account, you can sign in using that account here.
        </h3>

        <button className="my-8 py-3 pl-3 pr-4 bg-neutral-700 hover:bg-neutral-950 transition duration-300 rounded-full border border-neutral-300 text-white text-xl flex items-center gap-1.5">
          <Image src={GoogleLogo} alt="google logo" width={24} height={24} />
          Sign in with Google
        </button>
      </header>

      {/* Otherwise divider */}
      <div className="w-[50rem] mx-auto flex justify-center items-center bg-white/80">
        <div className="w-1/2 bg-neutral-950 h-[0.025rem]"></div>
        <div className="text-neutral-700 mx-3 text-xl">Otherwise</div>
        <div className="w-1/2 bg-neutral-950 h-[0.025rem]"></div>
      </div>

      <section className="max-w-[50rem] pt-8 flex flex-col mx-auto bg-white/80">
        <h3 className="text-2xl">
          If you do not have a Google Account, please create an &quot;Earn After
          Reading&quot; account here.
        </h3>
        <div>
          <form>
            <div className="mt-10">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  e.target.value;
                }}
                className="w-full bg-white rounded-t-md border-b border-neutral-600 outline-none p-2"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  e.target.value;
                }}
                className="w-full bg-white rounded-t-md border-b border-neutral-600 outline-none p-2"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="password-confirm">Re-Enter Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) => {
                  e.target.value;
                }}
                className="w-full bg-white rounded-t-md border-b border-neutral-600 outline-none p-2"
              />
            </div>
            <div className="mt-6">
              <button className="w-full bg-neutral-700 text-white py-3 px-6 rounded-md hover:bg-neutral-950 transition duration-300 text-xl">
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
