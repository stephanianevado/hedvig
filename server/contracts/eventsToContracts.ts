import {
  Contract,
  ContractEvent,
  ContractEventName,
} from 'server/contracts/contracts'

export function eventsToContracts(eventsById: Record<string, ContractEvent[]>) {
  const contractById: Record<string, Contract> = {}

  Object.values(eventsById)
    .flat()
    .forEach((event) => {
      const { name, contractId, premium, startDate, terminationDate } = event
      let contract = contractById[contractId]

      switch (name) {
        case ContractEventName.Created:
          if (contract) {
            throw new Error(`Contract with id ${contractId} already exists`)
          }

          if (!premium || !startDate) {
            throw new Error(
              `Contract with id ${contractId} is missing expected fields`
            )
          }

          contract = { contractId, premium, startDate }
          break

        case ContractEventName.Terminated:
          if (!contract) {
            throw new Error(`Contract with id ${contractId} doesn't exist`)
          }

          contract = { ...contract, terminationDate }
          break

        default:
          throw new Error(`Unhandled event: ${name}`)
      }

      contractById[contractId] = contract
    })

  return Object.values(contractById)
}
