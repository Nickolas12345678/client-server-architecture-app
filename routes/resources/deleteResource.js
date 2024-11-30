const { resourceRepository } = require("../../repositories/resource.repo");

module.exports.deleteResource = {
    method: "DELETE",
    url: "/resources/:id",
    handler: async (request, reply) => {
        try {
            const { id } = request.params;
            const deletedResource = await resourceRepository.delete(id);
            return reply.code(200).send(deletedResource);
        } catch (error) {
            request.log.error(error);
            return reply.code(404).send({ error: "Resource not found" });
        }
    },
};
