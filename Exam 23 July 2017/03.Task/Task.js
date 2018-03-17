class Task {
    constructor(title, deadline){
        this.title = title
        this.deadline = deadline
        this.status = "Open"
    }

    get rank(){
        if(this.isOverdue){
            return 0
        } else if (this.status === 'In Progress'){
            return 1
        } else if (this.status === 'Open'){
            return 2
        } else {
            return 3
        }
    }

    get deadline(){
        return this._deadline
    }

    set deadline(value){
        if (value < Date.now()){
            throw new Error('Date cannot be in the past!')
        }
        this._deadline = value
    }

    get isOverdue(){
        return this.deadline < Date.now() && this.status !== 'Complete'
    }

    get icon(){
          if(this.isOverdue){
            return '\u26A0'
        }
          else if(this.status === 'Open'){
            return '\u2731'
        } else if (this.status === 'In Progress'){
            return '\u219D'
        } else if (this.status === 'Complete'){
            return '\u2714'
        }
    }

    toString(){
        if(this.status === 'Complete'){
            return `[${this.icon}] ${this.title}`
        } else if (this.isOverdue){
            return `[${this.icon}] ${this.title} (overdue)`
        } else {

            return `[${this.icon}] ${this.title} (deadline: ${this.deadline.toString()}`
        }
    }
    //80/100 do tyk bez comparator, testva se vsqko edno v class-a

    static comparator(a, b){
        let criteria = a.rank - b.rank

        if(criteria === 0){
            return a.deadline - b.deadline
        }

        return criteria
    }

}

let task = new Task('', Date.now())
task.deadline = 3