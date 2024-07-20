import fs from 'fs';

export default class Files {
  /**
   * @description Saves content in a new text file
   * @param path - Path where file is going to be created, including name and extension
   * @param content - Text that is going to be the content of the file
   */
  static async saveTextFile(path: string, content: string): Promise<void> {
    fs.writeFile(path, content, 'utf8', function (err) {
      if (err) {
        // eslint-disable-next-line no-console
        return console.log(err);
      }
    });
  }
}