export default class Project{
    static projectsList = [];

    constructor(name){
        this.name = name;
        this.tasks = [];
        Project.projectsList.push(this);
    }

    setName(name){
        this.name = name;
    }

    addTask(task){
        this.tasks.push(task);
    }

    getTask(taskName){
        for (let task of this.tasks){
            if (task.name == taskName) return task;
        }
    }

    deleteTask(taskName){
        for (let i = 0; i < this.tasks.length; i++){
            let task = this.tasks[i];

            if (task.name == taskName) this.tasks.splice(i, 1);
        }
    }

    deleteProject(projectName){
        for (let i = 0; i < Project.projectsList.length; i++){
            let project = Project.projectsList[i];

            if (project.name == projectName) Project.projectsList.splice(i, 1);
        }
    }

}
