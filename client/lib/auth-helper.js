import { signout } from "./api-auth.js";

const auth = {
  isAuthenticated() {
    if (typeof window === "undefined") return false;
  
    const jwt = localStorage.getItem("jwt");
  
    if (!jwt || jwt === "undefined") return false; 
  
    try {
      return JSON.parse(jwt);
    } catch (err) {
      console.error("Invalid JWT in localStorage", err);
      return false;
    }
  },
  

  authenticate(jwt, cb) {
    if (typeof window !== "undefined")
      localStorage.setItem("jwt", JSON.stringify(jwt));
    cb();
  },

  clearJWT(cb) {
    if (typeof window !== "undefined") localStorage.removeItem("jwt");
    cb(); // optional
    signout().then((data) => {
      document.cookie = "t=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    });
  },
};

export default auth;
