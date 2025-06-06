//USE "npm install date-fns -- save" to use for time formatting
//CREATE a Task class
    //constructor: title, description, dueDate(format with date-fns), priority, status
    //methods:
        //editInfo
        //setCompleted

export default class Task{
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority,
        this.status = "pending";
    }

    setInfo(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    setStatus(){
        this.status == "pending" ? this.status = "completed" : this.status = "pending";
    }
}
