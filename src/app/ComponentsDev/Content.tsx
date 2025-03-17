import Link from 'next/link';

import { education } from '../Constants/education';
import { history } from '../Constants/history';
import { projects } from '../Constants/projects';
import { skills } from '../Constants/skills';

interface Props {
  color: string;
}

export const Content = ({ color }: Props) => {
  return (
    <div className={`text-s pt-6 font-mono leading-5 text-${color}`}>
      <nav className="items-center pb-12 text-center font-mono sm:flex sm:flex-row sm:justify-between">
        <h1 className="font-thin">
          <Link href="/" className="link">
            NILS MÜLLER(1)
          </Link>
        </h1>
        <h1 className="font-thin">CURRICULUM VITAE</h1>
        <h1 className="font-thin">
          <Link href="/" className="link">
            NILS MÜLLER(1)
          </Link>
        </h1>
      </nav>
      <main className="font-mono">
        <section>
          <h2 className="bullet_point font-bold tracking-wider">NAME</h2>
          <p className="ml-[50px]">Nils Müller - Software Engineer</p>
        </section>
        <br />
        <section>
          <h2 className="bullet_point font-bold">SYNOPSIS</h2>
          <p className="ml-[50px]">
            <span className="font-black">nils</span> [OPTIONS] COMMAND [ARG...]
          </p>
        </section>
        <br />
        <section>
          <h2 className="bullet_point font-bold tracking-wider">DESCRIPTION</h2>
          <p className="ml-[50px]">
            <span className="font-black">nils</span> is an 8th semester student at Fachhochschule Wedel and currently
            employed as a frontend developer at Protofy in Hamburg, Germany.
          </p>
        </section>
        <br />
        <section>
          <h2 className="bullet_point font-bold tracking-wider">SKILLS</h2>
          <p className="ml-[50px]">{skills.join(' | ')}</p>
        </section>
        <br />
        <section>
          <h2 className="bullet_point font-bold tracking-wider">HISTORY</h2>
          {history.map((item, index) => (
            <div key={index} className="list_item ml-[50px]">
              <p>
                <span className="underline">{item.role}</span>
                <br />
                {item.period} - {item.company}
              </p>
              {item.details.length > 0 && (
                <ul>
                  {item.details.map((detail, idx) => (
                    <li key={idx}>
                      *{' '}
                      {detail.link ? (
                        <a href={detail.link} className="link italic" target="_blank" rel="noopener noreferrer">
                          {detail.text}
                        </a>
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
          <h2 className="bullet_point font-bold tracking-wider">EDUCATION</h2>
          {education.map((item, index) => (
            <div key={index} className="list_item ml-[50px]">
              <p>
                <span className="underline">{item.degree}</span>
                <br />
                {item.year} - {item.institution}
              </p>
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
          <h2 className="bullet_point font-bold tracking-wider">PROJECTS</h2>
          <ul className="ml-[50px]">
            {projects.map((project, index) => (
              <li key={index}>
                *{' '}
                {project.link ? (
                  <a href={project.link} className="link italic" target="_blank" rel="noopener noreferrer">
                    {project.text}
                  </a>
                ) : (
                  project.text
                )}
              </li>
            ))}
          </ul>
        </section>
        <br />
        <section>
          <h2 className="bullet_point font-bold tracking-wider">KNOWN BUGS</h2>
          <p className="ml-[50px]">Occasionally outputs puns instead of code - Severity: Critical</p>
        </section>
      </main>
      <br />
      <footer className="pb-8">
        <h2 className="bullet_point font-bold tracking-wider">CONTACT</h2>
        <p className="ml-[50px]">
          E-mail:{' '}
          <Link href="mailto:info@nils-mueller.com" className="link">
            info@nils-mueller.com
          </Link>
          <br />
          Mobile:{' '}
          <Link href="tel:+4915115776494" className="link">
            +49 151 15776494
          </Link>
          <br />
          <Link href="https://www.linkedin.com/in/nils-m%C3%BCller-5ab765220/" className="link">
            LinkedIn
          </Link>
          <br />
          <Link href="https://github.com/nlsmllr/" className="link">
            GitHub
          </Link>
          <br />
          <Link href="/Imprint" className="link">
            Imprint
          </Link>
        </p>
      </footer>
    </div>
  );
};
