const { constants } = require("../constants");
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({
                title: "Validation Failed",
                message: err.messsage,
                stackTrace: err.stack
            });

            break;
        case constants.NOT_FOUND:
            res.json ({
                title: "Not Found",
                message: err.messsage,
                stackTrace: err.stack
            });
            case constants.UNAUTHORIZED:
            res.json ({
                title: "Un Authorized User",
                message: err.messsage,
                stackTrace: err.stack
            });
            case constants.FORBIDDEN:
            res.json ({
                title: "Access Deneid",
                message: err.messsage,
                stackTrace: err.stack
            });
            case constants.SERVER_ERROR:
            res.json ({
                title: "Server Error!!",
                message: err.messsage,
                stackTrace: err.stack
            });

        default:
            console.log("No Error,All Good !")
            break;
    }

};


module.exports = errorHandler;
