import img from "./assets/Image.png";

function App() {
  return (
    <section className="flex w-full">
      {/* Left */}
      <div className="bg-[#1E2640] w-[224px] py-[16px] flex flex-col justify-between h-[1482px] text-white">
        <div className="w-[208px] h-[1380px]">
          {/* Left Profile */}
          <div className="flex p-5 items-center w-[192px] h-[42px]">
            <img src={img} className="w-[39px] h-[39px]" alt="Img" />
            <div className="flex justify-between items-center flex-1">
              <div className="flex flex-col ml-3 w-[108px] h-[42px]">
                <h2 className="text-[15px">Nishyan</h2>
                <span className="underline text-[13px] opacity-80 text-gray-300">
                  Visit store
                </span>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#ffffff"
                  d="M12 14.975q-.2 0-.375-.062T11.3 14.7l-4.6-4.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-4.6 4.6q-.15.15-.325.213t-.375.062Z"
                />
              </svg>
            </div>
          </div>
          {/* Left menu */}
          <div className="text-gray-300 w-[208px] h-[1314px] space-y-5 mt-5 px-2">
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M6 19h3v-6h6v6h3v-9l-6-4.5L6 10zm-2 2V9l8-6l8 6v12h-7v-6h-2v6zm8-8.75"
                />
              </svg>
              <h1 className="text-[12px]">Home</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M13 14H9a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2m4-10h-1.18A3 3 0 0 0 13 2h-2a3 3 0 0 0-2.82 2H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3m-7 1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4Zm8 14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6h1a1 1 0 0 1 1 1Zm-3-9H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2"
                />
              </svg>
              <h1 className="text-[12px]">Orders</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M104 44H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-100 36H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Z"
                />
              </svg>
              <h1 className="text-[12px]">Products</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2a1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                />
              </svg>
              <h1 className="text-[12px]">Delivery</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M155.51 24.81a8 8 0 0 0-8.42.88L77.25 80H32a16 16 0 0 0-16 16v64a16 16 0 0 0 16 16h45.25l69.84 54.31A8 8 0 0 0 160 224V32a8 8 0 0 0-4.49-7.19M144 207.64l-59.09-45.95A7.94 7.94 0 0 0 80 160H32V96h48a7.94 7.94 0 0 0 4.91-1.69L144 48.36ZM200 104v48a8 8 0 0 1-16 0v-48a8 8 0 0 1 16 0m32-16v80a8 8 0 0 1-16 0V88a8 8 0 0 1 16 0"
                />
              </svg>
              <h1 className="text-[12px]">Marketing</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M224 200h-8V40a8 8 0 0 0-8-8h-56a8 8 0 0 0-8 8v40H96a8 8 0 0 0-8 8v40H48a8 8 0 0 0-8 8v64h-8a8 8 0 0 0 0 16h192a8 8 0 0 0 0-16M160 48h40v152h-40Zm-56 48h40v104h-40Zm-48 48h32v56H56Z"
                />
              </svg>
              <h1 className="text-[12px]">Analytics</h1>
            </div>
            <div className="flex items-center gap-2 pl-4 bg-slate-700 p-2 rounded text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M19 14V6c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2m-9-1c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3m13-6v11c0 1.1-.9 2-2 2H4v-2h17V7z"
                />
              </svg>
              <h1 className="text-[12px]">Payments</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="none"
                  stroke="#ffffff"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 21L4 4l17 7l-6.265 2.685a2 2 0 0 0-1.05 1.05z"
                />
              </svg>
              <h1 className="text-[12px]">Tools</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M10.054 2.094a3 3 0 0 1 3.892 0l1.348 1.149a1 1 0 0 0 .57.236l1.765.14a3 3 0 0 1 2.752 2.752l.14 1.766a1 1 0 0 0 .236.569l1.149 1.348a3 3 0 0 1 0 3.892l-1.149 1.348a1 1 0 0 0-.236.569l-.14 1.765a3 3 0 0 1-2.752 2.752l-1.766.14a1 1 0 0 0-.569.237l-1.348 1.148a3 3 0 0 1-3.892 0l-1.348-1.148a1 1 0 0 0-.569-.236l-1.765-.141a3 3 0 0 1-2.752-2.752l-.14-1.765a1 1 0 0 0-.237-.57l-1.148-1.348a3 3 0 0 1 0-3.891l1.148-1.348a1 1 0 0 0 .236-.57l.141-1.765A3 3 0 0 1 6.372 3.62l1.765-.14a1 1 0 0 0 .57-.236zm2.595 1.522a1 1 0 0 0-1.297 0l-1.348 1.15a3 3 0 0 1-1.708.706l-1.765.141a1 1 0 0 0-.917.917l-.141 1.766a3 3 0 0 1-.707 1.707l-1.15 1.348a1 1 0 0 0 0 1.297l1.15 1.348a3 3 0 0 1 .707 1.707l.14 1.766a1 1 0 0 0 .918.917l1.765.141a3 3 0 0 1 1.708.707l1.348 1.15a1 1 0 0 0 1.297 0l1.348-1.15a3 3 0 0 1 1.707-.707l1.765-.14a1 1 0 0 0 .918-.918l.14-1.766c.05-.629.298-1.226.708-1.707l1.149-1.348a1 1 0 0 0 0-1.297l-1.15-1.348a3 3 0 0 1-.706-1.707l-.141-1.766a1 1 0 0 0-.918-.917l-1.765-.14a3 3 0 0 1-1.707-.708zm2.18 4.141l1.414 1.414l-7.071 7.072l-1.415-1.415zm-4.597 2.475a1.5 1.5 0 1 1-2.121-2.121a1.5 1.5 0 0 1 2.121 2.121m3.536 5.657a1.5 1.5 0 1 0 2.121-2.121a1.5 1.5 0 0 0-2.121 2.12"
                />
              </svg>
              <h1 className="text-[12px]">Discount</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  d="M3.5 8a5.5 5.5 0 1 1 8.596 4.547a9.005 9.005 0 0 1 5.9 8.18a.751.751 0 0 1-1.5.045a7.5 7.5 0 0 0-14.993 0a.75.75 0 0 1-1.499-.044a9.005 9.005 0 0 1 5.9-8.181A5.496 5.496 0 0 1 3.5 8M9 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8m8.29 4c-.148 0-.292.01-.434.03a.75.75 0 1 1-.212-1.484a4.53 4.53 0 0 1 3.38 8.097a6.69 6.69 0 0 1 3.956 6.107a.75.75 0 0 1-1.5 0a5.193 5.193 0 0 0-3.696-4.972l-.534-.16v-1.676l.41-.209A3.03 3.03 0 0 0 17.29 8"
                />
              </svg>
              <h1 className="text-[12px]">Audience</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="m14.489 8.388l-.001.006a.115.115 0 0 1-.027.028a.428.428 0 0 1-.264.082h-3.186c-3.118 0-4.68 3.77-2.476 5.974a6.5 6.5 0 1 1 5.953-6.09Zm-.292 1.616c.913 0 1.736-.618 1.79-1.529a8 8 0 1 0-7.032 7.468c1.243-.147 1.527-1.639.641-2.525c-1.26-1.26-.367-3.414 1.415-3.414zM10 5a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2m0 2a1 1 0 1 1-2 0a1 1 0 0 1 2 0"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 className="text-[12px]">Appearance</h1>
            </div>
            <div className="flex items-center gap-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 16 16"
                className="fill-current text-gray-300 text-sm w-[20px] h-[20px]"
              >
                <path
                  fill="#ffffff"
                  fill-rule="evenodd"
                  d="m7.835 6l.76-2.027L9.336 2H5.5a.716.716 0 0 0-.664.45L2.513 8.257a.177.177 0 0 0 .164.243h4.965l-.732 2.013l-1.082 2.975a.382.382 0 0 0 .637.392l6.956-7.391A.29.29 0 0 0 13.21 6zm2.728-3l.235-.627A1.386 1.386 0 0 0 9.5.5h-4c-.906 0-1.72.552-2.057 1.393L1.12 7.7A1.677 1.677 0 0 0 2.677 10H5.5l-.545 1.5l-.537 1.475a1.882 1.882 0 0 0 3.14 1.933l6.956-7.391A1.79 1.79 0 0 0 13.21 4.5H10z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 className="text-[12px]">Plugins</h1>
            </div>
          </div>
        </div>
        {/* Left Footer */}
        <div className="flex m-2 rounded bg-slate-700 items-center">
          <div className="m-2 rounded bg-slate-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path
                fill="#ffffff"
                d="M19.435 4.065H4.565a2.5 2.5 0 0 0-2.5 2.5v10.87a2.5 2.5 0 0 0 2.5 2.5h14.87a2.5 2.5 0 0 0 2.5-2.5V6.565a2.5 2.5 0 0 0-2.5-2.5m1.5 9.93h-6.42a2 2 0 0 1 0-4h6.42Zm-6.42-5a3 3 0 0 0 0 6h6.42v2.44a1.5 1.5 0 0 1-1.5 1.5H4.565a1.5 1.5 0 0 1-1.5-1.5V6.565a1.5 1.5 0 0 1 1.5-1.5h14.87a1.5 1.5 0 0 1 1.5 1.5v2.43Z"
              />
              <circle cx="14.519" cy="11.996" r="1" fill="#ffffff" />
            </svg>
          </div>
          <div className="m-2">
            <div className="text-sm text-gray-300">Available credits</div>
            <div className="text-sm">222.10</div>
          </div>
        </div>
      </div>
      {/* Right */}
      <div className="flex-1">
        <div className="flex border-b justify-between items-center w-[1216px] h-[64px] py-[32px] px-[12px]">
          <div className="p-5 flex items-center gap-3">
            <h1 className="text-lg">Payments</h1>
            <div className="text-gray-600 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                className="fill-current text-gray-600"
              >
                <g fill="none">
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#000000"
                    stroke-width="1.5"
                  />
                  <path
                    stroke="#000000"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13"
                  />
                  <circle cx="12" cy="16" r="1" fill="#000000" />
                </g>
              </svg>
              <span className="pl-2 text-sm">How it works</span>
            </div>
          </div>
          <div className="flex items-center pl-2 bg-[#f2f2f2] rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
              className="fill-current text-slate-500 text-sm"
            >
              <path
                fill="#808080"
                d="m229.66 218.34l-50.07-50.06a88.11 88.11 0 1 0-11.31 11.31l50.06 50.07a8 8 0 0 0 11.32-11.32M40 112a72 72 0 1 1 72 72a72.08 72.08 0 0 1-72-72"
              />
            </svg>
            <input
              type="text"
              className="outline-none  relative bg-[#f2f2f2] px-[16px] py-[9px] w-[400px] h-[40px] rounded-[6px]"
              placeholder="Search features, tutorials, etc."
            />
          </div>
          <div className="flex gap-2">
            <div className="rounded-full bg-slate-200 w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="fill-current text-gray-900"
              >
                <g fill="none" fill-rule="evenodd">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                  <path
                    fill="#4c4c4c"
                    d="M19 4.741V8a3 3 0 1 1 0 6v3c0 1.648-1.881 2.589-3.2 1.6l-2.06-1.546A8.658 8.658 0 0 0 10 15.446v2.844a2.71 2.71 0 0 1-5.316.744l-1.57-5.496a4.7 4.7 0 0 1 3.326-7.73l3.018-.168a9.344 9.344 0 0 0 4.19-1.259l2.344-1.368C17.326 2.236 19 3.197 19 4.741M5.634 15.078l.973 3.407A.71.71 0 0 0 8 18.29v-3.01l-1.56-.087a4.723 4.723 0 0 1-.806-.115M17 4.741L14.655 6.11A11.343 11.343 0 0 1 10 7.604v5.819c1.787.246 3.488.943 4.94 2.031L17 17zM8 7.724l-1.45.08a2.7 2.7 0 0 0-.17 5.377l.17.015l1.45.08zM19 10v2a1 1 0 0 0 .117-1.993z"
                  />
                </g>
              </svg>
            </div>
            <div className="rounded-full bg-slate-200 w-10 h-10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 24 24"
                className="fill-current text-gray-600"
              >
                <path fill="#4c4c4c" d="m12 15l-5-5h10z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="bg-[#FAFAFA]">
          <div className="flex bg- justify-between items-center px-10 py-8">
            <h2 className="text-xl font-semibold">Overview</h2>
            <div className="border w-[137px] h-[36px] flex items-center justify-center rounded">
              <p className="text-gray-600">Last Month</p>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#000000"
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6l-6-6z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* Card */}
          <div className="flex px-10 gap-5">
            <div className="bg-white shadow-sm w-[566px] h-[118px] flex flex-col justify-evenly pl-3 rounded">
              <p className="text-gray-600">Online orders</p>
              <h2 className="text-3xl font-semibold">231</h2>
            </div>
            <div className="bg-white shadow-sm w-[566px] h-[118px] flex flex-col justify-evenly pl-3 rounded">
              <p className="text-gray-600">Amount received</p>
              <h2 className="text-3xl font-semibold">₹23,92,312.19</h2>
            </div>
          </div>
          <div>
            <h2 className="px-10 py-5 text-lg font-semibold">
              Transactoins | This Month
            </h2>
          </div>
          {/* Table */}
          <div className="bg-white mx-10">
            <div className=" px-3 py-5 flex items-center justify-between">
              <div className="border flex items-center pl-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 256 256"
                  className="fill-current mr-2"
                >
                  <path
                    fill="#808080"
                    d="M232.49 215.51L185 168a92.12 92.12 0 1 0-17 17l47.53 47.54a12 12 0 0 0 17-17ZM44 112a68 68 0 1 1 68 68a68.07 68.07 0 0 1-68-68"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search by order ID..."
                  className="w-[248px] h-[40px] outline-none "
                />
              </div>
              <div className="flex gap-3">
                <div className="flex items-center gap-[6px] border w-[79px] h-[36px] rounded-[4px] px-[12px] py-[6px]">
                  <p className="text-gray-600">Sort</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#808080"
                      d="M119.39 172.94a8 8 0 0 1-1.73 8.72l-32 32a8 8 0 0 1-11.32 0l-32-32A8 8 0 0 1 48 168h24V48a8 8 0 0 1 16 0v120h24a8 8 0 0 1 7.39 4.94m94.27-98.6l-32-32a8 8 0 0 0-11.32 0l-32 32A8 8 0 0 0 144 88h24v120a8 8 0 0 0 16 0V88h24a8 8 0 0 0 5.66-13.66"
                    />
                  </svg>
                </div>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 24 24"
                    className="fill-current border rounded-[4px]"
                  >
                    <path
                      fill="#808080"
                      d="m12 16l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11zm-8 4v-5h2v3h12v-3h2v5z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {/* Table data */}
            <div>
              {/* Header */}
              <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600 bg-[#f2f2f2] rounded-[4px]">
                <p>Order ID</p>
                <div className="flex items-center">
                  <p>Order date</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path fill="#808080" d="m12 15l-5-5h10z" />
                  </svg>
                </div>
                <p>Order amount</p>
                <div className="flex items-center gap-1">
                  <p>Transaction fees</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#808080"
                      d="M11.5 16.5h1V11h-1zm.5-6.923q.262 0 .438-.177q.177-.177.177-.438q0-.262-.177-.439q-.176-.177-.438-.177t-.438.177q-.177.177-.177.439q0 .261.177.438q.176.177.438.177M12.003 21q-1.866 0-3.51-.708q-1.643-.709-2.859-1.924q-1.216-1.214-1.925-2.856Q3 13.87 3 12.003q0-1.866.708-3.51q.709-1.643 1.924-2.859q1.214-1.216 2.856-1.925Q10.13 3 11.997 3q1.866 0 3.51.708q1.643.709 2.859 1.924q1.216 1.214 1.925 2.856Q21 10.13 21 11.997q0 1.866-.708 3.51q-.709 1.643-1.924 2.859q-1.214 1.216-2.856 1.925Q13.87 21 12.003 21M12 20q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8"
                    />
                  </svg>
                </div>
              </div>
              {/* Data */}
              <div className="space-y-2">
                <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
                <div className="w-[1128px] border-b h-[40px] p-2 flex items-center justify-between mx-[12px] text-gray-600  rounded-[4px]">
                  <p className="text-sky-600">#281209</p>
                  <p>7 July, 2023</p>
                  <p className="mr-[100px] ml-11">₹1,278.23</p>
                  <p>₹22</p>
                </div>
              </div>
            </div>
            <div className="w-[610px] h-[32px] mx-auto flex items-center gap-8 mt-6 text-gray-600">
              <div className="flex items-center rounded border w-[100px] h-[32px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#808080"
                    d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"
                  />
                </svg>
                <p className="text-gray-600">Previous</p>
              </div>
              <div className="flex gap-5">
                <p>1</p>
                <p>...</p>
                <p className="text-white bg-sky-600 rounded px-1">10</p>
                <p>11</p>
                <p>12</p>
                <p>13</p>
                <p>14</p>
                <p>15</p>
                <p>16</p>
                <p>17</p>
                <p>18</p>
              </div>
              <div className="flex items-center rounded border w-[100px] h-[32px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#808080"
                    d="M12.6 12L8.7 8.1q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.6 4.6q.15.15.213.325t.062.375q0 .2-.062.375t-.213.325l-4.6 4.6q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7z"
                  />
                </svg>
                <p className="text-gray-600">Next</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
