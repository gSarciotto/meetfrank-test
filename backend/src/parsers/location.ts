import { CheerioAPI } from "cheerio";
import { MissingElement } from "./errors";

function parseJobLocation($: CheerioAPI): string {
    const locationElement = $(
        "div.posting-categories div.posting-category.sort-by-time"
    );
    const location = locationElement?.text().split("/")[0].trim();
    if (!location) {
        throw new MissingElement("location");
    }
    return location;
}

export default parseJobLocation;
