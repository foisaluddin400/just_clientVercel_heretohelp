import React from "react";
import img1 from "../../assets/tech/img1.png";
import img2 from "../../assets/tech/img2.png";

export const Apply = () => {
  return (
    <div className="max-w-7xl mx-auto py-28 md:px-6">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Section - Steps */}
        <div>
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-center space-x-4">
              <div className="text-blue-300 text-3xl">📋</div>
              <div>
                <h3 className="text-xl font-bold text-white">Apply:</h3>
                <p className="text-white">
                  Fill out our application to start your partnership journey.
                  Share your company’s strengths and how you envision a
                  partnership with BETS.
                </p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="flex items-center space-x-4">
              <div className="text-yellow-300 text-3xl">🎡</div>
              <div>
                <h3 className="text-xl font-bold text-white">Integrate:</h3>
                <p className="text-white">
                  Collaborate with our team to integrate your technologies and
                  services, ensuring seamless synergy between our solutions.
                </p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="flex items-center space-x-4">
              <div className="text-pink-300 text-3xl">🥀</div>
              <div>
                <h3 className="text-xl font-bold text-white">Thrive together:</h3>
                <p className="text-white">
                  Grow your business with BETS as we jointly explore new
                  opportunities and markets, benefiting from each other's
                  expertise and networks.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div>
          <img
            src={img1}
            alt="Tech Partnership"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ">
        {/* Left Section - Image */}
        <div>
          <img
            src={img2}
            alt="Data Center"
            className="rounded-lg shadow-lg object-cover w-full"
          />
        </div>

        {/* Right Section - Companies */}
        <div className="space-y-4">
          <p className="text-white text-lg">
            <strong>Cisco Systems:</strong> <br /> Networking and cybersecurity
            solutions.
          </p>
          <p className="text-white text-lg py-5">
            <strong>Microsoft:</strong> <br /> Cloud services and software solutions.
          </p>
          <p className="text-white text-lg">
            <strong>IBM:</strong> <br /> Artificial intelligence and data analytics.
          </p>
          <p className="text-white text-lg py-5">
            <strong>Dell Technologies:</strong> <br /> Computing and storage
            technologies.
          </p>
          <p className="text-white text-lg">
            <strong>Salesforce:</strong> <br /> Customer relationship management and
            enterprise applications.
          </p>
        </div>
      </div>
    </div>
  );
};
