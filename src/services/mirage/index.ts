import {
  ActiveModelSerializer,
  createServer,
  Factory,
  JSONAPISerializer,
  Model,
  Response,
} from "miragejs";
import faker from "faker";

type User = {
  name: string;
  email: string;
  createdAt: string;
};

export function makeServer() {
  const server = createServer({
    serializers: {
      application: JSONAPISerializer,
    },
    models: {
      user: Model.extend<Partial<User>>({}),
    },
    factories: {
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`;
        },
        email() {
          return faker.internet.email().toLocaleLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },
    seeds(server) {
      server.createList("user", 8);
    },
    routes() {
      this.namespace = "api";
      this.timing = 750; // ms

      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;
        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = schema.db.users.slice(pageStart, pageEnd);
        return new Response(200, { "x-total-count": String(total) }, { users });
      });
      this.post("/users");
    },
  });
  return server;
}
