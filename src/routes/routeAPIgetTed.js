const routeAPIgetTed = {
    path: '/api/ted',
    method: 'get',
    handler: (request, response) => {
        response.status(200).send('get ted');
    }
}

export default routeAPIgetTed;