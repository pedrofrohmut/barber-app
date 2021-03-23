// const BASE_API = "https://api.b7web.com.br/devbarber/api"
// const BASE_API = "http://127.0.0.1:5001/api"
const BASE_API = "http://192.168.1.16:5001/api"

const Api = {
  checkToken: async ({ token }) => {
    try {
      const response = await fetch(`${BASE_API}/auth/refresh`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify({ token })
      })
      const jsonResponse = await response.json()
      return jsonResponse
    } catch (err) {
      console.error(`Api.refresh: ${err}`)
      throw err
    }
  },
  signIn: async ({ email, password }) => {
    try {
      const response = await fetch(`${BASE_API}/auth/login`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        body: JSON.stringify({ email, password })
      })
      const jsonResponse = await response.json()
      return jsonResponse
    } catch (err) {
      console.error(`Api.signIn: ${err}`)
      throw err
    }
  },
  signUp: async ({ name, email, password }) => {
    try {
      const response = await fetch(`${BASE_API}/users`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
      })
      const json = await response.json()
      return json
    } catch (err) {
      console.error(`Api.signUp: ${err}`)
      throw err
    }
  }
}

export default Api
