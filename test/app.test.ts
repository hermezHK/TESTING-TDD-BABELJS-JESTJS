import { describe, it, expect } from "@jest/globals";
import { sumar } from "../src/utlis/helper"

describe("primer test", () => {
    it("sumando numeros", () => {
        expect(sumar(1, 2)).toBe(3);
    });
});

