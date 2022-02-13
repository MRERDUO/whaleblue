import fs from "fs";

export function writeFiletoAdd(filePath, data = {}, options?: any) {
  options || (options = { type: "add" }); // options.type : force | add
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" }));
    const content = options.type === "force" ? data : Object.assign(raw, data);
    fs.writeFileSync(filePath, JSON.stringify(content));
  } catch (err) {
    throw err;
  }
}

export function readFileSync(path: fs.PathOrFileDescriptor) {
  const content = fs.readFileSync(path, { encoding: "utf8" });
  return JSON.parse(content);
}

// writeFiletoAdd(dir, { test: "test" }, { type: "add" });
