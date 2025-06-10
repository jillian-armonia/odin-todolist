import Project from "./Project";
import Task from "./ToDo";

//Create a Prompt module with the following functions:
const Prompt = (function(){
    //newProject
    const newProject = (name) => {
        const projObj = new Project(name);
        return projObj;
    }
        //Get the name from the project form
        //Create a new Project and set name from form
        //Return the Project obj
    //newTask
        //Get the current project obj
        //Get the info from the task form
        //Create a new Task and set info from the form
        //Add the Task obj to the Project obj
        //Return the Task obj
    //cancel
        //Delete form in dialog
    //editProject(projectObj)
        //Get the name from the project form
        //Set the new name of the chosen project
    //editTask(taskObj)
        //Get the info from the project form
        //The info cannot be empty
        //Set the info on the chosen task
    return {
        newProject,
    }
})()
