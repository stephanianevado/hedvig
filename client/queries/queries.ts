export default async function fetchAPI<T>(
  path: string,
  method: 'GET' | 'POST' | 'PATCH' | 'PUT' = 'GET',
  payload?: object
): Promise<T> {
  const res = await fetch(`/api${path}`, {
    method,
    headers: {
      'content-type': 'application/json',
    },
    ...(payload && { body: JSON.stringify(payload) }),
  })

  if (!res.ok) {
    throw new Error('Failed to fetch')
  }

  return res.json()
}
