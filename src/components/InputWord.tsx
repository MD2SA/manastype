import { useState } from "react";


export default function InputWord({ validate }: { validate: (word: string) => boolean }) {

    const [typedWord, setTypedWord] = useState<string>("");

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const word = e.target.value;
        if (validate(word)) {
            setTypedWord("");
            return;
        }
        setTypedWord(word);
    }

    return (
        <input value={typedWord} onChange={handleInput} />
    );
};
