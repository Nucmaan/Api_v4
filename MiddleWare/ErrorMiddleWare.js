const ErrorMiddleware = (error, req, res, next) => {
     console.log("Here is an Error MiddleWare");
     const statuscode = res.statuscode ? res.statuscode : 500;
     res.status(statuscode);
     res.json({
        massage : error.massage, stack : process.env.NODE_ENV === "development" ? error.stack : null
     })
}


module.exports =  ErrorMiddleware;