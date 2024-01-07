import { useState } from 'react'

import { CreateReq } from 'app/api/create/route'

import { Box } from 'client/components/common/box/Box'
import { Button } from 'client/components/common/button/Button'
import { Input } from 'client/components/common/input/Input'
import { Modal } from 'client/components/common/modal/Modal'
import { Select } from 'client/components/common/select/Select'
import { Spacer } from 'client/components/common/spacer/Spacer'
import { Text } from 'client/components/common/text/Text'
import { Breakpoint } from 'client/components/theme/breakpoint'
import { Theme } from 'client/components/theme/Theme'
import getCurrentDateFormatted from 'client/utils/getCurrentDateFormatted'

type Props = {
  title: string
  isOpen: boolean
  onClose: () => void
  onContractCreation: ({ startDate, premium }: CreateReq) => void
}

export const CreateContractModal = ({
  title,
  isOpen,
  onClose,
  onContractCreation,
}: Props) => {
  const currentDate = getCurrentDateFormatted()
  const [premiumValue, setPremiumValue] = useState<number>(100)
  const [startDateValue, setStartDateValue] = useState<string>(currentDate)

  const {
    colors: { primaryPurple },
    fontSize: { medium },
    fontWeight: { bold },
  } = Theme
  const { LAPTOP } = Breakpoint

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onContractCreation({ startDate: startDateValue, premium: premiumValue })
    onClose()
  }

  return (
    <Modal title={title} isOpen={isOpen} onClose={onClose}>
      <Box
        as="form"
        id="create-contract-form"
        onSubmit={handleSubmit}
        paddingTop={4}>
        <Box as="label">
          <Text as="h3" color={primaryPurple} variant={medium} subStyle={bold}>
            Premium
          </Text>
          <Select
            id="premium-select"
            value={premiumValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setPremiumValue(Number(e.target.value))
            }}>
            <option value="50">50 SEK</option>
            <option value="100">100 SEK</option>
            <option value="200">200 SEK</option>
          </Select>
        </Box>
        <Spacer size={4} />
        <Box as="label">
          <Text as="h3" color={primaryPurple} variant={medium} subStyle={bold}>
            Start date
          </Text>
          <Input
            type="date"
            value={startDateValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setStartDateValue(e.target.value)
            }
            min={currentDate}
          />
        </Box>
        <Spacer size={4} />
        <Box
          breakpoints={{
            [LAPTOP]: { alignSelf: 'flex-end' },
          }}>
          <Button type="submit">Create</Button>
        </Box>
      </Box>
    </Modal>
  )
}
