import auth from "../lib/auth-helper.js";
const create = async (user) => { 
  try {
    let response = await fetch('/api/contacts/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),  
    });
  return await response.json() 
  } catch(err) {
    console.error('API error:', err);
    return { error: 'Network error or server not reachable' };
  }
  }
  const list = async (signal) => { 
    const jwt = auth.isAuthenticated(); 
  
    try {
      let response = await fetch('/api/contacts/', { 
        method: 'GET',
        signal: signal, 
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + jwt.token  
        }
      });
  
      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Error ${response.status}: ${errText}`);
      }
  
      return await response.json(); 
    } catch(err) {
      console.error("API contact list fetch error:", err);
      return { error: err.message || "Unknown error" };
    }
  };
  
  const read = async (params, credentials, signal) => { 
  try {
  let response = await fetch('/api/contacts/' + params.userId, { 
  method: 'GET',
  signal: signal, 
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + credentials.t 
  }
  })
  return await response.json() 
  } catch(err) {
  console.log(err) 
  }
  }
  const update = async (params, credentials, user) => { 
  try {
  let response = await fetch('/api/contacts/' + params.userId, { 
  method: 'PUT',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + credentials.t 
  },
  body: JSON.stringify(user) 
  })
  return await response.json() 
  } catch(err) {
  console.log(err) 
  }
  }
  const remove = async (params, credentials) => { 
  try {
  let response = await fetch('/api/contacts/' + params.userId, { 
  method: 'DELETE',
  headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + credentials.t 
  }
  })
  return await response.json() 
  } catch(err) {
  console.log(err) 
  }
  }
  export { create, list, read, update, remove }
  