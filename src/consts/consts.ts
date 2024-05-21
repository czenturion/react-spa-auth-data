export const APIUrl = {
  HOST: 'https://test.v5.pryaniky.com',
  getData: '/ru/data/v3/testmethods/docs/userdocs/get',
  addEmployee: '/ru/data/v3/testmethods/docs/userdocs/create',
  deleteEmployee: '/ru/data/v3/testmethods/docs/userdocs/delete/',
  modifyEmployee: '/ru/data/v3/testmethods/docs/userdocs/set/',
} as const

export const ALPHA_NUMERIC_DASH_REGEX = /^[a-zA-Z0-9-]+$/;
