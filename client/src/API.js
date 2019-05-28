class API {
   static baseUrl = 'http://localhost:3000' 
   static signinUrl = API.baseUrl + '/signin'
   static signupUrl = API.baseUrl + '/signup'
   static validateUrl = API.baseUrl + '/validate'

   static signin (user) {
    return fetch(this.signinUrl, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }).then(resp => resp.json())

   }

   static signup (user) {
    return fetch(this.signupUrl, {
        method: 'POST', 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(user)
    }).then(resp => resp.json())
   }

   static validate () {
       const id = localStorage.getItem('token') 
       return fetch(this.validateUrl, {
        headers: {Authorization: id}
    }).then(resp => resp.json())
   }
}

export default API