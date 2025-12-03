import { useState, useRef, useLayoutEffect } from "react";

function Text(props) {
    // Elements ref
    const parRef = useRef(null);
    const lastLetterRef = useRef(null);

    // States
    const [lastLetterPosition, setLastLetterPosition] = useState({
        position: "absolute",
        x: 0,
        y: 0,
    });

    // Function to get the position of the last letter
    const updatePosition = () => {
        if (lastLetterRef.current) {
            const rect = lastLetterRef.current.getBoundingClientRect();
            setLastLetterPosition({
                ...lastLetterPosition,
                top: `${rect.y}px`,
                left: `${rect.x + rect.width}px`,
            });
        }
    };

    // Layout Effect
    useLayoutEffect(() => {
        // Observe the text change
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (
                    mutation.type === "characterData" ||
                    mutation.type === "childList"
                ) {
                    updatePosition();
                }
            });
        });

        parRef.current &&
            observer.observe(parRef.current, {
                characterData: true,
                childList: true,
                subtree: true,
            });

        window.addEventListener("resize", updatePosition);
        window.addEventListener("scroll", updatePosition);

        return () => {
            observer.disconnect;
            window.removeEventListener("resize", updatePosition);
            window.removeEventListener("scroll", updatePosition);
        };
    }, []);

    // Split last letter
    const text = props.content;
    const lastChar = text && text.at(-1);
    const remainingText = text && text.slice(0, -1);

    return (
        <div className="flex w-full justify-center flex-wrap text-4xl font-bold">
            <p ref={parRef} className="inline">
                {remainingText}
                <span ref={lastLetterRef}>{lastChar}</span>
            </p>
            {props.show ? (
                <span
                    style={lastLetterPosition}
                    className="h-10 w-[3px] ml-[2px] bg-black rounded animate-[pulseAnimation_1s_step-end_infinite]"
                ></span>
            ) : (
                <span className="absolute h-10 w-0"></span>
            )}
            <span className="h-10 w-0"></span>
        </div>
    );
}

export default Text;
