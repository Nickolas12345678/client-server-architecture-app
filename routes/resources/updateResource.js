const { resourceRepository } = require("../../repositories/resource.repo");

module.exports.updateResource = {
    method: "PUT",
    url: "/resources/:id",
    schema: {
        body: {
            type: "object",
            required: ["name", "type"],
            properties: {
                name: { type: "string" },
                type: { type: "string" },
                price: { type: "number" },
                amount: { type: "number" },
            },
        },
    },
    handler: async (request, reply) => {
        try {
            const { id } = request.params;
            const { name, type, amount = 0, price = 0 } = request.body;

            const updatedResource = await resourceRepository.update(id, {
                name,
                type,
                amount,
                price,
            });

            return reply.code(200).send(updatedResource);
        } catch (error) {
            request.log.error(error);
            return reply.code(404).send({ error: "Resource not found" });
        }
    },
};
