export class MissingElement extends Error {
    constructor(elementName: string) {
        super(`Unable to find element "${elementName}"`);
    }
}
