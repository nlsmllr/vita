'use client';

import React, { useState } from 'react';

import { Content } from './Content';

export const Terminal = () => {
  const [commands, setCommands] = useState<string[]>([
    'Welcome to my Terminal!',
    'Type "help" for a list of commands.',
  ]);
  const [input, setInput] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let output = '';

    switch (input.trim().toLowerCase()) {
      case 'cat cv':
        output = 'Displaying CV details...';
        setCommands(prev => [...prev, `> ${input}`, output, 'cv']);
        break;
      case 'help':
        output = 'Supported commands:\n1. cat cv - Display my CV\n2. 418 - Try me!\n3. clear - Clear the terminal';
        setCommands(prev => [...prev, `> ${input}`, output]);
        break;
      case '418':
        output = `I'm a teapot`;
        setCommands(prev => [...prev, `> ${input}`, output]);
        break;
      case 'clear':
        setCommands([]);
        setInput('');
        return;
      default:
        output = `Command not found: ${input}. Type "help" for a list of available commands.`;
        setCommands(prev => [...prev, `> ${input}`, output]);
    }
    setInput('');
  };

  return (
    <div className="bg-zinc-950 p-0 font-mono leading-5 text-white">
      <div className="h-[74vh] w-full overflow-y-auto rounded-lg bg-zinc-950 p-4 font-mono sm:h-[100vh]">
        {commands.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap">
            {line === 'cv' ? <Content key={index} /> : line}
          </pre>
        ))}
        <form className="mb-20" onSubmit={handleSubmit}>
          <label className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="w-full border-none bg-transparent font-mono outline-none"
              autoFocus
            />
          </label>
        </form>
      </div>
    </div>
  );
};
