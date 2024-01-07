import { ContractEventName } from 'server/contracts/contracts'
import { eventsToContracts } from 'server/contracts/eventsToContracts'

test('Convert empty event storage', () => {
  const contracts = eventsToContracts({})
  expect(contracts).toEqual([])
})

test('Convert single event', () => {
  const event = {
    '1': [
      {
        contractId: '1',
        name: ContractEventName.Created,
        premium: 100,
        startDate: '2023-12-28',
      },
    ],
  }

  const expected = [
    {
      contractId: '1',
      premium: 100,
      startDate: '2023-12-28',
    },
  ]

  const contracts = eventsToContracts(event)
  expect(contracts).toEqual(expected)
})

test('Convert creation and termination for one contract', () => {
  const event = {
    '1': [
      {
        contractId: '1',
        name: ContractEventName.Created,
        premium: 100,
        startDate: '2023-12-28',
      },
      {
        contractId: '1',
        name: ContractEventName.Terminated,
        terminationDate: '2024-01-07',
      },
    ],
  }

  const expected = [
    {
      contractId: '1',
      premium: 100,
      startDate: '2023-12-28',
      terminationDate: '2024-01-07',
    },
  ]

  const contracts = eventsToContracts(event)
  expect(contracts).toEqual(expected)
})

test('Convert events for multiple contracts', () => {
  const event = {
    '1': [
      {
        contractId: '1',
        name: ContractEventName.Created,
        premium: 100,
        startDate: '2023-12-28',
      },
      {
        contractId: '1',
        name: ContractEventName.Terminated,
        terminationDate: '2024-01-07',
      },
    ],
    '2': [
      {
        contractId: '2',
        name: ContractEventName.Created,
        premium: 50,
        startDate: '2024-01-01',
      },
    ],
  }

  const expected = [
    {
      contractId: '1',
      premium: 100,
      startDate: '2023-12-28',
      terminationDate: '2024-01-07',
    },
    {
      contractId: '2',
      premium: 50,
      startDate: '2024-01-01',
    },
  ]

  const contracts = eventsToContracts(event)
  expect(contracts).toEqual(expected)
})
