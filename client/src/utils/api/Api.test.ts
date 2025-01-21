import { get, HttpStatus } from "./Api";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

describe("API Utils", () => {

  const server = setupServer(
    http.get('/success', () => {
      return HttpResponse.json(
        { message: 'some-response' },
        { status: 200 }
      );
    }),
    http.get('/failure', () => {
      return HttpResponse.json(
        { message: 'Not found!' },
        { status: 404 }
      );
    }),
  );

  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  describe("GET", () => {
    it("should return JSON response when request is successful", async () => {
      const result = await get("/success", [HttpStatus.OK]);

      expect(result).toEqual({ message: "some-response" });
    });

    it("should throw error if response status is not within acceptedResponseCodes", async () => {
      await expect(get("/failure", [ HttpStatus.OK ]))
        .rejects
        .toThrow("Not found!");
    });
  });
});
