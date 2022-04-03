import * as cheerio from "cheerio";
import { readFileSync } from "fs";
import { resolve } from "path";
import { MissingElement } from "../../../src/parsers/errors";
import parseJobLocation from "../../../src/parsers/location";

describe("parseJobLocation should", () => {
    const path = resolve("tests/unit/parsers/content.html");
    const html = readFileSync(path).toString();
    const expectedJobLocation = "New York, NY";
    it("extract job location from job posting removing / and trailing white spaces", () => {
        expect(parseJobLocation(cheerio.load(html))).toBe(expectedJobLocation);
    });
    it("throw a MissingElement error if job location is empty", () => {
        const html = `<div class="posting-headline">
			<div class="posting-categories">
			  <div href="#" class="sort-by-time posting-category medium-category-label"> /</div>
			</div>
		  </div>`;
        expect(() => parseJobLocation(cheerio.load(html))).toThrowError(
            new MissingElement("location")
        );
    });
    it("throw a MissingElement error if unable to find job location", () => {
        const html = `<div>This doesnt contain job location</div>`;
        expect(() => parseJobLocation(cheerio.load(html))).toThrowError(
            new MissingElement("location")
        );
    });
});
