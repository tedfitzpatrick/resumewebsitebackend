const routeAPIgetAbout = {
    path: '/api/about',
    method: 'get',
    handler: (request, response) => {
        response.status(200).send('get about');
    }
}

export default routeAPIgetAbout;