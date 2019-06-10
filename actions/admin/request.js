import axios from "../../config/axios";
import { loginThroughModal } from "@components/LoginModal";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export default function request(requestConfig) {
  const { config, req, errMessage, skipLoginRetry } = requestConfig;

  if (
    config &&
    config.url &&
    config.url.indexOf(publicRuntimeConfig.LOGIN_URL) === 0
  ) {
    headers.NoRedirect = "true";
  }

  return axios
    .request({
      ...config
    })
    .catch(err => {
      if (errMessage && !__SERVER__) {
        console.log(errMessage, "error");
      }
      const _status = (err.response && err.response.status) || 0;
      err.bugsnagIgnore = [401, 403, 404].includes(_status);

      if (
        err.response &&
        err.response.status === 401 &&
        err.config.url.includes(publicRuntimeConfig.CLIENT_DOMAIN) &&
        !__SERVER__ &&
        !skipLoginRetry
      ) {
        return loginThroughModal().then(() => {
          return request(requestConfig);
        });
      }

      return Promise.reject(err);
    });
}
