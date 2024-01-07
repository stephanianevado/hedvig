import { NextResponse } from 'next/server'

import getCurrentDateFormatted from 'client/utils/getCurrentDateFormatted'

import { ContractEventName } from 'server/contracts/contracts'
import { inMemoryDb, newContactId } from 'server/db/inMemoryDb'

export type CreateReq = {
  premium: number
  startDate: string
}

// Create a contract: `/api/create`
export async function POST(req: Request) {
  const body: CreateReq = await req.json()

  const validPremiumValues = [50, 100, 200]
  if (!validPremiumValues.includes(body.premium)) {
    return NextResponse.json(
      {
        error: `Invalid premium value. Valid values are ${validPremiumValues}.`,
      },
      { status: 400 }
    )
  }

  const currentDate = getCurrentDateFormatted()
  const startDate = body.startDate

  if (startDate < currentDate) {
    return NextResponse.json(
      { error: 'Invalid startDate. It must be today or in the future.' },
      { status: 400 }
    )
  }

  const contractId = newContactId()

  inMemoryDb.contractEventsById[contractId] = [
    {
      ...body,
      contractId,
      name: ContractEventName.Created,
    },
  ]

  return NextResponse.json(body)
}
