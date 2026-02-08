import RedBox from "../pages/box";

export default function Main() {
    return (
        <div className="min-h-screen flex items-center justify-center flex-col max-w-7xl mx-auto">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-6">
                    Upload your files, we print them, <br /> and deliver for free.
                </h1>
                <p className="text-xl mb-16">
                    Fast, easy, and stress-free — printing made simple from home.
                </p>
            </div>
            <RedBox/>
            <div className="mt-16">
                <div className="flex justify-center gap-10 text-center">
                    <div className="flex justify-center gap-10">
                        {/* Privacy-focused */}
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-gray-50 border-dashed border-gray-400 border rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-lock text-2xl"></i>
                            </div>
                            <h1 className="text-lg font-semibold">Privacy-focused</h1>
                        </div>

                        {/* Easy to Use */}
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-gray-50 border-dashed border-gray-400 border rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-hand-pointer text-2xl"></i>
                            </div>
                            <h1 className="text-lg font-semibold">Easy to Use</h1>
                        </div>

                        {/* Hassle Free */}
                        <div className="flex items-center gap-2">
                            <div className="w-12 h-12 bg-gray-50 border-dashed border-gray-400 border rounded-md flex items-center justify-center">
                                <i className="fa-solid fa-smile text-2xl"></i>
                            </div>
                            <h1 className="text-lg font-semibold">Hassle Free</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}