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
                <div className="flex justify-center gap-10">
                    <div className="">Privacy-focused</div>
                    <div className="">Easy to Use</div>
                    <div className="">Hassle Free</div>
                </div>
            </div>
        </div>
    );
}