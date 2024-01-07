import { useState } from 'react'

import { TerminateReq } from 'app/api/terminate/route'

import { Box } from 'client/components/common/box/Box'
import { Button } from 'client/components/common/button/Button'
import { Input } from 'client/components/common/input/Input'
import { Modal } from 'client/components/common/modal/Modal'
import { Spacer } from 'client/components/common/spacer/Spacer'
import { Text } from 'client/components/common/text/Text'
import { Breakpoint } from 'client/components/theme/breakpoint'
import { Theme } from 'client/components/theme/Theme'
import getCurrentDateFormatted from 'client/utils/getCurrentDateFormatted'

type Props = {
  title: string
  contractId: string
  isOpen: boolean
  onClose: () => void
  onContractTerminate: ({ contractId, terminationDate }: TerminateReq) => void
}

export const TerminateContractModal = ({
  title,
  contractId,
  isOpen,
  onClose,
  onContractTerminate,
}: Props) => {
  const currentDate = getCurrentDateFormatted()
  const [dateValue, setDateValue] = useState<string>(currentDate)

  const {
    colors: { secondaryBlack, tertiaryPink, primaryPurple },
    fontSize: { medium },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP } = Breakpoint

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onContractTerminate({
      contractId,
      terminationDate: dateValue,
    })
    onClose()
  }

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <Box as="form" id="terminate-contract-form" onSubmit={handleSubmit}>
        <Text as="h3" color={secondaryBlack} variant={medium}>
          Are you sure you want to terminate the contract with ID{' '}
          <Text as="span" color={tertiaryPink} variant={medium} subStyle={bold}>
            {contractId}
          </Text>
          ?
        </Text>
        <Spacer size={4} />
        <Text as="h3" color={secondaryBlack} variant={medium}>
          This action can&apos;t be undone.
        </Text>
        <Spacer size={4} />
        <Box as="label">
          <Text as="h3" color={primaryPurple} variant={medium} subStyle={bold}>
            Termination date
          </Text>
          <Input
            type="date"
            value={dateValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDateValue(e.target.value)
            }
            min={currentDate}
          />
        </Box>
        <Spacer size={4} />
        <Box
          breakpoints={{
            [LAPTOP]: { alignSelf: 'flex-end' },
          }}>
          <Button type="submit">Terminate</Button>
        </Box>
      </Box>
    </Modal>
  )
}
