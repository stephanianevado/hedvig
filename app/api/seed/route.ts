import { NextResponse } from 'next/server'

import { readFileSync } from 'fs'

import { ContractEvent } from 'server/contracts/contracts'
import { inMemoryDb } from 'server/db/inMemoryDb'

// Seed the data base
export async function POST() {
  if (Object.keys(inMemoryDb.contractEventsById).length) {
    return NextResponse.json({})
  }

  try {
    const data = readFileSync('./server/db/contractEvents.txt', 'utf8')
    const lines = data.split('\n')
    console.log('Started server: reading events from storage...')

    lines.forEach((line) => {
      if (!line) {
        return
      }
      const event = JSON.parse(line) as ContractEvent
      const events = inMemoryDb.contractEventsById[event.contractId]
      if (events) {
        events.push(event)
      } else {
        inMemoryDb.contractEventsById[event.contractId] = [event]
      }
    })
  } catch (err) {
    console.error(err)
  }

  console.log(
    `Successfully stored events for ${
      Object.keys(inMemoryDb.contractEventsById).length
    } contracts`
  )

  return NextResponse.json({})
}
