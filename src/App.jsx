import { useState, useEffect, useRef } from "react";

import List from "./list";
import Text from "./components/text";
import InputText from "./components/input-text";
import Button from "./components/button";

function App() {
    const inputTextRef = useRef(null);

    const [text, setText] = useState("Text");
    const [isShow, setShow] = useState(false);

    const changeText = (e) => {
        const newText = e.target.value;
        newText ? setText(newText) : setText("");
    };

    useEffect(() => {
        const handleClick = (e) => {
            if (
                inputTextRef.current &&
                inputTextRef.current.contains(e.target)
            ) {
                !inputTextRef.current.value && setText("");
                setShow(true);
            } else {
                !inputTextRef.current.value && setText("Text");
                setShow(false);
            }
        };

        document.body.addEventListener("click", handleClick);

        return () => document.body.removeEventListener("click", handleClick);
    }, [inputTextRef]);

    const compsArr = [
        {
            title: "Text",
            component: <Text content={text} show={isShow} />,
        },
        {
            title: "Input text",
            component: (
                <InputText
                    ref={inputTextRef}
                    onChange={(e) => changeText(e)}
                    placeholder={"Please type to change the text above"}
                />
            ),
        },
        {
            title: "Button",
            component: <Button text="Click me" />,
        },
    ];

    return (
        <div className="min-h-screen bg-neutral-100/50 p-12">
            <List arr={compsArr} />
        </div>
    );
}

export default App;
