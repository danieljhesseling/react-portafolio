export default function ContactLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return <section className="min-h-screen items-center justify-center bg-gradient-to-br from-gray-800 via-gray-700 to-black">{children}</section>
  }