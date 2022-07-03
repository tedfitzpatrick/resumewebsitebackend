const routeAPIgetUser = {
    path: '/api/user',
    method: 'get',
    handler: (request, response) => {
        response.status(200).send('get user');
    }
}

export default routeAPIgetUser;