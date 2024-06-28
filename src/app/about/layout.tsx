export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-black">{children}</section>
  }