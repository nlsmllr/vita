'use client';

import React, { useState } from 'react';

import { Content } from './Content'; // Import the original content

export const Terminal = () => {
  const [commands, setCommands] = useState<string[]>([
    "Welcome to Nils' Terminal!",
    'Type "help" for a list of commands.',
  ]); // Command history
  const [input, setInput] = useState<string>(''); // Current user input

  // Function to handle the form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let output = '';

    switch (input.trim().toLowerCase()) {
      case 'cat cv':
        output = 'Displaying CV details...';
        setCommands(prev => [...prev, `> ${input}`, output, 'cv']); // Mark 'cv' as a special case to render the CV
        break;
      case 'help':
        output = 'Supported commands:\n1. cat cv - Display your CV\n2. clear - Clear the terminal';
        setCommands(prev => [...prev, `> ${input}`, output]); // Add help output to the history
        break;
      case 'clear':
        setCommands([]); // Clear the terminal history
        setInput(''); // Reset the input field
        return; // Return early to prevent adding 'clear' command to history
      default:
        output = `Command not found: ${input}. Type "help" for a list of available commands.`;
        setCommands(prev => [...prev, `> ${input}`, output]); // Add default command not found message
    }

    setInput(''); // Reset the input field
  };

  return (
    <div className="bg-zinc-950 p-6 font-mono leading-5 text-white">
      {/* Terminal UI */}
      <div className="h-[74vh] w-full overflow-y-auto rounded-lg bg-black p-4 font-mono sm:h-[88vh]">
        {commands.map((line, index) => (
          <pre key={index} className="whitespace-pre-wrap">
            {line === 'cv' ? <Content key={index} /> : line} {/* Render CV inline when 'cv' is in the history */}
          </pre>
        ))}

        {/* Input Form */}
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
