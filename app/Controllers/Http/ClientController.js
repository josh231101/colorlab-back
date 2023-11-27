"use strict";

const ClientColor = use("App/Models/ClientColor");

const Client = use("App/Models/Client");

class ClientController {
  async index({ request, response }) {
    const clients = await Client.all();

    return response.json(clients);
  }

  async store({ request, response }) {
    const data = request.only([
      "email",
      "phone",
      "first_name",
      "last_name",
      "notes",
    ]);

    const client = await Client.create(data);

    return response.status(201).json(client);
  }

  async show({ params, response }) {
    const client = await Client.find(params.id);

    if (!client) {
      return response.status(404).json({ message: "Client not found" });
    }

    return response.json(client);
  }

  async update({ params, request, response }) {
    const data = request.only([
      "email",
      "phone",
      "first_name",
      "last_name",
      "notes",
    ]);

    const client = await Client.find(params.id);

    if (!client) {
      return response.status(404).json({ message: "Client not found" });
    }

    client.merge(data);
    await client.save();

    return response.json(client);
  }

  async destroy({ params, response }) {
    const client = await Client.find(params.id);

    if (!client) {
      return response.status(404).json({ message: "Client not found" });
    }

    await client.delete();

    return response.status(204).json(null);
  }
  // Get specific client by id
  async getClientById({ params, response }) {
    const client = await Client.find(params.id);

    if (!client) {
      return response.status(404).json({ message: "Client not found" });
    }

    return response.json(client);
  }
  async getClientColors({ params, response }) {
    const client = await Client.find(params.id);

    if (!client) {
      return response.status(404).json({ message: "Client not found" });
    }
    const colors = await client.colors().fetch();
    console.log(colors);
    return response.json(colors);
  }
  async addClientMultipleColors({ params, request, response }) {
    console.log("addClientMultipleColors");
    const data = request.only(["colors"]);
    console.log(data);
    const client = await Client.find(params.id);
    if (!client) {
      return response.status(404).json({ message: "Client not found" });
    }
    // Insert multiple colors manually
    console.log({
        client_id: client.id,
        colors: data.colors,
    })
    const insert = await ClientColor.createMany(
      data.colors.map((color) => {
        return {
          client_id: client.id,
          color_id: color.color_id,
        };
      })
    );

    return response.json(client);
  }
}

module.exports = ClientController;
