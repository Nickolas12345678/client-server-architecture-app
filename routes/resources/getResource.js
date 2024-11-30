const { resourceRepository } = require("../../repositories/resource.repo");

module.exports.getResource = {
    method: "GET",
    url: "/resources/:id",
    handler: async (request, reply) => {
        try {
            const { id } = request.params;
            const resource = await resourceRepository.read(id);
            return reply.code(200).send(resource);
        } catch (error) {
            request.log.error(error);
            return reply.code(404).send({ error: "Resource not found" });
        }
    },
};
