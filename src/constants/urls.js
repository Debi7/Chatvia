const BASE_URL = process.env.GH_PAGES_BASE_URL ?? "/"

export const URLS = {
  root: `${BASE_URL}#/`,
  register: `${BASE_URL}#/register`,
  reset: `${BASE_URL}#/reset`,
  signin: `${BASE_URL}#/signin`,
  chat: `${BASE_URL}#/chat`,
}
