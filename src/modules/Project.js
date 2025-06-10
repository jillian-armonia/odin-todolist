export default class Project{
    static projectsList = [];

    constructor(name){
        this.name = name;
        this.id = "proj-" + crypto.randomUUID();
        this.tasks = [];
        Project.projectsList.push(this);
    }

    setName(name){
        this.name = name;
    }

    addTask(task){
        this.tasks.push(task);
    }

    getTask(taskId){
        for (let task of this.tasks){
            if (task.id == taskId) return task;
        }
    }

    deleteTask(taskId){
        for (let i = 0; i < this.tasks.length; i++){
            let task = this.tasks[i];

            if (task.id == taskId) this.tasks.splice(i, 1);
        }
    }

    static getProject(projectId){
        for (let i = 0; i < Project.projectsList.length; i++){
            let project = Project.projectsList[i];

            if (project.id == projectId) return project;
        }
    }

    static deleteProject(projectId){
        for (let i = 0; i < Project.projectsList.length; i++){
            let project = Project.projectsList[i];

            if (project.id == projectId) Project.projectsList.splice(i, 1);
        }
    }

}
