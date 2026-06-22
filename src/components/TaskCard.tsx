type Props = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

export default function TaskCard({
                                     id,
                                     title,
                                     completed,
                                     userId,
                                 }: Props) {
    return (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 hover:border-violet-500 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
                <span className="text-xs text-slate-400">
                    #{id}
                </span>

                {completed ? (
                    <span className="bg-green-500/20 text-green-400 text-xs px-3 py-1 rounded-full">
                        Completed
                    </span>
                ) : (
                    <span className="bg-orange-500/20 text-orange-400 text-xs px-3 py-1 rounded-full">
                        Pending
                    </span>
                )}
            </div>

            <h3 className="font-semibold text-lg leading-7">
                {title}
            </h3>

            <div className="mt-5 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-slate-500 text-sm">
                    User #{userId}
                </span>

                <button className="text-violet-400 hover:text-violet-300">
                    View
                </button>
            </div>
        </div>
    );
}