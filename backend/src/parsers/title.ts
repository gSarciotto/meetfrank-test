import { CheerioAPI } from "cheerio";
import { MissingElement } from "./errors";

function parseJobTitle($: CheerioAPI): string {
    const titleElement = $("div.posting-headline h2");
    const title = titleElement?.text().trim();
    if (!title) {
        throw new MissingElement("title");
    }
    return title;
}

export default parseJobTitle;
