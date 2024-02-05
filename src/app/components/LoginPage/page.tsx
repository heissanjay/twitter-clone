import Image from "next/image";

export default function LoginPage() {
  /*
        These are set of link name that will take you No where but added
        just to mimick the footer of X login page
    */

  const bunchOfFooterLinks = [
    "About",
    "Download the X app",
    "Help Center",
    "Terms of Service",
    "Privacy Policy",
    "Cookie Policy",
    "Accessibility",
    "Ads info",
    "Blog",
    "Status",
    "Careers",
    "Brand Resources",
    "Advertising",
    "Marketing",
    "X for Business",
    "Developers",
    "Directory",
    "Settings",
    "© 2024 X Corp.",
  ];

  return (
    <div>
      <div className="grid grid-cols-2 mt-8 items-center  max-md:grid-col-1">
        <div className="col-span-1 pl-48 max-md:max-w-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="400"
            height="400"
            viewBox="0,0,256,256"
          >
            {" "}
            <g
              fill="#000000"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
            </g>
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
            >
              <g transform="scale(10.66667,10.66667)">
                <path d="M2.36719,3l7.0957,10.14063l-6.72266,7.85938h2.64063l5.26367,-6.16992l4.31641,6.16992h6.91016l-7.42187,-10.625l6.29102,-7.375h-2.59961l-4.86914,5.6875l-3.97266,-5.6875zM6.20703,5h2.04883l9.77734,14h-2.03125z"></path>
              </g>
            </g>{" "}
          </svg>
        </div>

        <div className="col-span-1 font-serif ml-28 space-y-8 ">
          <h1 className="text-[69px] font-bold ">Happening now</h1>
          <h3 className="text-[36px] font-bold">Join today.</h3>

          <div className="space-y-4">
            <button
              className="
              w-80 
        px-14 py-2 rounded-[3rem] bg-white text-black flex font-bold
        "
            >
              <Image
                width={24}
                height={24}
                className="mr-2"
                alt={"sign up with google"}
                src={"https://img.icons8.com/fluency/48/google-logo.png"}
              ></Image>
              Sign up with Google
            </button>

            <button
              className="
            w-80
        px-16 py-2 rounded-[3rem] bg-white text-black flex font-bold
        "
            >
              <Image
                width={24}
                height={24}
                className="mr-2"
                alt={"sign up with apple"}
                src={"https://img.icons8.com/ios-glyphs/30/mac-os.png"}
              ></Image>
              Sign up with apple
            </button>

            <div className="flex flex-col-3 space-x-2 min-w-80">
              <div className=" col-span-1 w-36  border h-0 border-slate-100 mt-3 opacity-20"></div>
              <div className="col-span-1 ">or</div>
              <div className="col-span-1 w-36  border h-0 border-slate-100 mt-3 opacity-20"></div>
            </div>

            <button className=" w-80  px-24 py-2 rounded-[3rem] bg-blue-x flex font-bold">
              Create account
            </button>
            <p className="w-80 text-xs text-gray-400">
              By signing up, you agree to bunch of{" "}
              <a href="#" className="text-blue-500">
                bullshit
              </a>{" "}
              and giving up on your{" "}
              <a href="#" className="text-blue-500">
                privacy
              </a>
              .
            </p>
          </div>

          <div className="space-y-4">
            <h3 className=" text-base font-bold">Already have an account?</h3>
            <button className="w-80 px-16 py-2 rounded-[3rem] border hover:bg-slate-900 text-blue-400 font-bold">
              Sign in
            </button>
          </div>
        </div>
      </div>

      <div className="mt-24">
        <ul className="flex space-x-3">
          {bunchOfFooterLinks.map((link, index) => (
            <a key={index} href="#" className="text-xs opacity-60">
              {link}
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
