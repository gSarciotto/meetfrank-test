import { CheerioAPI } from "cheerio";

function parseJobLocation($: CheerioAPI): string {
    const locationElement = $(
        "div.posting-categories div.posting-category.sort-by-time"
    );
    return locationElement.text().split("/")[0].trim();
}

export default parseJobLocation;
