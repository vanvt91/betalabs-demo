import * as fs from "fs";

export function deleteDirectory(path: string) {
  if (fs.existsSync(path)) {
    fs.rmdirSync(path, { recursive: true });
  }
}
