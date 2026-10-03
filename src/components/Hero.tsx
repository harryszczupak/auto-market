const Hero = () => {
    return (
        <header className="relative flex min-h-[520px] w-full items-center justify-center overflow-hidden bg-gray-900 px-6 py-24">
            {/* Background glow */}
            <div className="absolute left-1/2 top-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-3xl" />

            <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
                {/* Badge */}
                <div className="mb-6 flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400 backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                    Premium car marketplace
                </div>

                {/* Heading */}
                <h1 className="max-w-5xl text-6xl font-bold tracking-tight text-white sm:text-7xl lg:text-8xl">
                    Find your
                    <span className="block bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent">
                        perfect drive.
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                    Explore a curated collection of premium cars. Search by
                    brand, model, fuel type and price to find the car that
                    fits your style.
                </p>

                {/* Stats */}
                <div className="mt-10 flex flex-wrap justify-center gap-3">
                    <div className="rounded-2xl border border-gray-700/60 bg-gray-800/60 px-5 py-3 backdrop-blur-sm">
                        <span className="text-lg font-semibold text-white">
                            500+
                        </span>
                        <span className="ml-2 text-sm text-gray-400">
                            vehicles
                        </span>
                    </div>

                    <div className="rounded-2xl border border-gray-700/60 bg-gray-800/60 px-5 py-3 backdrop-blur-sm">
                        <span className="text-lg font-semibold text-white">
                            40+
                        </span>
                        <span className="ml-2 text-sm text-gray-400">
                            brands
                        </span>
                    </div>

                    <div className="rounded-2xl border border-gray-700/60 bg-gray-800/60 px-5 py-3 backdrop-blur-sm">
                        <span className="text-lg font-semibold text-white">
                            24/7
                        </span>
                        <span className="ml-2 text-sm text-gray-400">
                            availability
                        </span>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="mt-14 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.25em] text-gray-500">
                    <span>Explore cars</span>
                    <span className="animate-bounce text-blue-400">↓</span>
                </div>
            </div>
        </header>
    );
};

export default Hero;