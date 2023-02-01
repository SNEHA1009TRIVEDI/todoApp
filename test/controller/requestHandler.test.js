const { INET } = require('sequelize');
const service = require('../../services/task');
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

