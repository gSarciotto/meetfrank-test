import { CheerioAPI } from "cheerio";

function parseJobTitle($: CheerioAPI): string {
    const titleElement = $("div.posting-headline h2");
    return titleElement.text();
}

export default parseJobTitle;
