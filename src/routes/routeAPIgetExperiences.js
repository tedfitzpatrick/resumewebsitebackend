const routeAPIgetExperiences = {
    path: '/api/experiences',
    method: 'get',
    handler: (request, response) => {
        response.status(200).send('get experiences');
    }
}

export default routeAPIgetExperiences;