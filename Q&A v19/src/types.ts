const imageBaseUrl = "/images/"

export interface GameStep {
    id: number
    img?: string
    stepTextContent: StepTextContent
    answers: Answer[]
}

export interface Answer {
    navigateTo: number
    text?: string
    answerType: "button" | "text"
}

export interface StepTextContent {
    question: string,
    description?: string,
}

export interface ButtonData {
    text: string,
    navigateTo: number
}

let gameSteps: GameStep[] = [
    {
        id: 1,
        img: "flower.jpg",
        stepTextContent: {
            question: "Vart vill du gå?"
        },
        answers: [
            {
                navigateTo: 2,
                text: "Till mitt hus",
                answerType: "button"
            }, {
                navigateTo: 3,
                text: "Lägger mig där jag är...",
                answerType: "button"
            }
        ]
    }
]

const src = imageBaseUrl + gameSteps[0].img