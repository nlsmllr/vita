'use client';

import Link from 'next/link';
import { useState } from 'react';

import { education } from '../Constants/education';
import { history } from '../Constants/history';
import { projects } from '../Constants/projects';
import { skills } from '../Constants/skills';

const TABS = ['Experience', 'Education', 'Projects'] as const;
type Tab = (typeof TABS)[number];

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
    <path d="M5 11 11 5M6 5h5v5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const Vitae = () => {
  const [tab, setTab] = useState<Tab>('Experience');

  return (
    <div className="flex flex-col gap-12">
      {/* Intro */}
      <section className="clay-stack p-8 sm:p-10">
        <Link href="/" className="cursor-none">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Nils Müller</h1>
        </Link>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-zinc-700">
          Software engineer and Fachhochschule Wedel graduate with a passion for frontend development — combining
          technical expertise with creative flair, always eager to explore new technologies.
        </p>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {skills.map(skill => (
            <li key={skill} className="chip">
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Tabs */}
      <div className="flex justify-center">
        <div role="tablist" aria-label="Curriculum vitae sections" className="tabs">
          {TABS.map(t => (
            <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className="tab cursor-none">
              {t}
            </button>
          ))}
        </div>
      </div>

      <section key={tab} role="tabpanel" className="rise flex flex-col gap-6">
        {tab === 'Experience' &&
          history.map(item => (
            <article key={item.role + item.period} className="clay p-7 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold first-letter:uppercase">{item.role}</h2>
                <span className="chip chip-accent">{item.period}</span>
              </div>
              <p className="mt-1 text-muted">{item.company}</p>
              {item.details.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2 text-zinc-700">
                  {item.details.map(detail => (
                    <li key={detail.text} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {detail.link ? (
                        <a
                          href={detail.link}
                          className="link-soft cursor-none"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {detail.text}
                        </a>
                      ) : (
                        detail.text
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

        {tab === 'Education' &&
          education.map(item => (
            <article key={item.degree} className="clay p-7 sm:p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">{item.degree}</h2>
                <span className="chip chip-accent">{item.year}</span>
              </div>
              <p className="mt-1 text-muted">{item.institution}</p>
              {item.details.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2 text-zinc-700">
                  {item.details.map(detail => (
                    <li key={detail} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {detail}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}

        {tab === 'Projects' && (
          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map(project => (
              <article key={project.text} className="clay flex flex-col justify-between gap-5 p-7">
                <p className="text-lg font-medium leading-snug">{project.text}</p>
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm cursor-none self-start"
                  >
                    Visit <ArrowIcon />
                  </a>
                ) : (
                  <span className="btn btn-sm btn-disabled self-start">Offline</span>
                )}
              </article>
            ))}
          </div>
        )}
      </section>

      <div className="alert" role="note">
        <svg viewBox="0 0 20 20" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="10" cy="10" r="8" />
          <path d="M10 6v4.5M10 13.5v.5" strokeLinecap="round" />
        </svg>
        <span>Known bug: occasionally outputs puns instead of code.</span>
      </div>

      {/* Contact */}
      <footer className="flex flex-col items-center gap-6 pt-4">
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="mailto:info@nils-mueller.com" className="btn btn-primary cursor-none">
            info@nils-mueller.com
          </Link>
          <Link href="tel:+4915115776494" className="btn cursor-none">
            +49 151 15776494
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="https://www.linkedin.com/in/nils-m%C3%BCller-5ab765220/" className="btn btn-sm cursor-none">
            LinkedIn
          </Link>
          <Link href="https://github.com/nlsmllr/" className="btn btn-sm cursor-none">
            GitHub
          </Link>
          <Link href="/Imprint" className="btn btn-sm cursor-none">
            Imprint
          </Link>
        </div>
      </footer>
    </div>
  );
};
