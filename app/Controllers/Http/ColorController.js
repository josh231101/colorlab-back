'use strict'

const Color = use('App/Models/Color')

class ColorController {
  async index ({ request, response }) {
    const params = request.only(['code', 'bases', 'group_id', 'include_clents'])
    if(Object.keys(params).length === 0) {
        const colors = await Color.all()
        return response.json(colors)
        }
    // Include clients
    let colors = Color.query()
      .with('clients')
    if (params.code) {
        colors = colors.where('code', params.code)
    }
    if (params.group_id) {
        colors = colors.where('group_id', params.group_id)
    }
    if (params.include_clents) {
        colors = colors.with('clients')
    }
    colors = await colors.fetch()

    return response.json(colors)
  }

  async store ({ request, response }) {
    const data = request.only(['code', 'bases', 'group_id', 'group_id'])
    data.bases = JSON.stringify(data.bases)
    const color = await Color.create(data)

    return response.status(201).json(color)
  }

  async show ({ params, response }) {
    const color = await Color.find(params.id)

    if (!color) {
      return response.status(404).json({ message: 'Color not found' })
    }

    return response.json(color)
  }

  async update ({ params, request, response }) {
    const color = await Color.find(params.id)

    if (!color) {
      return response.status(404).json({ message: 'Color not found' })
    }

    const data = request.only(['code', 'bases', 'group_id'])
    data.bases = JSON.stringify(data.bases)
    color.merge(data)
    await color.save()

    return response.json(color)
  }

  async destroy ({ params, response }) {
    const color = await Color.find(params.id)

    if (!color) {
      return response.status(404).json({ message: 'Color not found' })
    }

    await color.delete()

    return response.status(204).json(null)
  }
}

module.exports = ColorController
