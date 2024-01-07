import { useState } from 'react'

import { Box } from 'client/components/common/box/Box'
import { IconButton } from 'client/components/common/iconButton/IconButton'
import { Td } from 'client/components/common/table/Table'
import { TerminateContractModal } from 'client/components/contracts/TerminateContractModal'
import { Close } from 'client/components/icons/icons'
import { useTerminateContract } from 'client/queries/contracts'

import { Contract } from 'server/contracts/contracts'

type Props = {
  contract: Contract
}

export const ContractTableRow = ({ contract }: Props) => {
  const [showTerminateModal, setShowTerminateModal] = useState(false)
  const { mutate: terminate } = useTerminateContract()

  const { contractId, premium, startDate, terminationDate } = contract

  return (
    <tr>
      <Td>{contractId}</Td>
      <Td>{premium} SEK</Td>
      <Td>{startDate}</Td>
      <Td>{terminationDate}</Td>
      <Td textAlign="right" width="20px">
        {!terminationDate && (
          <Box width="100%" alignItems="center">
            <IconButton
              size={3}
              name="open terminate contract modal"
              icon={Close}
              onClick={() => setShowTerminateModal(true)}
              aria-label="Terminate contract"
            />
            {showTerminateModal && (
              <TerminateContractModal
                title="Terminate this contact"
                isOpen={showTerminateModal}
                contractId={contractId}
                onContractTerminate={terminate}
                onClose={() => setShowTerminateModal(false)}
              />
            )}
          </Box>
        )}
      </Td>
    </tr>
  )
}
