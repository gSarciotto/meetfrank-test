import * as cheerio from "cheerio";
import { readFileSync } from "fs";
import { resolve } from "path";
import { MissingElement } from "../../../src/parsers/errors";
import parseJobTitle from "../../../src/parsers/title";

describe("parseJobTitle should", () => {
    const path = resolve("tests/unit/parsers/content.html");
    const html = readFileSync(path).toString();
    it("extract title from job posting", () => {
        const expectedJobTitle =
            "Associate Director, Advertising Interfaces & Market Intelligence";
        expect(parseJobTitle(cheerio.load(html))).toBe(expectedJobTitle);
    });
    it("throw MissingElement error if job title is empty", () => {
        const html = `<div class="posting-headline">
			<h2></h2>
		  </div>`;
        expect(() => parseJobTitle(cheerio.load(html))).toThrowError(
            new MissingElement("title")
        );
    });
    it("throw MissingElement error if unable to find job title", () => {
        const html = `<div>This isnt a job title</div>`;
        expect(() => parseJobTitle(cheerio.load(html))).toThrowError(
            new MissingElement("title")
        );
    });
});
