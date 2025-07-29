const create = async (params, credentials, user) => {
  try {
    let response = await fetch("/api/users/by/" + params.userId, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
      body: JSON.stringify(user),
    });
    return await response.json(); // ✅ Make sure this is here
  } catch (err) {
    console.error("API Create Error:", err);
    return { error: "Signup request failed." };
  }
};

const read = async (params, credentials, signal) => {
  try {
    const response = await fetch(`/api/users/${params.userId}`, {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${credentials.t}`, // ✅ JWT goes here
      },
    });
    return await response.json();
  } catch (err) {
    console.error('Read user error:', err);
  }
};

const update = async (params, credentials, user) => {
  try {
    let response = await fetch("/api/users/" + params.userId, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const remove = async (params, credentials) => {
  try {
    let response = await fetch("/api/users/" + params.userId, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + credentials.t,
      },
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const adminListUsers = async (signal, token) => {
  try {
    const response = await fetch('/api/users', {
      method: 'GET',
      signal: signal,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,  // ✅ This was missing!
      },
    });
    return await response.json();
  } catch (err) {
    console.error('List users fetch error:', err);
    return { error: 'Failed to fetch users' };
  }
};

export { create, read, update, remove, adminListUsers as list};
