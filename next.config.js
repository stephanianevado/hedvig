/** @type {import('next').NextConfig} */

const { PHASE_PRODUCTION_SERVER } = require('next/constants')

const APP_BASE_URL = process.env.APP_BASE_URL

// This is a workaround to be able to seed the database on server startup.
// Next.js unfortunately doesn't have a great way to run logic once on startup.
// In a real world scenario I would have used a completely separate backend for database communication and API.
function seedDatabase() {
  fetch(`${APP_BASE_URL}/api/seed`, { method: 'POST' })
}

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    seedDatabase()
  }

  const nextConfig = {
    compiler: {
      styledComponents: true,
    },
    ...defaultConfig,
  }
  return nextConfig
}
