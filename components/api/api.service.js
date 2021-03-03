const axios = require('axios').default;

const extractSizeData = async (imageUrl) => {
  try {
    // dummy api
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({"총장": [65.0, 65.0], "가슴둘레": [52.0, 55.0]});
      }, 500);
    });

    // return await axios.get(`/image?url=${imageUrl}`);
  } catch (error) {
    console.error(error);
  }
}

exports.extractSizeData = extractSizeData;
