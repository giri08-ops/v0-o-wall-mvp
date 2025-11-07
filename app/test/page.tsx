'use client'

import { useEffect, useState } from 'react'

export default function TestPage() {
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/testSupabase')
        const result = await response.json()
        
        if (result.error) {
          setError(result.error)
        } else {
          setData(result.data)
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch data')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <div className="p-4">Loading...</div>
  }

  if (error) {
    return <div className="p-4 text-red-500">Error: {error}</div>
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Supabase Test</h1>
      <div className="space-y-4">
        <div className="bg-green-100 text-green-700 p-4 rounded">
          ✓ API Connection Test: {data?.message || 'Connection successful!'}
        </div>
        <div>
          <h2 className="font-semibold mb-2">Sample User Data:</h2>
          <pre className="bg-gray-100 p-4 rounded">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  )
}