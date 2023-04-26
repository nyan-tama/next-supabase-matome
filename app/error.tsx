// エラー画面はccでの扱いになる
// エラー画面がクライアントコンポーネントとして扱われることで、
// クライアントサイドでの操作が可能となり、ユーザーエクスペリエンスの向上にも寄与します。
'use client'

export default function Error({ error }: { error: Error }) {
  return (
    <div>
      <p className="mt-6 text-center text-red-500">
        Data fetching in server failed
      </p>
    </div>
  )
}
