const html = `
<html>hi</html>
<p>hello</p>
<p>world</p>
<p>again</p>
`;

const output = [];

const parser = (html) => {
  let i = 0;

  while (i < html.length) {
    if (html[i] === "<") {
      const start = i;
      const end = html.indexOf(">", start);

      const tagName = html.slice(start + 1, end);

      if (tagName.startsWith("/")) {
        i = end + 1;
        continue;
      }

      const closeTag = `</${tagName}>`;
      const closeStart = html.indexOf(closeTag, end);


      const content = html.slice(end + 1, closeStart).trim();

      const existing = output.find((item) => item[tagName]);

      if (existing) {
        existing[tagName].count++;
        existing[tagName].content += `, ${content}`;
      } else {
        output.push({
          [tagName]: {
            count: 1,
            content: content,
          },
        });
      }

      i = closeStart + closeTag.length;
    } else {
      i++;
    }
  }

  return output;
};

console.log(parser(html));
