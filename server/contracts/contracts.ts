export enum ContractEventName {
  Created = 'ContractCreatedEvent',
  Terminated = 'ContractTerminatedEvent',
}

export type Contract = {
  contractId: string
  premium: number
  startDate: string
  terminationDate?: string
}

export type ContractEvent = Pick<Contract, 'contractId'> &
  Partial<Contract> & {
    name: ContractEventName
  }
