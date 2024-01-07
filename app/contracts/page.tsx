'use client'

import { useState } from 'react'

import AppWrapper from 'client/components/AppWrapper'
import { Box } from 'client/components/common/box/Box'
import { Button } from 'client/components/common/button/Button'
import { Spacer } from 'client/components/common/spacer/Spacer'
import { ContractTable } from 'client/components/contracts/ContractTable'
import { CreateContractModal } from 'client/components/contracts/CreateContractModal'
import { Plus } from 'client/components/icons/icons'
import { Breakpoint } from 'client/components/theme/breakpoint'
import { Title } from 'client/components/Title'
import { useContracts, useCreateContract } from 'client/queries/contracts'

export default function Contracts() {
  const [showCreateModal, setShowCreateModal] = useState(false)
  const { data } = useContracts()
  const { mutate: create } = useCreateContract()

  const { TABLET } = Breakpoint

  if (!data) {
    return
  }

  const { size, contracts } = data

  return (
    <AppWrapper>
      {showCreateModal && (
        <CreateContractModal
          title="Create a new contract"
          isOpen={showCreateModal}
          onContractCreation={create}
          onClose={() => setShowCreateModal(false)}
        />
      )}

      <Box>
        <Box
          breakpoints={{
            [TABLET]: {
              direction: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          }}>
          <Box direction="column">
            <Title
              header="Insurance contracts"
              subHeader={`Total: ${size ? size : 0}`}
            />
          </Box>
          <Box>
            <Button
              icon={Plus}
              iconPosition="right"
              onClick={() => setShowCreateModal(true)}>
              Create new
            </Button>
          </Box>
        </Box>
      </Box>
      <Spacer size={5} />
      <Box>
        <ContractTable contracts={contracts} />
      </Box>
    </AppWrapper>
  )
}
