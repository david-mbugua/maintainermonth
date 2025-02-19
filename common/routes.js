const makePath = (path, { parent = HOME } = {}) => ({
  path,
  parent,
  linkTo: (params) => ({
    pathname: path,
    query: params,
  }),
  getPath: (year) => (
    year?"/"+year+path:path
  )
})

export const HOME = makePath('/', {
  parent: null,
})

export const SCHEDULE = makePath('/schedule')

export const EVENT = makePath(`${SCHEDULE.path}/[slug]`, {
  parent: SCHEDULE,
})

export const LIBRARY = makePath('/library')

export const Y2022 = makePath('/2022')