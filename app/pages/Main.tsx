import RedBox from "../pages/box";

export default function Main() {
  return (
    <div className="min-h-screen flex items-center justify-center flex-col max-w-7xl mx-auto px-4">
      
      {/* Heading */}
      <div className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Upload your files, we print them, <br className="hidden md:block" /> and deliver for free.
        </h1>

        <p className="text-lg md:text-xl mb-10 md:mb-16">
          Fast, easy, and stress-free — printing made simple from home.
        </p>
      </div>

      {/* Upload Box */}
      <RedBox />

      {/* Features */}
      <div className="mt-12 md:mt-16 w-full">
        <div className="flex justify-center">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-center">
            
            {/* Privacy-focused */}
            <div className="flex items-center gap-2 justify-center">
              <div className="w-12 h-12 bg-gray-50 border-dashed border-gray-400 border rounded-md flex items-center justify-center">
                <i className="fa-solid fa-lock text-xl md:text-2xl"></i>
              </div>
              <h1 className="text-base md:text-lg font-semibold">
                Privacy-focused
              </h1>
            </div>

            {/* Easy to Use */}
            <div className="flex items-center gap-2 justify-center">
              <div className="w-12 h-12 bg-gray-50 border-dashed border-gray-400 border rounded-md flex items-center justify-center">
                <i className="fa-solid fa-hand-pointer text-xl md:text-2xl"></i>
              </div>
              <h1 className="text-base md:text-lg font-semibold">
                Easy to Use
              </h1>
            </div>

            {/* Hassle Free */}
            <div className="flex items-center gap-2 justify-center">
              <div className="w-12 h-12 bg-gray-50 border-dashed border-gray-400 border rounded-md flex items-center justify-center">
                <i className="fa-solid fa-smile text-xl md:text-2xl"></i>
              </div>
              <h1 className="text-base md:text-lg font-semibold">
                Hassle Free
              </h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
