const getErrorMessage = (err) => {
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        return "Email already exists";
      default:
        return "Something went wrong";
    }
  }

  // Mongoose validation errors
  if (err.errors) {
    for (let errName in err.errors) {
      if (err.errors[errName].message) return err.errors[errName].message;
    }
  }

  return "Unknown error";
};

export default { getErrorMessage };
