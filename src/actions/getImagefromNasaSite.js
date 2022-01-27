import axios from "axios";

const getImagefromNasaSite = () => {
  const errMessage = "Something Went Wrong...Please reload";
  const DEMOKEY = "8Lz2MhQTM3qlBlXqCTWVVPJg4AjXzurec7z14xex";
  const url = `https://api.nasa.gov/planetary/apod?api_key=${DEMOKEY}`;

  const params = {
    start_date: "2021-12-25",
    end_date: "2022-01-05",
  };

  return axios
    .get(`${url}`, {
      params,
    })
    .then((response) => {
      return response;
    })
    .catch((err) => {
      alert(errMessage);
    });
};

export default getImagefromNasaSite;
