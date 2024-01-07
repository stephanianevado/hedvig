import { NextResponse } from 'next/server'

import getCurrentDateFormatted from 'client/utils/getCurrentDateFormatted'

import { ContractEventName } from 'server/contracts/contracts'
import { inMemoryDb, newId } from 'server/db/inMemoryDb'

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
      { error: 'Invalid premium value. Valid values are 50, 100, or 200.' },
      { status: 400 }
    )
  }

  const currentDate = getCurrentDateFormatted()
  const startDate = body.startDate
  if (startDate < currentDate) {
    return NextResponse.json(
      { error: 'Invalid startDate. It should be a future date.' },
      { status: 400 }
    )
  }

  const contractId = newId(Object.keys(inMemoryDb.contractEventsById))

  inMemoryDb.contractEventsById[contractId] = [
    {
      ...body,
      contractId,
      name: ContractEventName.Created,
    },
  ]

  return NextResponse.json(body)
}
