const { readFileSync } = require("fs");
const path = require("path");
const { gql } = require("graphql-tag");

const typeDefs = gql`
  ${readFileSync(
    path.join(process.cwd(), "src/modules/User/user.typedef.graphql"),
    "utf-8"
  )}

  ${readFileSync(
    path.join(process.cwd(), "src/modules/Goal/goal.typedef.graphql"),
    "utf-8"
  )}

  ${readFileSync(
    path.join(process.cwd(), "src/modules/Activity/activity.typedef.graphql"),
    "utf-8"
  )}

  ${readFileSync(
    path.join(process.cwd(), "src/modules/Nutrition/nutrition.typedef.graphql"),
    "utf-8"
  )}
`;

module.exports = typeDefs;