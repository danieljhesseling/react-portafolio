import RootLayout from "../layout"

export default function ContactPage() {
  return (
    <section className="p-4">

      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form className="flex flex-col space-y-4">
        <input className="border p-2" type="text" placeholder="Name" />
        <input className="border p-2" type="email" placeholder="Email" />
        <textarea className="border p-2" placeholder="Message"></textarea>
        <button className="bg-blue-500 text-white py-2 px-4 rounded">Send</button>
      </form>
    </section>
  );
}