import stringSimilarity from "string-similarity";

export default class Strings {
    /**
     * @description Returns a text where the first letter is upper case and the rest are lower case
     * @param word - String to be modified
     * @returns Text where the first letter is upper case and the rest are lower case
     */
    static capitalizeFirstLetter(word: string): string {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }

    /**
     * @description Finds the most similar text inside an array of texts
     * @param texts - Array of texts, from which we want to find the most similar to the indicated string
     * @param similarText - Text to which we want to find the most similar in the array
     * @returns The most similar text in the array
     */
    static getMostSimilarText(texts: string[], similarText: string): string {
        return stringSimilarity.findBestMatch(similarText, texts).bestMatch.target;
    }
}