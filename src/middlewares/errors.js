import { EErrors } from "../services/error.enum.js";

const errorHandler = (error, request, response, next) => {
  console.log(error.cause);
  switch (error.code) {
    case EErrors.INVALID_TYPE:
      res.send({ status: "error", error: error.name });
      break;
    default:
      res.send({ status: "error", error: "Unknown error." });
  }
};

export default errorHandler;
