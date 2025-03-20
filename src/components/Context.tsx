import { useState } from "react";
import InputWord from "./InputWord";

import Words from '../assets/jsons/en.json';
import { LinkedList } from '../assets/structures/LinkedList';

export default function Context() {


    const words = Words["words"];
    const randomWord = (): string => {
        return words[Math.floor(Math.random() * words.length)].englishWord;
    };


    const [phrase, setPhrase] = useState<LinkedList>((): LinkedList => {
        const phrase = new LinkedList();
        for (let i = 0; i < 10; i++)
            phrase.append(randomWord());
        return phrase;
    });

    const [curWord, setCurWord] = useState<string>(phrase.getFirst());

    const validate = (word: string): boolean => {
        if (word === curWord) {
            console.log("before removing", phrase);
            phrase.removeFirst();
            console.log("after removing", phrase);
            phrase.append(randomWord());
            console.log("after adding", phrase);
            setPhrase(phrase)
            setCurWord(phrase.getFirst());
            return true;
        }
        return false;
    }


    const renderPhrase = () => {
        return (
            <div>
                {phrase.toArray().map((word, index) =>
                    <span key={index}>{word} </span>
                )}
            </div>
        );
    }

    return (
        <>
            {renderPhrase()}
            <InputWord validate={validate} />
        </>
    );
}
