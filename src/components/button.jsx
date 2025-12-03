import { useState } from "react";

function Button({ text }) {
    const [count, setCount] = useState(0);

    function handleCLick() {
        setCount(count + 1);
    }

    return (
        <button
            onClick={handleCLick}
            className="flex gap-x-4 py-3 px-6 border-2 border-violet-500 rounded-3xl text-base/5 cursor-pointer [&>span]:self-center hover:bg-violet-100/50 hover:scale-98 hover:shadow-md/20 active:bg-violet-100 active:scale-99 active:shadow-md/40 transition-all duration-50"
        >
            <span className="max-w-20">{text}</span>
            <div className="w-px bg-violet-500"></div>
            <span className="w-8">{count}</span>
        </button>
    );
}

export default Button;
