const routeAPIgetEducations = {
    path: '/api/educations',
    method: 'get',
    handler: (request, response) => {
        response.status(200).send('get educations');
    }
}

export default routeAPIgetEducations;