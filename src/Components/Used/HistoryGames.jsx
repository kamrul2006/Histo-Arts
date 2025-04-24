import { useState } from "react";
import { motion } from "framer-motion";

const questions = [
    {
        question: "What year did World War II end?",
        options: ["1945", "1939", "1918", "1965"],
        answer: "1945",
    },
    {
        question: "Who was the first emperor of Rome?",
        options: ["Nero", "Julius Caesar", "Augustus", "Caligula"],
        answer: "Augustus",
    },
    {
        question: "Where was the Rosetta Stone discovered?",
        options: ["Greece", "Egypt", "Rome", "Mesopotamia"],
        answer: "Egypt",
    },
];

export default function HistoryQuizGame() {
    const [current, setCurrent] = useState(0);
    const [selected, setSelected] = useState(null);
    const [score, setScore] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const handleOptionClick = (option) => {
        setSelected(option);
        setShowAnswer(true);
        if (option === questions[current].answer) {
            setScore(score + 1);
        }
    };

    const nextQuestion = () => {
        setCurrent(current + 1);
        setSelected(null);
        setShowAnswer(false);
    };

    const resetQuiz = () => {
        setCurrent(0);
        setSelected(null);
        setScore(0);
        setShowAnswer(false);
    };

    const isLast = current === questions.length;

    return (
        <div className="py-10 border-b-4">
            <div className="my-10  mx-auto p-6 text-center  rounded-2xl shadow-lg">
                <h2 className="text-3xl lg:text-5xl font-extrabold mb-4 text-indigo-700">🧠 History Fun Quiz</h2>
                <p className="text-sm text-gray-600 mb-6">
                    Score: <span className="text-green-600 font-bold">{score}</span> / {questions.length}
                </p>

                {isLast ? (
                    <div className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800">You scored {score} out of {questions.length}!</h3>
                        <button
                            onClick={resetQuiz}
                            className="btn btn-primary text-white rounded-full px-6 py-2 mt-4"
                        >
                            Play Again
                        </button>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        key={current}
                    >
                        <div className="bg-gray-100 p-6 rounded-xl shadow-md">
                            <h4 className="text-xl font-semibold text-gray-800 mb-6">
                                {questions[current].question}
                            </h4>
                            <div className="grid gap-3">
                                {questions[current].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleOptionClick(option)}
                                        className={`py-2 px-4 rounded-full font-medium transition-all duration-300 ${showAnswer && option === questions[current].answer
                                            ? "bg-green-500 text-white"
                                            : selected === option
                                                ? "bg-red-500 text-white"
                                                : "bg-white border border-gray-300 text-gray-800 hover:bg-indigo-100"
                                            }`}
                                        disabled={showAnswer}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {showAnswer && (
                                <div className="mt-5">
                                    <p className="text-sm text-gray-600 mb-2">
                                        Correct Answer: <span className="font-semibold">{questions[current].answer}</span>
                                    </p>
                                    <button
                                        onClick={nextQuestion}
                                        className="btn btn-outline btn-info rounded-full px-6"
                                    >
                                        Next
                                    </button>
                                </div>
                            )}
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
