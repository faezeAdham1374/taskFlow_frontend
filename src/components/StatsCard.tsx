type Props = {
    title: string;
    value: number;
    color?: string;
};

export default function StatsCard({
                                      title,
                                      value,
                                      color = "text-white",
                                  }: Props) {
    return (
        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <p className="text-slate-400">{title}</p>
            <h2 className={`text-4xl font-bold mt-2 ${color}`}>
                {value}
            </h2>
        </div>
    );
}