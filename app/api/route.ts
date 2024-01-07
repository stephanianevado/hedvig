export const dynamic = 'force-dynamic'

import { NextResponse } from 'next/server'

import { Contract } from 'server/contracts/contracts'
import { eventsToContracts } from 'server/contracts/eventsToContracts'
import { inMemoryDb } from 'server/db/inMemoryDb'

export type ContractsResp = {
  size: number
  contracts: Contract[]
}

// Get all contracts: `/api`
export async function GET() {
  const contracts = eventsToContracts(inMemoryDb.contractEventsById)
  contracts.sort((a, b) => b.startDate.localeCompare(a.startDate))

  return NextResponse.json({ size: contracts.length, contracts })
}
