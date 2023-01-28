const Constants: IConstants = (() => {
  let constants: IConstants = {};

  const domain = typeof window !== "undefined" && window.location.hostname.split(".")[0];

  switch (domain) {
    case "localhost":
      constants = {
        backUrl: process.env.REACT_APP_API_BASE_URL_DEV,
      };
      break;

    case "portaldev":
      constants = {
        backUrl: process.env.REACT_APP_API_BASE_URL_DEV,
      };
      break;

    case "portalhmg":
      constants = {
        backUrl: process.env.REACT_APP_API_BASE_URL_HMG,
      };
      break;

    case "portal":
      constants = {
        backUrl: process.env.REACT_APP_API_BASE_URL_PROD,
      };
      break;

    case "portalprod":
      constants = {
        backUrl: process.env.REACT_APP_API_BASE_URL_PROD,
      };
      break;
  }
  return constants;
})();

export default Constants;
