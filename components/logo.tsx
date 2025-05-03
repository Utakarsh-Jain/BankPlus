import Link from "next/link"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <div className="relative flex items-center">
        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg">
          B+
        </div>
        <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
          Bank+
        </span>
      </div>
    </Link>
  )
}
