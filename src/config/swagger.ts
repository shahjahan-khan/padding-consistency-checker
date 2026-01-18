import { OpenAPIV3 } from "openapi-types";

export const swaggerSpec: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: {
    title: "Padding Checker API",
    version: "1.0.0",
    description: "API to validate number padding"
  },
  paths: {
    "/check-padding": {
      post: {
        summary: "Check number padding",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["values"],
                properties: {
                  values: {
                    type: "array",
                    items: { type: "string" },
                    example: ["001", "002", "003"]
                  }
                }
              }
            }
          }
        },
        responses: {
          "200": {
            description: "Result",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    result: { type: "number", example: 3 }
                  }
                }
              }
            }
          },
          "400": {
            description: "Bad Request"
          }
        }
      }
    }
  }
};