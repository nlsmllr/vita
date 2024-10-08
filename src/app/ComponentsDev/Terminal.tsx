'use client';

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

import { Content } from './Content';

export const Terminal = () => {
  const [commands, setCommands] = useState<string[]>([
    'Welcome to my Terminal!',
    'Type "help" for a list of commands.',
  ]);
  const [input, setInput] = useState<string>('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let output = '';

    // Split the input to separate the command from its arguments
    const [command, ...args] = input.trim().split(/\s+/);
    const argumentsString = args.join(' '); // Rejoin the arguments to form the full string after the command

    switch (command.toLowerCase()) {
      case 'cat':
        if (argumentsString === 'cv') {
          output = 'Displaying CV details...';
          setCommands(prev => [...prev, `> ${input}`, output, 'cv']);
        } else {
          output = `File not found: ${argumentsString}`;
          setCommands(prev => [...prev, `> ${input}`, output]);
        }
        break;
      case 'help':
        output =
          'Supported commands:\n\tcat cv\n\t\tDisplay my CV\n\techo [text]\n\t\tRepeat the text back to you\n\t418\n\t\tTry me!\n\tclear\n\t\tClear the terminal\n\texit\n\t\tReturn to the landing page';
        setCommands(prev => [...prev, `> ${input}`, output]);
        break;
      case '418':
        output = `I'm a teapot`;
        setCommands(prev => [...prev, `> ${input}`, output]);
        break;
      case 'echo':
        output = argumentsString;
        setCommands(prev => [...prev, `> ${input}`, output]);
        break;
      case 'clear':
        setCommands([]);
        setInput('');
        return;
      case 'exit':
        router.push('/');
        return;
      default:
        output = `Command not found: ${input}. Type "help" for a list of available commands.`;
        setCommands(prev => [...prev, `> ${input}`, output]);
    }
    setInput('');
  };

  return (
    <div className="p-0 font-mono leading-5 text-white">
      <div className="scrollbar-hide h-[74vh] w-full overflow-y-auto rounded-lg p-4 font-mono sm:h-full">
        {commands.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap">
            {line === 'cv' ? <Content key={index} /> : line}
          </pre>
        ))}
        <form className="mb-20" onSubmit={handleSubmit}>
          <label className="flex items-start">
            <span className="mr-2">$</span>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e as unknown as React.FormEvent<HTMLFormElement>);
                }
              }}
              className="h-48 w-full resize-none items-start border-none bg-transparent font-mono outline-none"
              autoFocus
            />
          </label>
        </form>
      </div>
    </div>
  );
};
