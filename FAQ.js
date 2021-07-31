class FAQ {
    $container
    $question
    $answer
    extend

    constructor(question, answer) {
        this.$container = document.createElement("button")
        this.$container.addEventListener('click', this.open)
        this.$container.style.display = "flex"
        this.$container.style.flexDirection = "column"
        this.$container.style.justifyContent = "space-between"
        this.$container.style.width = '400px';
        this.$container.style.padding = '10px';
        this.$container.style.backgroundColor = 'white';
        this.$container.style.border = '0';
        this.$container.style.borderRadius = '5px';
        this.$container.style.boxShadow = '5px 5px 10px rgba(0, 0, 0, 0.5)';
        this.$container.style.margin = '20px auto';

        this.$question = document.createElement("span")
        this.$question.innerHTML = question
        this.$question.style.width = '100%';
        this.$question.style.height = '30px';
        this.$question.style.textAlign = 'left'
        this.$question.style.whiteSpace = 'nowrap'
        this.$question.style.fontSize = '20px'

        this.$answer = document.createElement("span")
        this.$answer.innerHTML = answer
        this.$answer.style.width = '100%';
        this.$answer.style.textAlign = 'left'
        this.$answer.style.fontWeight = 'bold'

        this.extend = 0;
    }

    open = () => {
        console.log(this.extend);
        if (this.extend == 1) {
            this.extend = 0
            this.$container.removeChild(this.$answer)
            return;
        }
        this.extend++
            this.$container.appendChild(this.$answer)
    }

    render() {
        this.$container.appendChild(this.$question)
        return this.$container
    }
}