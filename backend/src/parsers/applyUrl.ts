import { CheerioAPI } from "cheerio";
import { MissingElement } from "./errors";

function parseApplyUrl($: CheerioAPI): string {
    const applyUrlButton = $(
        "div.posting-header a.postings-btn.template-btn-submit"
    );
    const applyUrl = applyUrlButton?.attr("href");
    if (!applyUrl) {
        throw new MissingElement("apply url");
    }
    console.log(applyUrl);
    return applyUrl;
}

export default parseApplyUrl;
