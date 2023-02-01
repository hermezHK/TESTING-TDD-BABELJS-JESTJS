import { describe, it,  expect } from "vitest";
import { sumar } from "../src/utlis/helper";


describe("test para el modulo de app", () => {
        it("primero probamos el error si no tenemos parametros", () => {
        expect(() => sumar()).toThrow("");
    });

        it("probamos que la suma de los valores sea la correcta", () => {
        expect(sumar(1, 4)).toBe(5);

    });

        it("probamos que pasara si mandame un string como parametro", () => {
        expect(sumar(1, "2")).toBe("No aceptamos strings");

    });

        it("probamos que pasara si mandamos un string como parametro", () => {
        expect(sumar("1", 2)).toBe("No aceptamos strings");
    });
});


