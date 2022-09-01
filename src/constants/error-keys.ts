export const ERROR_KEYS = {
  UNKNOWN_ERROR: 'UnknownError',
  VALIDATION_ERROR: 'ValidationError',
  MICROSERVICE_ERROR: 'MicroserviceError',
  INVALID_STUDENT: 'InvalidStudent',
};

export type ErrorKey = keyof typeof ERROR_KEYS;
