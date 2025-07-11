import Home from "./components/Home";
const App = () => {
    return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-black text-white py-8 px-4">

            <div className=" text-center mb-8">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500 text-center mb-8 animate-fade-in">
                    ENHANCE_X
                </h1>

               <h1 className="font-bold text-2xl text-violet-200 mb-2">
                    AI Image Enhancer{" "}
                </h1>
                <p className="text-lg text-gray-300">
                    Upload your Image and let AI enhance to in seconds!
                </p>
            </div>

            <Home />

        </div>
    );
};

export default App;
