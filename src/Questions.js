



export class Questions {
    
    constructor(text, choices, answer,src) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        this.src = src
    }

    correctAnswer(choice){
        return this.answer === choice ?  true :  false;
    }
    
}

