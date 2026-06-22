export default function Header() {
    return (
        <header className="border-b border-slate-800 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
                <h1 className="text-3xl font-bold">
                    Task<span className="text-violet-500">Flow</span>
                </h1>

                <button className="bg-violet-600 hover:bg-violet-700 transition px-5 py-2 rounded-xl">
                    + New Task
                </button>
            </div>
        </header>
    );
}