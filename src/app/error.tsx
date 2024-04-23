'use client'

import { useEffect } from 'react';

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect((): void => {
    console.error(error)
  }, [error])

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <h2>Something went wrong!</h2>
      <span>{error.message}</span>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}