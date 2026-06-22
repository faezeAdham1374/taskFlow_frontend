import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../app/store";
import { setSearch } from "../redux/taskSlice";

export default function SearchInput() {
    const dispatch = useDispatch<AppDispatch>();
    const search = useSelector(
        (state: RootState) => state.tasks.search
    );

    return (
        <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) =>
                dispatch(setSearch(e.target.value))
            }
            className="
                w-full
                bg-slate-900
                border
                border-slate-800
                rounded-2xl
                px-5
                py-4
                outline-none
                focus:border-violet-500
                transition
            "
        />
    );
}