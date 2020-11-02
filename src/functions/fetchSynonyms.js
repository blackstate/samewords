const axios = require('axios');

exports.handler = async (event, context, callback) => {
  const pass = (body) => {
    callback(null, { statusCode: 200, body: JSON.stringify(body) });
  };
  try {
    const body = JSON.parse(event.body);
    const word = body.word;
    const results = await axios.get(
      `https://dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=${process.env.REACT_APP_API_KEY}`
    );

    const data = results.data;

    // if no data or data is an array of close words
    if (data.length === 0 || !data[0].fl) {
      return { statusCode: 200, body: JSON.stringify(data) };
    }

    let currentData = [...data];
    let formattedData = [];

    currentData.forEach((word) => {
      const type = word.fl;
      const count = currentData.filter((w) => w.fl === type).length;

      if (count === 1) {
        formattedData.push({
          type: word.fl,
          def: word.shortdef[0],
          synonyms: word.meta.syns[0],
        });
      } else if (count > 1) {
        let dArr = currentData.filter((w) => w.fl === type);
        dArr = dArr.map((word) => {
          return {
            type: word.fl,
            def: word.shortdef[0],
            synonyms: word.meta.syns[0],
          };
        });
        formattedData.push(dArr);
        currentData = currentData.filter((word) => word.fl !== type);
      }
    });

    pass(formattedData);
  } catch (err) {
    let error = {
      statusCode: err.statusCode || 500,
      body: JSON.stringify({ error: err.message }),
    };
    pass(error);
  }
};
