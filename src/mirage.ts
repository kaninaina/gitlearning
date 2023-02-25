import { createServer } from "miragejs";
import { AnyFactories } from "miragejs/-types";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/list", () => {
      return {
        data: [
          { name: "kani", id: 1 },
          { name: "kani", id: 1 },
          { name: "kani", id: 1 },
          { name: "kani", id: 1 },
          { name: "kani", id: 1 },
          { name: "kani", id: 1 },
        ],
      };
    });
  },
});
