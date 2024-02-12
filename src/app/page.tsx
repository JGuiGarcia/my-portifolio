import { Header } from "@/components/header";
import '@/components/styles/home.scss'

export default function Home() {
  return (
    <main className="container"> 
      <Header/>
      <div className="experience">
          <h3>Experience</h3>
          <p>1 yars working as a developer front end, in companys such as Saunce Software House.</p>
          <div className="experience-time">

          </div>
          <div className="infos">
            <h3>Languages</h3>
            <div className="lenguages-info">
              <span>🇺🇸 EN - Fluent</span>
              <span>🇧🇷-BR - Native Speaker</span>
            </div>
            <h3>Education</h3>
            <div className="educational-info">
              <span>🎓</span>
              <span>Web Developer - ETEC Philadelpho Correa neto</span>
            </div>
          </div>
          <div className="buttons">
            <div className="social">

            </div>
            <button>Contact me</button>
          </div>          
      </div>

    </main>
  );
}
