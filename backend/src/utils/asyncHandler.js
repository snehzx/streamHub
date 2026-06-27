const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((error) =>
      next(error)
    );
  };
};

export { asyncHandler };

//  const asyncHandler = (func) => () => {}
// its a wrapper function
// const asyncHandler = (fn) => async (req, res, next) => {
//   try {
//     await fn(req,res,next)
//   } catch (error) {e
//     res.status(error.code || 500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// };
// This is the standard way to handle Express errors
