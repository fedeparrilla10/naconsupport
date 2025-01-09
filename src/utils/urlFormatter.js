const urlFormatter = (urlUnformatted) => {
  const urlPattern = /"FILE":"(http[^"]+)"/g;

  return [...urlUnformatted.matchAll(urlPattern)].map((match) =>
    match[1].replace(/\\\//g, "/")
  );
};

export default urlFormatter;
