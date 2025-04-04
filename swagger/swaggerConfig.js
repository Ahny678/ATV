const swaggerJsdoc = require("swagger-jsdoc");

const swaggerOptions = {
  definition: {
    openapi: "3.0.4",
    info: {
      title: "ATV API",
      version: "1.0.0",
      description: "API for managing streamers and their subscribers",
    },
    servers: [
      {
        url: "https://atv-myj0.onrender.com/",
        // url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./swagger/*.js"], // the other swagger documets
};

const swaggerSpecs = swaggerJsdoc(swaggerOptions);

module.exports = swaggerSpecs;
