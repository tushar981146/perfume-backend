const devErrors = (res, error, statusCode) => {
  res.status(statusCode).json({
    status: statusCode,
    message: error.message,
    stacktracker: error.stack,
    error: error
  });
};

const productionError = (res, error, statusCode) => {
  if (error.isOperational) {
    res.status(statusCode).json({
      status: statusCode,
      message: error.message
    });
  } else {
    res.status(500).json({
      status: "error",
      message: "something wrong happened please try later"
    });
  }
};

const errorHandler = (error, req, res, next) => {

  if (res.headersSent) {
    return next(error); // 🔥 sabse important line
  }

  error.statusCode = error.statusCode || 500;

  const statusCode = error.statusCode;

  if (process.env.NODE_ENV === "development") {
    devErrors(res, error, statusCode );
  } else {
    productionError(res, error, statusCode);
  }
};

export default errorHandler;
