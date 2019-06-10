var bugsnagClient;

export default function logErrorToBugsnag(err, options) {
  if (typeof bugsnagClient !== "undefined") {
    bugsnagClient.notify(err, options);
  }
}
