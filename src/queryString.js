const queryString = {
  decodeURIComponent(str) {
    if (str) {
      return decodeURIComponent(str.replace(/\+/g, "%20"));
    }
    return "";
  },

  parse(queryStr) {
    const segments = (queryStr[0] === "?"
      ? queryStr.substr(1)
      : queryStr
    ).split("&");
    const esc = decodeURIComponent;

    return segments.reduce((query, segment) => {
      const [key, value] = segment.split("=");

      query[esc(key)] = esc(value || "");

      return query;
    }, {});
  },

  stringify(queryObj) {
    const esc = encodeURIComponent;

    return Object.keys(queryObj)
      .filter(k => queryObj[k] !== undefined)
      .map(k => `${esc(k)}=${esc(queryObj[k])}`)
      .join("&");
  }
};

export default queryString;

