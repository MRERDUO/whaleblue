import request from "request";

const host = "https://you.163.com/xhr";

export function get(url: string, options?: request.CoreOptions): Promise<{resp, body}>{
  url = host + url;
  return new Promise((resolve, reject) => {
    request(url, options, function(err, resp, body) {
      if (err) reject(err);
      else resolve({ resp, body });
    });
  });
}
