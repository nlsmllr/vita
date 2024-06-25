import { skills } from './Constants/skills';
import { history } from './Constants/history';
import { education } from './Constants/education';
import { projects } from './Constants/projects';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-6 bg-black text-white font-mono text-s leading-5 ">
      <nav className="font-mono text-center md:flex md:justify-between md:w-[900px] md:flex-row items-center pb-12">
        <h1 className="font-thin">
          <Link href="/" className="link">NILS MÜLLER(1)</Link>
        </h1>
        <h1 className="font-thin">CURRICULUM VITAE</h1>
        <h1 className="font-thin">
          <Link href="/" className="link">NILS MÜLLER(1)</Link>
        </h1>
      </nav>
      <main className="font-mono md:w-[900px]">
        <section>
          <h2 className="font-bold tracking-wider bullet_point">NAME</h2>
          <p className="ml-[50px]">Nils Müller - Software Engineer</p>
        </section>
        <br />
        <section>
          <h2 className="font-bold bullet_point">SYNOPSIS</h2>
          <p className="ml-[50px]"><span className="font-black">nils</span> [OPTIONS] COMMAND [ARG...]</p>
        </section>
        <br />
        <section>
          <h2 className="font-bold tracking-wider bullet_point">DESCRIPTION</h2>
          <p className="ml-[50px]">
            <span className="font-black">nils</span> is a 7th semester student at Fachhochschule Wedel and
            currently employed as a frontend developer at Protofy in Hamburg, Germany.
          </p>
        </section>
        <br />
        <section>
          <h2 className="font-bold tracking-wider bullet_point">SKILLS</h2>
          <p className="ml-[50px]">{skills.join(' | ')}</p>
        </section>
        <br />
        <section>
          <h2 className="font-bold tracking-wider bullet_point">HISTORY</h2>
          {history.map((item, index) => (
            <div key={index} className="ml-[50px] list_item">
              <p><span className='underline'>{item.role}</span><br />
                {item.period} - {item.company}</p>
              {item.details.length > 0 && (
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx}>
                      * {detail.link ? (
                        <a href={detail.link} className="italic link" target="_blank" rel="noopener noreferrer">{detail.text}</a>
                      ) : (
                        detail.text
                      )}
                    </li>
                  ))}
                </ul>
              )}
              <br />
            </div>
          ))}
        </section>
        <br />
        <section>
          <h2 className="font-bold tracking-wider bullet_point">EDUCATION</h2>
          {education.map((item, index) => (
            <div key={index} className="ml-[50px] list_item">
              <p><span className='underline'>{item.degree}</span><br />
                {item.year} - {item.institution}</p>
              {item.details.length > 0 && (
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx}>* {detail}</li>
                  ))}
                </ul>
              )}
              <br />
            </div>
          ))}
        </section>
        <br />
        <section>
          <h2 className="font-bold tracking-wider bullet_point">PROJECTS</h2>
          <ul className="ml-[50px]">
            {projects.map((project, index) => (
              <li key={index}>
                * {project.link ? (
                  <a href={project.link} className="italic link" target="_blank" rel="noopener noreferrer">{project.text}</a>
                ) : (
                  project.text
                )}
              </li>
            ))}
          </ul>
        </section>
        <br />
        <section>
          <h2 className="font-bold tracking-wider bullet_point">KNOWN BUGS</h2>
          <p className="ml-[50px]">Wrote this in lightmode (...not really)</p>
        </section>
      </main>
      <br />
      <footer>
        <h2 className="font-bold tracking-wider bullet_point">CONTACT</h2>
        <p className="ml-[50px]">
          E-mail: <a href="mailto:info@nils-mueller.com" className="link">info@nils-mueller.com</a><br />
          Mobile: <a href="tel:+49 151 15776494" className="link">+49 151 15776494</a><br />
          LinkedIn: <a href="https://www.linkedin.com/in/nils-m%C3%BCller-5ab765220/" className="link">Nils Müller</a><br />
          <Link href="/Imprint" className="link">Imprint</Link>
        </p>
      </footer>
    </div>
  );
}
