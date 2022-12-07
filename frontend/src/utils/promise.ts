export default (promise: any) => promise
    .then((response: any) => {
        if (response.ok) return ([null, response, response.data])
        return ([response.errors, response, null])
    })
    .catch((error: any) => Promise.resolve([error, { ok: false }, null]))