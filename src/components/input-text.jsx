import { useRef, useState, useEffect } from "react";

function InputText(props) {
    // Ref
    const inputRef = props.ref;
    const spanRef = useRef(null);

    // States
    const [inputWidth, setInputWidth] = useState(0);
    const [spanWidth, setSpanWidth] = useState(0);
    const [isSpanVisible, setIsSpanVisible] = useState(true);

    // Effect
    useEffect(() => {
        // Functions to get props of input and span
        const getInputProps = () => {
            if (inputRef.current) {
                const rect = inputRef.current.getBoundingClientRect();
                setInputWidth(rect.width);
            }
        };

        const getSpanProps = () => {
            if (spanRef.current) {
                const rect = spanRef.current.getBoundingClientRect();
                setSpanWidth(rect.width);
            }
        };

        // Function to toggle the placeholder's display
        const spanToggleDisplay = (e) => {
            if (e.target === inputRef.current) {
                setIsSpanVisible(false);
            } else {
                setIsSpanVisible(inputRef.current.value === "" ? true : false);
            }
        };

        // Get Initial props
        getInputProps();
        getSpanProps();

        // Update props on window resize
        window.addEventListener("resize", getInputProps);

        // Trigger the placeholder's display whether input is clicked / changed or not
        window.addEventListener("click", (e) => spanToggleDisplay(e));

        return () => {
            // Clean up
            window.removeEventListener("resize", getInputProps);
            window.removeEventListener("click", (e) => spanToggleDisplay(e));
        };
    }, []);

    return (
        <div className="relative w-[80%] overflow-x-hidden">
            <input
                ref={inputRef}
                type="text"
                name="input-text"
                id="input-text"
                onChange={props.onChange}
                autoComplete="off"
                className="relative w-full bg-transparent border border-neutral-400 rounded-xl px-2 py-1 z-2"
            />
            <span
                ref={spanRef}
                className={`${
                    isSpanVisible ? "inline" : "hidden"
                } absolute top-[50%] left-2 translate-y-[-50%] text-sm opacity-50 whitespace-nowrap unselected z-1 ${
                    inputWidth - 16 <= spanWidth &&
                    "animate-[autoScroll_6s_linear_infinite]"
                }`}
            >
                {props.placeholder}
            </span>
            <div className="absolute top-0 left-0 w-full h-full bg-neutral-100/80 rounded-xl"></div>
        </div>
    );
}

export default InputText;
