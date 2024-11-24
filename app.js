const fastify = require('fastify')({ logger: true });

// Маршрути
fastify.get('/api/resources', async (request, reply) => {
    return { resources: [] };
});

fastify.get('/api/resources/:id', async (request, reply) => {
    const { id } = request.params;
    return { resource: { id } };
});

fastify.post('/api/resources', async (request, reply) => {
    const { body } = request;
    reply.code(201);
    return { message: 'Resource created', resource: body };
});

fastify.put('/api/resources/:id', async (request, reply) => {
    const { id } = request.params;
    const { body } = request;
    return { message: 'Resource updated', resource: { id, ...body } };
});

fastify.delete('/api/resources/:id', async (request, reply) => {
    const { id } = request.params;
    return { message: `Resource with id ${id} deleted` };
});

// Запуск сервера
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '0.0.0.0' });
        console.log('Server is running');
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();