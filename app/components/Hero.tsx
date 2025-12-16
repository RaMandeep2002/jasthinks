import { Calendar, Heart } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="pt-38 pb-16 px-4 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1920&q=80')`,
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-linear-to-br from-indigo-50/90 via-white/80 to-white/90"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="relative w-58 h-58 bg-linear-to-br from-indigo-400 via-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl border-4 border-white ring-4 ring-indigo-100">
              <img
                src="https://picasso.cosmofeed.com/picture-profile.s3-ap-south-1.amazonaws.com/my_image1725521101-2024-05-09-07-25-2.png?w=500&q=100"
                alt="Healing Heart"
                className="w-full object-cover rounded-full border-2 border-indigo-300 shadow-xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-white rounded-full shadow p-1">
                <Heart className="w-6 h-6 text-indigo-500 animate-pulse" />
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Place where you can speak your heart out
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            You are brought here by your timing, something in you wants to get
            healed.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
            //   onClick={() => scrollToSection('services')}
              className="bg-indigo-600 text-white px-8 py-4 rounded-lg hover:bg-indigo-700 transition shadow-lg hover:shadow-xl flex items-center space-x-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Session</span>
            </button>
            <button
            //   onClick={() => scrollToSection('webinars')}
              className="bg-white text-indigo-600 border-2 border-indigo-600 px-8 py-4 rounded-lg hover:bg-indigo-50 transition"
            >
              Explore Webinars
            </button>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                REBT Certified
              </div>
              <p className="text-gray-600">Rational Emotive Behavior Therapy</p>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                Life Coaching
              </div>
              <p className="text-gray-600">Professional Guidance</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-600 mb-2">
                Psychology
              </div>
              <p className="text-gray-600">Self Reflection & Growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
