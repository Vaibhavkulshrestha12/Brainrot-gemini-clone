import { createContext, useState } from "react";
import run from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData((prev) => prev + nextWord);
        }, 30 * index);
    };

    const newChat = () => {
        setLoading(false);
        setShowResults(false);
        setResultData("");
        setInput("");
    };

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResults(true);

        let response;
        
        if (prompt !== undefined) {
            response = await run(prompt);
            setRecentPrompt(prompt);
        } else {
            setPrevPrompts((prev) => [...prev, input]);
            setRecentPrompt(input);
            response = await run(input);
        }

        try {
            let chaoticResponse = response;

            const chaosPhrases = [
                "skibidi gyatt rizz only in ohio",
                "duke dennis did you pray today",
                "livvy dunne rizzing up baby gronk",
                "sussy imposter pibby glitch in real life",
                "sigma alpha omega male grindset",
                "andrew tate goon cave",
                "freddy fazbear, colleen ballinger",
                "smurf cat vs strawberry elephant",
                "blud dawg shmlawg",
                "ishowspeed a whole bunch of turbulence",
                "ambatukam bro really thinks he's carti",
                "literally hitting the griddy the ocky way",
                "kai cenat fanum tax",
                "garten of banban",
                "no edging in class, not the mosquito again",
                "bussing axel in harlem",
                "whopper whopper whopper whopper",
                "goofy ahh aiden ross sin city monday",
                "quirked up white boy busting it down sexual style",
                "goated with the sauce john pork",
                "grimace shake kiki do you love me",
                "huggy wuggy nathaniel b",
                "lightskin stare biggest bird",
                "omar the referee amogus",
                "uncanny wholesome reddit chungus",
                "keanu reeves pizza tower",
                "zesty poggers kumalala",
                "savesta quandale dingle glizzy rose toy ankha zone",
                "thug shaker morbin time",
                "dj khaled sisyphus oceangate shadow wizard money gang",
                "ayo the pizza here PLUH nair butthole waxing",
                "t-pose ugandan knuckles family guy funny moments",
                "subway surfers gameplay at the bottom",
                "nickeh30 ratio uwu delulu opium bird cg5 mewing",
                "fortnite battle pass all my fellas gta 6 backrooms",
                "gigachad based cringe kino redpilled no nut november pokénut november",
                "foot fetish F in the chat",
                "i love lean looksmaxxing gassy social credit",
                "bing chilling xbox live mrbeast kid named finger",
                "better caul saul i am a surgeon hit or miss i guess they never miss huh"
            ];

            chaoticResponse += " 💀💥";

            for (let i = 0; i < chaosPhrases.length; i++) {
                if (Math.random() > 0.8) {
                    chaoticResponse += " " + chaosPhrases[Math.floor(Math.random() * chaosPhrases.length)];
                }
            }

            chaoticResponse = chaoticResponse.split(" ").map((word, index) => {
                if (Math.random() > 0.7) {
                    word += " ***CHAOS!!!***";
                }
                return word;
            }).join(" ");

            chaoticResponse += " ***BRAINROT ACTIVATED*** 💥💀💥";

            let newResponseArray = chaoticResponse.split("");
            for (let i = 0; i < newResponseArray.length; i++) {
                const nextWord = newResponseArray[i];
                delayPara(i, nextWord);
            }
        } catch (error) {
            console.error("Error while processing chat:", error);
        } finally {
            setLoading(false);
            setInput("");
        }
    };

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        input,
        setInput,
        showResults,
        loading,
        resultData,
        newChat,
    };

    return (
        <Context.Provider value={contextValue}>{props.children}</Context.Provider>
    );
};

export default ContextProvider;
