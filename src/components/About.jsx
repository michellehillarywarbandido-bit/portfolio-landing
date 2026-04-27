import { useEffect, useRef } from "react";
import "./styles/about.css";

export default function About() {
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref.current);
  }, []);

  return (
    <section ref={ref} className="about fade-in">
      <h2>About Me</h2>
      <p>
        Saya mahasiswa yang fokus pada React & Flutter dengan minat UI/UX modern.
      </p>
    </section>
  );
}