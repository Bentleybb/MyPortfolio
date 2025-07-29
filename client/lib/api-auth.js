const signup = async (user) => {
  try {
    const response = await fetch('/auth/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    });

    // ⚠️ Important: response.json() must be returned!
    return await response.json();
  } catch (err) {
    console.error("Signup fetch error:", err);
    return { error: "Network error or server is down." }; // fallback
  }
};

const signin = async (user) => {
  try {
    let response = await fetch("/auth/signin/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(user),
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
const signout = async () => {
  try {
    let response = await fetch("/auth/signout/", { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};
export { signup, signin, signout };
