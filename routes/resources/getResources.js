const { resourceRepository } = require("../../repositories/resource.repo");

module.exports.getResources = {
    method: "GET",
    url: "/resources",
    handler: async (request, reply) => {
        try {
            const resources = await resourceRepository.read();
            return reply.code(200).send(resources);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send({ error: "Failed to fetch resources" });
        }
    },
};
