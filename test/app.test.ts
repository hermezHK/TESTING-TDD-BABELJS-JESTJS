import { describe,  it, vi, expect } from "vitest";
import http from "node:http";

global.fetch = vi.fn()

describe("probando app", () => {
    it("esperamos esta de la aplicacion sea 200", async () => {
        const request = http.get("http://localhost:9000", (response) => {
            expect(response.statusCode).toBe(200);
    });

    request.on("error", (error) => {
        console.log(error);
    });
  });
});