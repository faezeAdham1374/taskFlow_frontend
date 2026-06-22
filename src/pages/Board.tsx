import { useSelector } from "react-redux";
import type { RootState } from "../app/store";

import Header from "../components/Header";
import TaskCard from "../components/TaskCard";

export default function Board() {
    const { tasks, search } = useSelector(
        (state: RootState) => state.tasks
    );

    const filtered = tasks.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    const todo = filtered.filter((t) => !t.completed);
    const done = filtered.filter((t) => t.completed);

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-900 p-4 rounded-2xl">
                        <h2 className="text-orange-400 mb-4">
                            Todo ({todo.length})
                        </h2>

                        <div className="space-y-3">
                            {todo.map((t) => (
                                <TaskCard key={t.id} {...t} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 p-4 rounded-2xl">
                        <h2 className="text-green-400 mb-4">
                            Done ({done.length})
                        </h2>

                        <div className="space-y-3">
                            {done.map((t) => (
                                <TaskCard key={t.id} {...t} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}