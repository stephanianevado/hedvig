import { Table, Th } from 'client/components/common/table/Table'
import { ContractTableRow } from 'client/components/contracts/ContractTableRow'

import { Contract } from 'server/contracts/contracts'

type Props = {
  contracts: Contract[]
}

export const ContractTable = ({ contracts }: Props) => {
  return (
    <Table>
      <thead>
        <tr>
          <Th>Contract ID</Th>
          <Th>Premium</Th>
          <Th>Start Date</Th>
          <Th>Termination Date</Th>
          <Th textAlign="right" width="20px">
            Actions
          </Th>
        </tr>
      </thead>
      <tbody>
        {contracts?.map((contract) => (
          <ContractTableRow key={contract.contractId} contract={contract} />
        ))}
      </tbody>
    </Table>
  )
}
