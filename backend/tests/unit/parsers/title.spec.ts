import * as cheerio from "cheerio";
import { readFileSync } from "fs";
import { resolve } from "path";
import parseJobTitle from "../../../src/parsers/title";

describe("parseJobTitle should", () => {
    const path = resolve("tests/unit/parsers/content.html");
    const html = readFileSync(path).toString();
    it("extract title from job posting", () => {
        const expectedJobTitle =
            "Associate Director, Advertising Interfaces & Market Intelligence";
        expect(parseJobTitle(cheerio.load(html))).toBe(expectedJobTitle);
    });
});
