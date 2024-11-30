module.exports.echoRouter = async function (fastify) {
    fastify.post("/echo", async (request) => {
        return request.body;
    });
};
