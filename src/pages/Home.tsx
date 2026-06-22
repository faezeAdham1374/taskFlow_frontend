import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../redux/taskSlice";
import type { RootState, AppDispatch } from "../app/store";

import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import SearchInput from "../components/SearchInput";
import TaskGrid from "../components/TaskGrid";

export default function Home() {
    const dispatch = useDispatch<AppDispatch>();

    const { tasks, loading, search } = useSelector(
        (state: RootState) => state.tasks
    );

    useEffect(() => {
        dispatch(fetchTasks());
    }, [dispatch]);

    const filtered = tasks.filter((t) =>
        t.title.toLowerCase().includes(search.toLowerCase())
    );

    const completed = filtered.filter((t) => t.completed);
    const pending = filtered.filter((t) => !t.completed);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-950">
                <div className="h-14 w-14 border-4 border-violet-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-950 text-white">
            <Header />

            <div className="max-w-7xl mx-auto px-6 py-8">
                <div className="grid md:grid-cols-3 gap-6 mb-10">
                    <StatsCard
                        title="Total Tasks"
                        value={filtered.length}
                    />
                    <StatsCard
                        title="Completed"
                        value={completed.length}
                        color="text-green-400"
                    />
                    <StatsCard
                        title="Pending"
                        value={pending.length}
                        color="text-orange-400"
                    />
                </div>

                <div className="mb-8">
                    <SearchInput />
                </div>

                <TaskGrid tasks={filtered} />
            </div>
        </div>
    );
}