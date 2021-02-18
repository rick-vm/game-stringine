import { PathLike, createWriteStream, WriteStream } from "fs";

export default class OutputFile {
  private readonly _writeStream: WriteStream;
  private _outputCounter = 0;

  constructor(path: PathLike) {
    this._writeStream = createWriteStream(path);

    console.log('\x1b[1m===============================================\n', '\x1b[0m');
    console.log('\x1b[1mOutput: \x1b[36mtest/output.txt\n', '\x1b[0m');
    console.log('\x1b[1m===============================================\n', '\x1b[0m');
  }

  public output(output: string | number): void {
    console.log(output);
    output = new Date() + '\n' + output;
    if (this._outputCounter > 0) output = '\n\n' + output;
    this._writeStream.write(output);
    this._outputCounter++;
  }
}