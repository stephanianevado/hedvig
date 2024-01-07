import { ContractEvent } from 'server/contracts/contracts'

type ContactEventStore = {
  contractEventsById: Record<string, ContractEvent[]>
}

export const inMemoryDb: ContactEventStore = {
  contractEventsById: {},
}

export const newContactId = () => {
  const ids = Object.keys(inMemoryDb.contractEventsById)

  if (ids.length === 0) {
    return '1'
  }

  const sorted = ids.sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  )

  return (Number(sorted[sorted.length - 1]) + 1).toString()
}
