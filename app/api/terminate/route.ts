import { NextResponse } from 'next/server'

import { ContractEventName } from 'server/contracts/contracts'
import { inMemoryDb } from 'server/db/inMemoryDb'

export type TerminateReq = {
  contractId: string
  terminationDate: string
}

// Terminate a contract: `/api/terminate`
export async function POST(req: Request) {
  const body: TerminateReq = await req.json()
  const events = inMemoryDb.contractEventsById[body.contractId]

  if (!events) {
    return NextResponse.json(
      { error: `Contract ${body.contractId} doesn't exist` },
      { status: 404 }
    )
  }

  const isTerminated = events.some(
    (e) => e.name === ContractEventName.Terminated
  )

  if (isTerminated) {
    return NextResponse.json(
      { error: `Contract ${body.contractId} already terminated` },
      { status: 400 }
    )
  }

  events.push({ name: ContractEventName.Terminated, ...body })

  return NextResponse.json(body)
}
