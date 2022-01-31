const fs = require("fs");

export function writeFiletoAdd(filePath, data = {}, options) {
  options || (options = { type: "force" });
  try {
    const raw = JSON.parse(fs.readFileSync(filePath, { encoding: "utf8" }));
    const content = options.type === "force" ? data : Object.assign(raw, data);
    fs.writeFileSync(filePath, JSON.stringify(content));
  } catch (err) {
    throw err;
  }
}

export const readFileSync = fs.readFileSync;

// writeFiletoAdd(dir, { test: "test" }, { type: "add" });
