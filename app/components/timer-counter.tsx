'use client'
import { useState, useEffect } from 'react'

export default function TimerCounter() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    // setInterval(実行したいファンクション, 間隔)
    const timer = setInterval(() => setCount((prevCount) => prevCount + 1), 500)
    // タイマーが複数作成されることを防ぐとともに、コンポーネントがアンマウントされたときにタイマーをクリアして、
    // 無駄なリソース消費やメモリリークを防ぎます。
    return () => clearInterval(timer)
  }, [])
  return (
    <div>
      <p> {count}</p>
      <button
        className="font-sm my-3 rounded bg-indigo-600 py-1 px-3 text-white hover:bg-indigo-700"
        // リセットボタンをクリックすることでいつでもカウンターを0に戻すことができます。
        onClick={() => setCount(0)}
      >
        reset
      </button>
    </div>
  )
}
