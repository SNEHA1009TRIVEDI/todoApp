const service = require('../../src/services/task');
const controller=require('../../src/controller/requestHandler');
it('should give the list of task', async () => {
    jest.spyOn(service, 'getTasks').mockResolvedValue({
        id: 1,
    });
    const mockRes = {
        send: jest.fn(),
    };
    await controller.getTasks({
        body:{
        id: 12,
        taskName: 'sdd',
        isComplete: true
    }
    },mockRes);
    expect(mockRes.send).toBeCalledWith({id:1});
})

it('should add the task ', async () => {
    jest.spyOn(service, 'postTask').mockResolvedValue({
        taskName: 'test'
    });
    const mockRes = {
        send: jest.fn(),
    };
    await controller.postTask({
        body:{
        id: 12,
        taskName: 'sdd',
        isComplete: true
    }
    },mockRes);
    expect(mockRes.send).toBeCalledWith({taskName: 'test'});
})
