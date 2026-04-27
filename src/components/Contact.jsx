import "./styles/contact.css";

export default function Contact() {
  return (
    <section className="contact">
      <h2>Contact</h2>

      <input placeholder="Nama" />
      <input placeholder="Email" />
      <textarea placeholder="Pesan"></textarea>
      <button>Kirim</button>
    </section>
  );
}