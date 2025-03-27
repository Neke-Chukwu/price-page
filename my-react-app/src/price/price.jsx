import React from 'react'

const Price = () => {

        return (
          <div className="bg-gray-900 text-white py-16 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
              <p className="text-gray-400 mt-2">
                Choose the perfect plan for your content creation needs. Professional thumbnails that drive engagement and views.
              </p>
            </div>
      
            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {pricingData.map((plan, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl shadow-lg text-center transition-all duration-300 ${
                    plan.mostPopular
                      ? "bg-gradient-to-b from-purple-600 to-purple-800 border border-blue-500"
                      : "bg-gradient-to-b from-gray-800 to-gray-700 border border-gray-700"
                  } hover:scale-105 hover:shadow-xl relative`}
                >
                  {plan.mostPopular && (
                    <span className="absolute top-2 right-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded">
                      Most Popular
                    </span>
                  )}
                  
                  {/* Add SVG icon here for each plan */}
                  <h3 className="text-xl font-semibold">{plan.title}</h3>
                  <p className="text-3xl font-bold mt-2">
                    ${plan.price}
                    <span className="text-sm font-light">{plan.period}</span>
                  </p>
                  <ul className="text-gray-300 mt-4 space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center justify-center space-x-2">
                        {/* Add checkmark SVG here */}
                        <span className="text-orange-400">✔</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    className={`mt-6 px-4 py-2 rounded-lg transition-colors duration-300 ${
                      plan.mostPopular
                        ? "bg-blue-400 hover:bg-blue-500"
                        : "bg-orange-500 hover:bg-orange-600"
                    } text-white`}
                  >
                    Get Started
                  </button>
                </div>
              ))}
            </div>
      
            {/* Special Offer */}
            <div className="mt-10 p-6 bg-white text-black rounded-xl shadow-lg text-center max-w-4xl mx-auto">
              <p className="text-lg font-semibold text-gray-600">Limited Time Offer</p>
              <p className="mt-2 text-xl font-bold">Special Launch Discount!</p>
              <p className="text-gray-600 mt-1">
                Use coupon code{" "}
                <span className="bg-green-500 text-white px-2 py-1 rounded">
                  NAIJA50
                </span>{" "}
                to get one thumbnail for just $50!
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Offer valid until August 10, 2025
              </p>
            </div>
      
            {/* Additional Packages */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {additionalPackages.map((pkg, index) => (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-b from-gray-800 to-gray-700 rounded-xl text-center shadow-lg border border-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  {/* Add SVG icon here for each package */}
                  <h3 className="text-xl font-semibold">{pkg.title}</h3>
                  {pkg.price && (
                    <p className="text-3xl font-bold mt-2">
                      ${pkg.price}
                      <span className="text-sm font-light">{pkg.period}</span>
                    </p>
                  )}
                  <p className="text-gray-300 mt-3">{pkg.description}</p>
                  {pkg.buttonText && (
                    <button
                      className={`mt-6 px-4 py-2 bg-orange-500 text-white rounded-lg transition-colors duration-300 hover:bg-orange-600`}
                    >
                      {pkg.buttonText}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
      }
      
      const pricingData = [
        {
          title: "Single Thumbnail",
          price: "150",
          period: "/thumbnail",
          features: [
            "High-quality custom design",
            "Quick 24-hour delivery",
            "2 revision rounds",
          ],
          mostPopular: false,
        },
        {
          title: "Weekly Plan",
          price: "300",
          period: "/week",
          features: [
            "Up to 3 thumbnails per week",
            "Save $100 vs single orders",
            "Priority support",
            "Unlimited revisions",
          ],
          mostPopular: true,
        },
        {
          title: "Monthly Plan",
          price: "1500",
          period: "/month",
          features: [
            "Up to 10 thumbnails per month",
            "5 extra thumbnails free",
            "VIP support",
            "Brand style guide integration",
          ],
          mostPopular: false,
        },
        {
          title: "A/B Testing Plan",
          price: "200",
          period: "/2 videos",
          features: [
            "2 thumbnail variations",
            "Performance analytics",
            "Optimization recommendations",
          ],
          mostPopular: false,
        },
      ];
      
      const additionalPackages = [
        {
          title: "YouTube Overall Branding Package",
          price: "500",
          period: "/package",
          description:
            "Includes a custom YouTube Banner, Logo, and Poster Design (plus 1 complimentary thumbnail)",
          buttonText: "Get Package",
        },
        {
          title: "Writing & Creative Access",
          price: "5",
          period: "/month",
          description:
            "Subscribe for exclusive access to my day-to-day thoughts and poetry.",
          buttonText: "Subscribe Now",
        },
        {
          title: "Why Our Clients Love Us",
          price: "",
          period: "",
          description:
            "100% Custom Designs – No templates, no shortcuts. Proven Performance – Designs that drive up click through rates by up to 35%. Tailored Plans – Affordable solutions for creators at every stage.",
          buttonText: "",
        },
      ];
      
  

export default Price