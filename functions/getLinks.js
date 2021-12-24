const faunadb = require("faunadb");
const q = faunadb.query;
const { client } = require("./utils/client.js");

exports.handler = (event, context) => {
  return client
    .query(
      q.Map(
        q.Paginate(q.Match(q.Index("all_Links"))),
        q.Lambda(
          "linkRef",
          q.Let(
            {
              nameDoc: q.Get(q.Var("linkRef")),
            },
            {
              id: q.Select(["ref", "id"], q.Var("nameDoc")),
              name: q.Select(["data", "name"], q.Var("nameDoc")),
            }
          )
        )
      )
    )
    .then((response) => {
      console.log("success", response);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
      };
    })
    .catch((error) => {
      console.log("error", error);
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    });
};
