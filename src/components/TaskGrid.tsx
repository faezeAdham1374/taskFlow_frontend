import TaskCard from "./TaskCard";

type Task = {
    id: number;
    title: string;
    completed: boolean;
    userId: number;
};

export default function TaskGrid({
                                     tasks,
                                 }: {
    tasks: Task[];
}) {
    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6">
            {tasks.slice(0, 20).map((task) => (
                <TaskCard key={task.id} {...task} />
            ))}
        </div>
    );
}