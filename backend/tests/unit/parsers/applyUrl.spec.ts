import * as cheerio from "cheerio";
import { readFileSync } from "fs";
import { resolve } from "path";
import parseApplyUrl from "../../../src/parsers/applyUrl";
import { MissingElement } from "../../../src/parsers/errors";

describe("parseApplyUrl should", () => {
    const path = resolve("tests/unit/parsers/content.html");
    it("extract apply url from job posting", () => {
        const html = readFileSync(path).toString();
        const expectedApplyUrl =
            "https://jobs.lever.co/spotify/ddd4048a-92b4-4d89-af1d-ec1776573f4f/apply";
        expect(parseApplyUrl(cheerio.load(html))).toBe(expectedApplyUrl);
    });
    it("throw a MissingElement error if unable to find the apply url", () => {
        const html = `<div>This doesnt contain a url</div>`;
        expect(() => parseApplyUrl(cheerio.load(html))).toThrowError(
            new MissingElement("apply url")
        );
    });
});
