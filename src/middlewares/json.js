export async function json(request, repsonse) {
    const buffers = []

    for await (const chunk of request) {
        buffers.push(chunk)
    }

    try {
        request.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch (error) {
        request.body = null
    }

    repsonse.setHeader('Content-type', 'application/json')
}