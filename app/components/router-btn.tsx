'use client'
import { useRouter } from 'next/navigation'

export default function RouterBtn({
  destination = '', //デフォルトは空欄にして、後のスラッシュと組み合わせる。
}: {
  destination?: string
}) {
  const router = useRouter()
  return (
    <button
      className="rounded bg-indigo-600 px-3 py-1 font-medium text-white hover:bg-indigo-700"
      onClick={() => {
        // router.pushはハードナビゲーションとなる
        // 画面内に対象のリンクがあるとプリフェッチがきいて効果は失われる
        router.push(`/${destination}`)
      }}
    >
      Nav to {destination ? destination : 'home'}
    </button>
  )
}
