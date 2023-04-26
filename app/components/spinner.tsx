export default function Spinner({
  color = 'border-blue-500', // デフォルト値は 'border-blue-500'
}: {
  color?: string // colorプロパティは省略可能で、文字列型の値を持つことができる
}) {
  return (
    <div className="my-16 flex justify-center">
      <div
        className={`h-10 w-10 animate-spin rounded-full border-4 ${color} border-t-transparent`}
      />
    </div>
  )
}
