const { tasks1 } = require('../../database/models/tasks1')
const { findIndexById } = require('../utils/arrayUtils')

const getTasks = async () => {
    console.log("GET /tasks/ service is called")
    return (await tasks1.findAll());
}

const getTask = async (id) => {
    console.log("GET /tasks/:id service is called")
    const requestTaskId = findIndexById(id)
    return (await tasks1.findOne({ where: { id: id } }));
}

const postTask = async (name) => {
    console.log("POST /tasks/ service is called")
    const task = {
        //id: global.id,
        isComplete: false,
        taskName: name
    }
    // global.id += 1
    const response = await tasks1.create(task);
    console.log(response);
    // global.db.push(task)
    return response;
}

const completeTask = async (id) => {
    console.log("PATCH /tasks/:id service is called")
    const requestTaskId = findIndexById(id)
    //global.db[requestTaskId].isComplete = true
    
    return await tasks1.update({ isComplete: true }, {
        where: {
            id: id
        },
        returning: true
    })
}

const deleteTasks = async (isComplete) => {
    console.log("DELETE /tasks/ service is called")
    // const initialLength = db.length
    // isComplete === "true" ? global.db.splice(0, global.db.length, ...global.db.filter((task) => task.isComplete !== true)) : global.db.splice(0, global.db.length)
    // return `Deleted ${initialLength - global.db.length} element(s)`
    const id_todelte =tasks1.findOne({ where: { isComplete: true } });
    const x = await tasks1.destroy({
        where: {
            isComplete: true
        }
    })
    return x;
}

module.exports = { getTasks, getTask, postTask, completeTask, deleteTasks }
