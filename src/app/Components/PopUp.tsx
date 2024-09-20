// import React, { useState } from 'react';

// // Define a list of supported commands
// const commands: { [key: string]: string } = {
//   'cat cv': 'Displaying CV details...', // This will trigger rendering the content
//   help: 'Supported commands:\n1. cat cv - Display your CV\n2. clear - Clear the terminal',
//   clear: '',
// };

// interface PopUpProps {
//   onShowCV: () => void; // Function to trigger showing the CV content
// }

// const PopUp: React.FC<PopUpProps> = ({ onShowCV }) => {
//   const [input, setInput] = useState<string>('');
//   const [output, setOutput] = useState<string[]>(["Welcome to Nils' Terminal!", 'Type "help" for a list of commands.']);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();

//     if (input === 'cat cv') {
//       onShowCV(); // Trigger showing the CV content
//     }

//     if (commands[input]) {
//       setOutput([...output, `> ${input}`, commands[input]]);
//     } else if (input === 'clear') {
//       setOutput([]);
//     } else {
//       setOutput([...output, `> ${input}`, 'Command not found. Type "help" for available commands.']);
//     }

//     setInput('');
//   };

//   return (
//     <div className="max-h-80 w-full overflow-y-auto rounded-lg bg-black p-4 font-mono text-green-500">
//       <div className="mb-4">
//         {output.map((line, index) => (
//           <pre key={index} className="whitespace-pre-wrap">
//             {line}
//           </pre>
//         ))}
//       </div>
//       <form onSubmit={handleSubmit}>
//         <label className="flex items-center">
//           <span className="mr-2">$</span>
//           <input
//             type="text"
//             value={input}
//             onChange={handleInputChange}
//             className="w-full border-none bg-transparent font-mono text-green-500 outline-none"
//             autoFocus
//           />
//         </label>
//       </form>
//     </div>
//   );
// };

// export default PopUp;
