import * as cheerio from "cheerio";
import { readFileSync } from "fs";
import { resolve } from "path";
import parseJobLocation from "../../../src/parsers/location";

describe("parseJobLocation should", () => {
    const path = resolve("tests/unit/parsers/content.html");
    const html = readFileSync(path).toString();
    const expectedJobLocation = "New York, NY";
    it("extract job location from job posting removing / and trailing white spaces", () => {
        expect(parseJobLocation(cheerio.load(html))).toBe(expectedJobLocation);
    });
});
