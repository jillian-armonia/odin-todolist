//CREATE a Project class to store info in the object
    //projectName
    //New array for todos

class Project{
    static projectsList = {};

    constructor(name){
        this.name = name;
        this.tasks = [];
        projectsList[this.name] = this;
    }

    editName(name){
        this.name = name;
    }

    deleteTask(task){
        delete this.tasks[task];
    }

    deleteProject(project){
        delete Project.projectsList[project];
    }
}
