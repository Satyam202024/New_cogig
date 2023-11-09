import React from "react";
import image from "../assest/image 5.png"

const Home = () => {
  return (
    <div class="Home px-48 py-16 bg-custom-grey">
            {/* Top Circle Image division with wording */}
        <div className="flex pb-4">
        <img src={image} alt="logo" class="rounded-full" />
        <div className="flex flex-col gap-0 pl-5">
            <div> <span class="font-bold  "> Give us more detail about your project </span></div>
            <div> <span className="text-custom-lightgrey flex-col text-xs"> Answer those quick questions and we'll contact you back as soon as possible. </span> </div>
        </div>
        </div> 
       <div className="bg-white rounded-md">
        <div className="py-8 px-8">
          <div class="flex flex-col ...  gap-4">
            <div>
              <p className="font-medium">Who is this project/website for?</p>
            </div>
            <div>
              {" "}
              <div class="relative flex items-start">
                <div class="absolute flex items-center h-5">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </div>
                <div class="pl-7 text-sm leading-5">
                  <label for="checkbox" class="font-medium text-gray-700">
                    myself
                  </label>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <div class="relative flex items-start">
                <div class="absolute flex items-center h-5">
                  <input
                    type="checkbox"
                    class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                  />
                </div>
                <div class="pl-7 text-sm leading-5">
                  <label for="checkbox" class="font-medium text-gray-700">
                    Enter contract name
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-col ... pt-6">
            <div className="pb-4 font-medium">
              What kind of skills do you need?
            </div>
            <div>
              <div class="flex flex-nowrap gap-2">
                <button className="flex items-center border rounded-md py-3 px-6 text-xs font-medium leading-6 ">
                  <img
                    className="px-2"
                    width="30"
                    src="https://img.icons8.com/ios-filled/50/horizontal-settings-mixer--v1.png"
                    alt="horizontal-settings-mixer--v1"
                  />
                  Programming & Tech
                </button>
                <button className="flex items-center border rounded-md py-3 px-6 text-xs font-medium leading-6">
                  <img
                    className="px-2"
                    width="30"
                    src="https://img.icons8.com/ios-filled/50/horizontal-settings-mixer--v1.png"
                    alt="horizontal-settings-mixer--v1"
                  />
                  Product management & Design
                </button>
                <button className="flex items-center border rounded-md py-3 px-6 text-xs font-medium leading-6">
                  <img
                    className="px-2"
                    width="30"
                    src="https://img.icons8.com/ios-filled/50/horizontal-settings-mixer--v1.png"
                    alt="horizontal-settings-mixer--v1"
                  />
                  Marketing & Growth
                </button>
              </div>
            </div>
            <div>
              <div class="flex flex-nowrap gap-2 pt-2">
                <button className="flex items-center border rounded-md py-3 px-6 text-xs font-medium leading-6 ">
                  <img
                    className="px-2"
                    width="30"
                    src="https://img.icons8.com/ios-filled/50/horizontal-settings-mixer--v1.png"
                    alt="horizontal-settings-mixer--v1"
                  />
                  Data & AI
                </button>
                <button className="flex items-center border rounded-md py-3 px-6 text-xs font-medium leading-6">
                  <img
                    className="px-2"
                    width="30"
                    src="https://img.icons8.com/ios-filled/50/horizontal-settings-mixer--v1.png"
                    alt="horizontal-settings-mixer--v1"
                  />
                  Business & Consulting
                </button>
                <button className="flex items-center border rounded-md py-3 px-6 text-xs font-medium leading-6">
                  <img
                    className="px-2"
                    width="30"
                    src="https://img.icons8.com/ios-filled/50/horizontal-settings-mixer--v1.png"
                    alt="horizontal-settings-mixer--v1"
                  />
                  Other
                </button>
              </div>
            </div>
            <div className="pt-8 pb-8">
              <div class="relative">
                <select class="w-96 appearance-none rounded border border-gray-400 bg-white py-2 px-3 pr-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option>Select expertise</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </div>
            </div>
            <div class="flex flex-col ... gap-4">
              <div className="font-medium">
                Describe the specificity of your project in few lines
              </div>
              <div>
                <textarea
                  class="w-full px-4 py-6 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder=""
                ></textarea>
              </div>
            </div>
          </div>

          <div class="flex flex-col ... gap-4">
            <div className="font-medium">What is your budget?</div>
            <div>
              <textarea
                class="w-full px-4 py-1 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                placeholder=""
              ></textarea>
            </div>
            <div className="pl-4 gap-1 text-custom-text">
              <p className="text-sm">
                Note: To maximise your options, we recommend choosing the
                highest budget amount you would be comfortable paying.
              </p>
              <p className="text-sm text-custom-lightgrey">
                A higher budget allows us to match you with a wider range of
                top-quality freelancers and agencies.
              </p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-6 pt-6">
            <div className="">
              {" "}
              <div className="font-medium pb-4">First name</div>
              <div>
                <textarea
                  class="w-full px-4 py-1 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div>
              {" "}
              <div className="font-medium pb-4">Last name</div>
              <div>
                <textarea
                  class="w-full px-4 py-1  border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div>
              {" "}
              <div className="font-medium pb-4">What is your company name?</div>
              <div>
                <textarea
                  class="w-full px-4 py-1 border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div>
              {" "}
              <div className="font-medium pb-4">
                Phone{" "}
                <span className="text-custom-lightgrey text-sm">
                  (optional)
                </span>
              </div>
              <div>
                <textarea
                  class="w-full px-4 py-1  border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div>
              {" "}
              <div className="font-medium pb-4">Where are you located?</div>
              <div>
                <textarea
                  class="w-full px-4 py-1  border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            <div>
              {" "}
              <div className="font-medium pb-4">Email</div>
              <div>
                <textarea
                  class="w-full h-auto px-4 py-1  border rounded-md resize-none focus:outline-none focus:ring focus:border-blue-100"
                  placeholder=""
                ></textarea>
              </div>
            </div>
            
          </div>
          <div class="w-full flex flex-col ... pb-12">
              <div>
                {" "}
                <div class="relative flex items-start">
                  <div class="absolute flex items-center h-5 pt-2">
                    <input
                      type="checkbox"
                      class="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                    />
                  </div>
                  <div class="pl-7 text-sm leading-5">
                    <label for="checkbox" class="font-medium text-gray-700">
                      <span className="text-custom-grey-text text-base">
                        I agree to{" "}
                      </span>
                      <span className="text-custom-blue text-base">
                        CoGig’s Terms of Service
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <hr className="my-12"></hr>
              <div>
                {" "}
               
                <button className="bg-custom-blue rounded-lg text-white py-3 px-6 text-sm flex gap-2">
                  Send proposal to ProSign
                </button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
