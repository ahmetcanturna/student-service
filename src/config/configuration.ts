import * as pkg from '../../package.json';

const name = process.env.NAME || pkg.name;
const version = process.env.VERSION || pkg.version;
const env = process.env.NODE_ENV || 'dev';

export default () => ({
  name,
  version,
  env,
  language: 'en',
  livenessProbeFailureThreshold: process.env.LIVENESS_PROBE_FAILURE_THRESHOLD || 3,
  livenessProbePeriodSeconds: process.env.LIVENESS_PROBE_PERIOD_SECONDS || 5,
  mongodb: {
    student: {
      url: process.env.MONGODB_URL,
      reconnectTries: Number.MAX_VALUE,
      poolSize: 10,
    },
  },
  server: {
    port: +(process.env.SERVER_PORT || process.env.PORT || 8080),
    keepAliveTimeout: +(process.env.SERVER_KEEP_ALIVE_TIMEOUT || 120000),
    returnValidationInfoError:
      (process.env.SERVER_RETURN_VALIDATION_INFO_ERROR || 'false')
        .trim()
        .toLowerCase() === 'true',
  },
  swagger: {
    enabled:
      (process.env.SWAGGER_ENABLED || 'false').trim().toLowerCase() === 'true',
  },
  log: {
    name,
    version,
    env,
    level: process.env.LOG_LEVEL || 'debug',
  },
  microservice: {
    urls: {},
    timeout: +(process.env.MICROSERVICE_TIMEOUT || 10000),
  },
});
