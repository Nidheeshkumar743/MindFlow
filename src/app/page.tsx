//--------------------------------------------------------------------mm1-------------------------------------------------
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap, loadCSS, loadJS } from "markmap-view";

// export default function MindMap() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [markdown, setMarkdown] = useState(`# Playground

// ## Links
// ### [New Mind Map](https://mindmapwizard.com/new)
// ### [Mind Map History](https://mindmapwizard.com/history)

// ## Features
// Note that if blocks and lists appear at the same level, the lists will be ignored.

// ### Lists
// #### **strong**
// #### ~~del~~
// #### *italic*
// #### \`inline code\`

// ### Ordered list
// 1. item 1
// 2. item 2

// ### Blocks
// \`\`\`js
// console.log('hello, JavaScript')
// \`\`\`

// ![icon](https://mindmapwizard.com/img/favicon64.png)
// `);

//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);

//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   return (
//     <div className="flex flex-col md:flex-row h-screen p-4 gap-4 bg-white text-black">
//       <textarea
//         className="w-full md:w-1/2 h-full p-4 border border-gray-300 rounded resize-none font-mono text-sm shadow-md"
//         value={markdown}
//         onChange={(e) => setMarkdown(e.target.value)}
//         spellCheck={false}
//       />
//       <div className="w-full md:w-1/2 h-full border border-gray-300 rounded shadow-md overflow-auto">
//         <svg ref={svgRef} className="w-full h-full" />
//       </div>
//     </div>
//   );
// }
//------------------------------------------------------------------------------------mm2------------------------------------
// "use client";

// import { useEffect, useRef } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// // ✅ Reusable MindMap Component
// function MindMap({ markdown }: { markdown: string }) {
//   const svgRef = useRef<SVGSVGElement | null>(null);

//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   return (
//     <div className="w-full h-[500px] border border-gray-300 rounded shadow-md overflow-auto p-2 bg-white">
//       <svg ref={svgRef} className="w-full h-full" />
//     </div>
//   );
// }

// // ✅ Page or Gallery Component Showing Multiple MindMaps
// export default function MindMapGallery() {
//   const exampleMindMap1 = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

//   const exampleMindMap2 = `# Human Body
// ## Nervous System
// ### Brain
// ### Spinal Cord
// ## Circulatory System
// ### Heart
// ### Blood Vessels`;

//   const exampleMindMap3 = `# Web Development
// ## Frontend
// ### HTML
// ### CSS
// ### JavaScript
// ## Backend
// ### Node.js
// ### Databases`;

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//       <MindMap markdown={exampleMindMap1} />
//     </div>
//   );
// }
//===========================================================mm3--without displaying the code===============================================================
// "use client";

// import { useEffect, useRef } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// // ✅ Single MindMap Component
// export default function MindMapPage() {
//   const svgRef = useRef<SVGSVGElement | null>(null);

//   const markdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   return (
//     <div className="w-full h-screen bg-white p-4">
//       <div className="w-full h-full border border-gray-300 rounded shadow-md overflow-auto p-4">
//         <svg ref={svgRef} className="w-full h-full" />
//       </div>
//     </div>
//   );
// }
//===========================================================mm4--without displaying the code===============================================================
// "use client";

// import { useEffect, useRef } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// // ✅ Single MindMap Component
// export default function MindMapPage() {
//   const svgRef = useRef<SVGSVGElement | null>(null);

//   const markdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   return (
//     <div className="w-full h-screen bg-white p-4">
//       <div className="w-full h-full border border-gray-300 rounded shadow-md overflow-auto p-4">
//         <svg ref={svgRef} className="w-full h-full" />
//       </div>
//     </div>
//   );
// }
//============================================================mm5 code with dark background===========================================================
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMapPage() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [markdown, setMarkdown] = useState(`# \`Dimensionality Reduction\`
// ## \`Dimensionality Reduction\`
// ### \`Dimensionality Reduction\`
// ### \`Dimensionality Reduction\`
// ## \`Dimensionality Reduction\`
// ### \`Dimensionality Reduction\`
// ### \`Dimensionality Reduction\`
// `);

//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(
//         svgRef.current,
//         {
//           spacingVertical: 20,
//           spacingHorizontal: 100,
//           duration: 500,
//         },
//         root
//       );
//     }
//   }, [markdown]);

//   return (
//     <div className="w-full h-screen bg-white dark:bg-gray-900 p-4 space-y-4">
//       <div className="w-full">
//         <label className="text-white dark:text-white font-semibold text-lg block mb-2">
//           Edit Mind Map Markdown
//         </label>
//         <textarea
//           className="w-full h-40 p-3 border rounded-md shadow-sm resize-none text-sm bg-white dark:bg-gray-800 text-white dark:text-white border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           value={markdown}
//           onChange={(e) => setMarkdown(e.target.value)}
//         />
//       </div>

//       <div className="w-full h-[calc(100%-12rem)] border border-gray-300 dark:border-gray-700 rounded shadow-md overflow-auto p-4 bg-white dark:bg-gray-800">
//         <svg ref={svgRef} className="w-full h-full" />
//       </div>
//     </div>
//   );
// }

// ==============================================================resizable mindmap with code displaying
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMap() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const [markdown, setMarkdown] = useState(`# Playground

// ## Links
// ### [New Mind Map](https://mindmapwizard.com/new)
// ### [Mind Map History](https://mindmapwizard.com/history)

// ## Features
// Note that if blocks and lists appear at the same level, the lists will be ignored.

// ### Lists
// #### **strong**
// #### ~~del~~
// #### *italic*
// #### \`inline code\`

// ### Ordered list
// 1. item 1
// 2. item 2

// ### Blocks
// \`\`\`js
// console.log('hello, JavaScript')
// \`\`\`

// ![icon](https://mindmapwizard.com/img/favicon64.png)
// `);

//   const [leftWidth, setLeftWidth] = useState(50); // Initial width in percent
//   const isDragging = useRef(false);

//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);

//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   // Drag logic
//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const containerWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / containerWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className="flex h-screen p-4 gap-0 bg-white text-black relative"
//     >
//       {/* Markdown Editor */}
//       <div className="h-full p-2" style={{ width: `${leftWidth}%` }}>
//         <textarea
//           className="w-full h-full p-4 border border-gray-300 rounded resize-none font-mono text-sm shadow-md"
//           value={markdown}
//           onChange={(e) => setMarkdown(e.target.value)}
//           spellCheck={false}
//         />
//       </div>

//       {/* Draggable Divider */}
//       <div
//         onMouseDown={handleMouseDown}
//         className="w-1 cursor-col-resize bg-gray-300"
//       />

//       {/* Mind Map Viewer */}
//       <div className="h-full p-2" style={{ width: `${100 - leftWidth}%` }}>
//         <svg
//           ref={svgRef}
//           className="w-full h-full border border-gray-300 rounded shadow-md overflow-auto"
//         />
//       </div>
//     </div>
//   );
// }
//================================================dark mode,resizing======================================================================
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMap() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const [markdown, setMarkdown] = useState(`# Playground

// ## Links
// ### [New Mind Map](https://mindmapwizard.com/new)
// ### [Mind Map History](https://mindmapwizard.com/history)

// ## Features
// ### Lists
// #### **strong**
// #### ~~del~~
// #### *italic*
// #### \`inline code\`
// `);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const isDragging = useRef(false);
//   const [darkMode, setDarkMode] = useState(false);

//   // render markmap
//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   // resizing
//   const handleMouseDown = () => (isDragging.current = true);
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newWidth = (e.clientX / totalWidth) * 100;
//     if (newWidth > 10 && newWidth < 90) setLeftWidth(newWidth);
//   };
//   const handleMouseUp = () => (isDragging.current = false);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div className={darkMode ? "dark" : ""}>
//       <div className="p-2 bg-white dark:bg-gray-900">
//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="px-4 py-1 rounded border text-sm bg-gray-200 dark:bg-gray-700 dark:text-white"
//         >
//           {darkMode ? "Light Mode" : "Dark Mode"}
//         </button>
//       </div>

//       <div
//         ref={containerRef}
//         className="flex h-[calc(100vh-3rem)] bg-white text-black dark:bg-gray-900 dark:text-white"
//       >
//         {/* Editor */}
//         <div
//           style={{ width: `${leftWidth}%` }}
//           className="h-full p-2 bg-white dark:bg-gray-900"
//         >
//           <textarea
//             className="w-full h-full p-4 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-black dark:text-white rounded font-mono text-sm shadow-md resize-none"
//             value={markdown}
//             onChange={(e) => setMarkdown(e.target.value)}
//           />
//         </div>

//         {/* Divider */}
//         <div
//           onMouseDown={handleMouseDown}
//           className="w-1 cursor-col-resize bg-gray-300 dark:bg-gray-600"
//         />

//         {/* Markmap Viewer */}
//         <div
//           style={{ width: `${100 - leftWidth}%` }}
//           className="h-full p-2 bg-white dark:bg-gray-900"
//         >
//           <svg
//             ref={svgRef}
//             className="w-full h-full border border-gray-300 dark:border-gray-700 rounded shadow-md"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
//----------------------------------------------------------------------------lightmode to darkmode-----------------
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMap() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const [markdown, setMarkdown] = useState(`# Playground

// ## Lists
// ### **strong**
// ### ~~del~~
// ### *italic*

// ## Features
// ### Light Mode
// ### **Dark Mode**

// `);

//   const [leftWidth, setLeftWidth] = useState(50);
//   const isDragging = useRef(false);
//   const [isLight, setIsLight] = useState(true); // true = light mode

//   // render mind map
//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   // drag logic
//   const handleMouseDown = () => (isDragging.current = true);
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newWidth = (e.clientX / totalWidth) * 100;
//     if (newWidth > 10 && newWidth < 90) setLeftWidth(newWidth);
//   };
//   const handleMouseUp = () => (isDragging.current = false);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   // Dynamic theme classes
//   const theme = isLight
//     ? {
//         bg: "bg-white",
//         text: "text-black",
//         border: "border-gray-300",
//         divider: "bg-gray-300",
//         button: "bg-gray-200 text-black border border-gray-400",
//         textarea: "bg-white text-black",
//       }
//     : {
//         bg: "bg-gray-900",
//         text: "text-white",
//         border: "border-gray-700",
//         divider: "bg-gray-600",
//         button: "bg-gray-700 text-white border border-gray-500",
//         textarea: "bg-gray-800 text-white",
//       };

//   return (
//     <div className={`${theme.bg} ${theme.text} h-screen`}>
//       {/* Toggle Button */}
//       <div className={`p-2 ${theme.bg}`}>
//         <button
//           onClick={() => setIsLight((prev) => !prev)}
//           className={`px-4 py-1 rounded text-sm ${theme.button}`}
//         >
//           Switch to {isLight ? "Dark" : "Light"} Mode
//         </button>
//       </div>

//       {/* Editor and Viewer */}
//       <div
//         ref={containerRef}
//         className={`flex h-[calc(100vh-3rem)] ${theme.bg} ${theme.text}`}
//       >
//         {/* Editor */}
//         <div style={{ width: `${leftWidth}%` }} className="h-full p-2">
//           <textarea
//             className={`w-full h-full p-4 ${theme.border} ${theme.textarea} rounded font-mono text-sm shadow-md resize-none`}
//             value={markdown}
//             onChange={(e) => setMarkdown(e.target.value)}
//           />
//         </div>

//         {/* Divider */}
//         <div
//           onMouseDown={handleMouseDown}
//           className={`w-1 cursor-col-resize ${theme.divider}`}
//         />

//         {/* Viewer */}
//         <div style={{ width: `${100 - leftWidth}%` }} className="h-full p-2">
//           <svg
//             ref={svgRef}
//             className={`w-full h-full ${theme.border} rounded shadow-md`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// -----------------------------------------------------------------------------------lightmode to darkmode 2
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMap() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const [markdown, setMarkdown] = useState(`# Playground

// ## Modes
// ### LightMode DarkModeDarkModeDarkModeDarkModeDarkMode
// ### DrakMode

// ## Features
// ### Lists
// #### **strong**
// #### ~~del~~
// #### *italic*
// #### \`inline code\`
// `);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const isDragging = useRef(false);
//   const [isLight, setIsLight] = useState(true); // Default to light mode

//   // render markmap
//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   // resizing
//   const handleMouseDown = () => (isDragging.current = true);
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newWidth = (e.clientX / totalWidth) * 100;
//     if (newWidth > 10 && newWidth < 90) setLeftWidth(newWidth);
//   };
//   const handleMouseUp = () => (isDragging.current = false);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div className={isLight ? "bg-white text-black" : "bg-gray-900 text-white"}>
//       <div
//         className={
//           isLight ? "p-2 bg-white text-black" : "p-2 bg-gray-900 text-white"
//         }
//       >
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={
//             isLight
//               ? "px-4 py-1 rounded border text-sm bg-gray-200 text-black"
//               : "px-4 py-1 rounded border text-sm bg-gray-700 text-white"
//           }
//         >
//           {isLight ? "Dark Mode" : "Light Mode"}
//         </button>
//       </div>

//       <div
//         ref={containerRef}
//         className={`flex h-[calc(100vh-3rem)] ${
//           isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//         }`}
//       >
//         {/* Editor */}
//         <div
//           style={{ width: `${leftWidth}%` }}
//           className={isLight ? "h-full p-2 bg-white" : "h-full p-2 bg-gray-900"}
//         >
//           <textarea
//             className={`w-full h-full p-4 border rounded resize-none font-mono text-sm shadow-md ${
//               isLight
//                 ? "bg-white text-black border-gray-300"
//                 : "bg-gray-800 text-white border-gray-700"
//             }`}
//             value={markdown}
//             onChange={(e) => setMarkdown(e.target.value)}
//           />
//         </div>

//         {/* Divider */}
//         <div
//           onMouseDown={handleMouseDown}
//           className={
//             isLight
//               ? "w-1 cursor-col-resize bg-gray-300"
//               : "w-1 cursor-col-resize bg-gray-600"
//           }
//         />

//         {/* Markmap Viewer */}
//         <div
//           style={{ width: `${100 - leftWidth}%` }}
//           className={isLight ? "h-full p-2 bg-white" : "h-full p-2 bg-gray-900"}
//         >
//           <svg
//             ref={svgRef}
//             className={`w-full h-full border rounded shadow-md ${
//               isLight ? "border-gray-300" : "border-gray-700"
//             }`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
//-------------------------------------------------dm to lm 3---------------------------------------------------------

// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMap() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);

//   const [markdown, setMarkdown] = useState(`# Playground

// ## Links
// ### [New Mind Map](https://mindmapwizard.com/new)
// ### [Mind Map History](https://mindmapwizard.com/history)

// ## Features
// ### Lists
// #### **strong**
// #### ~~del~~
// #### *italic*
// #### \`inline code\`
// `);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const isDragging = useRef(false);
//   const [isLight, setIsLight] = useState(true);

//   // Render markmap
//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   }, [markdown]);

//   // Resize logic
//   const handleMouseDown = () => (isDragging.current = true);
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newWidth = (e.clientX / totalWidth) * 100;
//     if (newWidth > 10 && newWidth < 90) setLeftWidth(newWidth);
//   };
//   const handleMouseUp = () => (isDragging.current = false);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div className={isLight ? "bg-white text-black" : "bg-gray-900 text-white"}>
//       {/* Header */}
//       <div
//         className={`flex items-center justify-between px-4 py-2 border-b ${
//           isLight ? "bg-white border-gray-200" : "bg-gray-900 border-gray-700"
//         }`}
//       >
//         <h1 className="text-lg font-semibold">🧠 Markdown Mind Map Editor</h1>
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-3 py-1 text-sm rounded border ${
//             isLight
//               ? "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"
//               : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
//           }`}
//         >
//           {isLight ? "🌙 Dark Mode" : "☀️ Light Mode"}
//         </button>
//       </div>

//       {/* Main Content */}
//       <div
//         ref={containerRef}
//         className={`flex h-[calc(100vh-3rem)] ${
//           isLight ? "bg-white" : "bg-gray-900"
//         }`}
//       >
//         {/* Markdown Editor */}
//         <div
//           style={{ width: `${leftWidth}%` }}
//           className={`h-full p-2 ${isLight ? "bg-white" : "bg-gray-900"} `}
//         >
//           <textarea
//             className={`w-full h-full p-4 rounded border resize-none font-mono text-sm shadow-inner ${
//               isLight
//                 ? "bg-white text-black border-gray-300"
//                 : "bg-gray-800 text-white border-gray-700"
//             }`}
//             value={markdown}
//             onChange={(e) => setMarkdown(e.target.value)}
//           />
//         </div>

//         {/* Resizer Divider */}
//         <div
//           onMouseDown={handleMouseDown}
//           className={`w-1 cursor-col-resize ${
//             isLight ? "bg-gray-300" : "bg-gray-600"
//           }`}
//         />

//         {/* Markmap Viewer */}
//         <div
//           style={{ width: `${100 - leftWidth}%` }}
//           className={`h-full p-2 ${isLight ? "bg-white" : "bg-gray-900"} `}
//         >
//           <svg
//             ref={svgRef}
//             className={`w-full h-full rounded border shadow ${
//               isLight ? "border-gray-300" : "border-gray-700"
//             }`}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
//------------------------------------------darkmode to light mode without code displaying------------------------------------------------------
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMapPage() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [isLight, setIsLight] = useState(true);

//   const markdown = `# \`AI Topics\`
// ## \`Supervised \`
// ### \`Regression\`
// ### \`Classification\`
// ## \`Unsupervised\`
// ### \`Clustering\`
// ### \`Dimensionality Reduction\``;

//   useEffect(() => {
//     const { root } = new Transformer().transform(markdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(
//         svgRef.current,
//         {
//           spacingVertical: 20,
//           spacingHorizontal: 100,
//           duration: 500,
//         },
//         root
//       );
//     }
//   }, [markdown]);

//   return (
//     <div
//       className={`${
//         isLight ? "bg-white" : "bg-gray-900"
//       } w-full h-screen transition-colors duration-300`}
//     >
//       {/* Toggle Button */}
//       <div className="p-4">
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-4 py-2 rounded text-sm font-medium border shadow ${
//             isLight
//               ? "bg-gray-200 text-black border-gray-300 hover:bg-gray-300"
//               : "bg-gray-700 text-white border-gray-600 hover:bg-gray-600"
//           }`}
//         >
//           {isLight ? "🌙 Dark Mode" : "☀️ Light Mode"}
//         </button>
//       </div>

//       {/* Mind Map Viewer */}
//       <div className="w-full h-[calc(100%-4rem)] px-4 pb-4">
//         <div
//           className={`w-full h-full rounded border overflow-auto shadow-md p-4 ${
//             isLight ? "bg-white border-gray-300" : "bg-gray-800 border-gray-700"
//           }`}
//         >
//           <svg ref={svgRef} className="w-full h-full" />
//         </div>
//       </div>
//     </div>
//   );
// }
//---------------------------------------------lm to dm without code displaying -2---------------------------------------
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// export default function MindMapPage() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [isLight, setIsLight] = useState(false);

//   // Clean Markdown (no backticks!)
//   const rawMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

//   // Automatically wrap all headings in backticks
//   const wrappedMarkdown = rawMarkdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   useEffect(() => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(
//         svgRef.current,
//         {
//           spacingVertical: 20,
//           spacingHorizontal: 100,
//           duration: 500,
//         },
//         root
//       );
//     }
//   }, [wrappedMarkdown]);

//   return (
//     <div
//       className={`w-full h-screen transition duration-300 ${
//         isLight ? "bg-white" : "bg-gray-900"
//       }`}
//     >
//       <div className="absolute top-4 right-4 z-10">
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-4 py-2 rounded shadow text-sm ${
//             isLight
//               ? "bg-gray-800 text-white hover:bg-gray-700"
//               : "bg-white text-black hover:bg-gray-200"
//           }`}
//         >
//           {isLight ? "Dark Mode" : "Light Mode"}
//         </button>
//       </div>

//       <div className="w-full h-full p-4">
//         <div
//           className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//             isLight ? "border-gray-300 bg-white" : "border-gray-700 bg-gray-800"
//           }`}
//         >
//           <svg ref={svgRef} className="w-full h-full" />
//         </div>
//       </div>
//     </div>
//   );
// }
//============================================================light to dark, edit, reset========================================
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   // Wrap all markdown headings with backticks
//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   // Render Mindmap
//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       {/* Control Panel */}
//       <div className="flex justify-between items-center p-4 gap-4">
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-4 py-2 rounded shadow text-sm ${
//             isLight
//               ? "bg-gray-800 text-white hover:bg-gray-700"
//               : "bg-white text-black hover:bg-gray-200"
//           }`}
//         >
//           {isLight ? "Dark Mode" : "Light Mode"}
//         </button>

//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//         >
//           {isEditing ? "View Mind Map" : "Edit Mind Map"}
//         </button>

//         <button
//           onClick={handleReset}
//           className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Editor + Viewer */}
//       {isEditing ? (
//         <div className="flex flex-grow">
//           <div className="w-1/2 h-full p-2">
//             <textarea
//               className={`w-full h-full border rounded resize-none font-mono text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>
//           <div className="w-1/2 h-full p-2">
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             }`}
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//========================================================================darkmode to lightmode, edit mindmap, reset mindmap,resizing
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50); // % width of editor
//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   // Wrap headings in backticks for better Markmap rendering
//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   // Resize Logic
//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       {/* Control Panel */}
//       <div className="flex justify-between items-center p-4 gap-4">
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-4 py-2 rounded shadow text-sm ${
//             isLight
//               ? "bg-gray-800 text-white hover:bg-gray-700"
//               : "bg-white text-black hover:bg-gray-200"
//           }`}
//         >
//           {isLight ? "Dark Mode" : "Light Mode"}
//         </button>

//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//         >
//           {isEditing ? "View Mind Map" : "Edit Mind Map"}
//         </button>

//         <button
//           onClick={handleReset}
//           className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Editor + Viewer */}
//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           {/* Markdown Editor */}
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none font-mono text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           {/* Divider */}
//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           {/* Markmap Viewer */}
//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             }`}
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//====================================================Final lm to dm , reset, editing,===============================================================================
// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   // Backtick-wrap markdown headings
//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(svgRef.current, {}, root);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   // Resize Logic
//   const handleMouseDown = () => (isDragging.current = true);
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => (isDragging.current = false);

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       {/* Control Panel */}
//       <div className="flex justify-between items-center p-4 gap-4">
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-4 py-2 rounded shadow text-sm ${
//             isLight
//               ? "bg-gray-800 text-white hover:bg-gray-700"
//               : "bg-white text-black hover:bg-gray-200"
//           }`}
//         >
//           {isLight ? "Dark Mode" : "Light Mode"}
//         </button>

//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//         >
//           {isEditing ? "View Mind Map" : "Edit Mind Map"}
//         </button>

//         <button
//           onClick={handleReset}
//           className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Editor + Viewer */}
//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           {/* Markdown Editor */}
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none font-mono text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           {/* Resizer Divider */}
//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           {/* Markmap Viewer */}
//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white text-black border-gray-300"
//                 : "bg-gray-800 text-white border-gray-600"
//             }`}
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//======================================fontsize changing only to context, lt to dm, resizing,edit,reset
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50); // % width of editor
//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   // Wrap headings in backticks for better Markmap rendering
//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(
//         svgRef.current,
//         {
//           style: {
//             fontFamily: "Times New Roman",
//             fontSize: "15px",
//             color: isLight ? "black" : "white",
//           },
//         },
//         root
//       );
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   // Resize Logic
//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       } font-['Times_New_Roman']`}
//       style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//     >
//       {/* Control Panel */}
//       <div className="flex justify-between items-center p-4 gap-4">
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-4 py-2 rounded shadow text-sm ${
//             isLight
//               ? "bg-gray-800 text-white hover:bg-gray-700"
//               : "bg-white text-black hover:bg-gray-200"
//           }`}
//         >
//           {isLight ? "Dark Mode" : "Light Mode"}
//         </button>

//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//         >
//           {isEditing ? "View Mind Map" : "Edit Mind Map"}
//         </button>

//         <button
//           onClick={handleReset}
//           className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//         >
//           Reset
//         </button>
//       </div>

//       {/* Editor + Viewer */}
//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           {/* Markdown Editor */}
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               } font-['Times_New_Roman']`}
//               style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           {/* Divider */}
//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           {/* Markmap Viewer */}
//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             } font-['Times_New_Roman']`}
//             style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//-------------------------------------fontstylee changing to context and mindmaps, lt to dm, resizing,edit,reset
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       const mm = Markmap.create(
//         svgRef.current,
//         {
//           style: {
//             fontFamily: "Times New Roman",
//             fontSize: "15px",
//           },
//         },
//         root
//       );

//       // Force non-monospace style on <code> elements
//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//           .markmap-node text tspan {
//             font-family: 'Times New Roman', serif !important;
//             font-size: 15px !important;
//           }
//           .markmap-node code {
//             font-family: 'Times New Roman', serif !important;
//             font-size: 15px !important;
//             background: #f3f3f3;
//             padding: 2px 6px;
//           }
//         `;
//       svgRef.current.appendChild(styleTag);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       } font-['Times_New_Roman']`}
//       style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//     >
//       <div className="flex justify-between items-center p-4 gap-4">
//         <button
//           onClick={() => setIsLight(!isLight)}
//           className={`px-4 py-2 rounded shadow text-sm ${
//             isLight
//               ? "bg-gray-800 text-white hover:bg-gray-700"
//               : "bg-white text-black hover:bg-gray-200"
//           }`}
//         >
//           {isLight ? "Dark Mode" : "Light Mode"}
//         </button>

//         <button
//           onClick={() => setIsEditing(!isEditing)}
//           className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//         >
//           {isEditing ? "View Mind Map" : "Edit Mind Map"}
//         </button>

//         <button
//           onClick={handleReset}
//           className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//         >
//           Reset
//         </button>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               } font-['Times_New_Roman']`}
//               style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             } font-['Times_New_Roman']`}
//             style={{ fontFamily: "Times New Roman", fontSize: "15px" }}
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{ fontFamily: "Times New Roman", fontSize: "15px" }}//make gaps between nodes
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//=========================================================================includes fontsize too--1------------------------------------------------
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);

//   const [fontSize, setFontSize] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedSize = localStorage.getItem("mindmap-fontsize");
//       return savedSize ? parseInt(savedSize) : 15;
//     }
//     return 15;
//   });

//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       const mm = Markmap.create(
//         svgRef.current,
//         {
//           style: {
//             fontFamily: "Times New Roman",
//             fontSize: `${fontSize}px`,
//           },
//         },
//         root
//       );

//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//         .markmap-node text tspan {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//         }
//         .markmap-node code {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//           background: #f3f3f3;
//           padding: 2px 6px;
//         }
//       `;
//       svgRef.current.appendChild(styleTag);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing, fontSize]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-fontsize", fontSize.toString());
//   }, [fontSize]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//       style={{ fontFamily: "Times New Roman", fontSize: `${fontSize}px` }}
//     >
//       <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsLight(!isLight)}
//             className={`px-4 py-2 rounded shadow text-sm ${
//               isLight
//                 ? "bg-gray-800 text-white hover:bg-gray-700"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
//           >
//             {isLight ? "Dark Mode" : "Light Mode"}
//           </button>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {isEditing ? "View Mind Map" : "Edit Mind Map"}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <label htmlFor="fontSize" className="text-sm">
//             Font Size:
//           </label>
//           <input
//             id="fontSize"
//             type="range"
//             min="10"
//             max="24"
//             value={fontSize}
//             onChange={(e) => setFontSize(parseInt(e.target.value))}
//             className="w-32"
//           />
//           <span className="text-sm">{fontSize}px</span>
//         </div>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               style={{
//                 fontFamily: "Times New Roman",
//                 fontSize: `${fontSize}px`,
//               }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{
//                 fontFamily: "Times New Roman",
//                 fontSize: `${fontSize}px`,
//               }}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             }`}
//             style={{ fontFamily: "Times New Roman", fontSize: `${fontSize}px` }}
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{
//                 fontFamily: "Times New Roman",
//                 fontSize: `${fontSize}px`,
//               }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//---------------------------------------------fontstyle changing to everything, lt to dm, resizing,edit,reset,fontsize--2--------------------------------------------
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [fontSize, setFontSize] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedSize = localStorage.getItem("mindmap-fontsize");
//       return savedSize ? parseInt(savedSize) : 15;
//     }
//     return 15;
//   });

//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       const mm = Markmap.create(
//         svgRef.current,
//         {
//           style: {
//             fontFamily: "Times New Roman",
//           },
//         },
//         root
//       );

//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//         .markmap-node text tspan {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//         }
//         .markmap-node code {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//           background: #f3f3f3;
//           padding: 2px 6px;
//         }
//       `;
//       svgRef.current.appendChild(styleTag);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing, fontSize]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-fontsize", fontSize.toString());
//   }, [fontSize]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsLight(!isLight)}
//             className={`px-4 py-2 rounded shadow text-sm ${
//               isLight
//                 ? "bg-gray-800 text-white hover:bg-gray-700"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
//           >
//             {isLight ? "Dark Mode" : "Light Mode"}
//           </button>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {isEditing ? "View Mind Map" : "Edit Mind Map"}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <label htmlFor="fontSize" className="text-sm">
//             Mind Map FontSize:
//           </label>
//           <input
//             id="fontSize"
//             type="range"
//             min="10"
//             max="24"
//             value={fontSize}
//             onChange={(e) => setFontSize(parseInt(e.target.value))}
//             className="w-32"
//           />
//         </div>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               style={{ fontFamily: "Times New Roman" }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             }`}
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//==============================================includes downloading image(wrong image)
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";
// import { Canvg } from "canvg";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [fontSize, setFontSize] = useState(15);
//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       const mm = Markmap.create(
//         svgRef.current,
//         {
//           style: {
//             fontFamily: "Times New Roman",
//             fontSize: `${fontSize}px`,
//           },
//         },
//         root
//       );

//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//         .markmap-node text tspan {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//         }
//         .markmap-node code {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//           background: #f3f3f3;
//           padding: 2px 6px;
//         }
//       `;
//       svgRef.current.appendChild(styleTag);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing, fontSize]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   const exportAsImage = async () => {
//     const svg = svgRef.current;
//     if (!svg) return;

//     const svgData = new XMLSerializer().serializeToString(svg);
//     const canvas = document.createElement("canvas");
//     const bbox = svg.getBBox();
//     canvas.width = bbox.width + 40;
//     canvas.height = bbox.height + 40;

//     const ctx = canvas.getContext("2d");
//     if (!ctx) return;

//     // Use Canvg to render the SVG into the canvas
//     const v = await Canvg.from(ctx, svgData);
//     await v.render();

//     const imgURI = canvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.download = "mindmap.png";
//     link.href = imgURI;
//     link.click();
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       } font-['Times_New_Roman']`}
//       style={{ fontFamily: "Times New Roman" }}
//     >
//       <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsLight(!isLight)}
//             className={`px-4 py-2 rounded shadow text-sm ${
//               isLight
//                 ? "bg-gray-800 text-white hover:bg-gray-700"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
//           >
//             {isLight ? "Dark Mode" : "Light Mode"}
//           </button>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {isEditing ? "View Mind Map" : "Edit Mind Map"}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//           >
//             Reset
//           </button>

//           <button
//             onClick={exportAsImage}
//             className="px-4 py-2 rounded shadow text-sm bg-green-600 text-white hover:bg-green-700"
//           >
//             Export PNG
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <label className="text-sm">Font Size:</label>
//           <input
//             type="range"
//             min={10}
//             max={24}
//             value={fontSize}
//             onChange={(e) => setFontSize(Number(e.target.value))}
//             className="w-32"
//           />
//         </div>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               } font-['Times_New_Roman']`}
//               style={{ fontFamily: "Times New Roman" }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{ fontFamily: "Times New Roman" }}
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             } font-['Times_New_Roman']`}
//             style={{ fontFamily: "Times New Roman" }}
//           >
//             <svg
//               ref={svgRef}
//               className="w-full h-full"
//               style={{ fontFamily: "Times New Roman" }}
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//
//-----------------------------------------------------------------------------------------------editing
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [fontSize, setFontSize] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedSize = localStorage.getItem("mindmap-fontsize");
//       return savedSize ? parseInt(savedSize) : 15;
//     }
//     return 15;
//   });

//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";
//       Markmap.create(
//         svgRef.current,
//         {
//           style: { fontFamily: "Times New Roman" },
//         },
//         root
//       );

//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//         .markmap-node text tspan {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//         }
//         .markmap-node code {
//           font-family: 'Times New Roman', serif !important;
//           font-size: ${fontSize}px !important;
//           background: #f3f3f3;
//           padding: 2px 6px;
//         }
//       `;
//       svgRef.current.appendChild(styleTag);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing, fontSize]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-fontsize", fontSize.toString());
//   }, [fontSize]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsLight(!isLight)}
//             className={`btn ${
//               isLight ? "btn-toggle-light" : "btn-toggle-dark"
//             }`}
//           >
//             {isLight ? "Dark Mode" : "Light Mode"}
//           </button>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="btn btn-primary"
//           >
//             {isEditing ? "View Mind Map" : "Edit Mind Map"}
//           </button>

//           <button onClick={handleReset} className="btn btn-danger">
//             Reset
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <label htmlFor="fontSize" className="text-sm">
//             Mind Map FontSize:
//           </label>
//           <input
//             id="fontSize"
//             type="range"
//             min="10"
//             max="24"
//             value={fontSize}
//             onChange={(e) => setFontSize(parseInt(e.target.value))}
//             className="w-32"
//           />
//         </div>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div style={{ width: `${leftWidth}%` }} className="h-full p-2">
//             <textarea
//               className="editor-textarea"
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           <div style={{ width: `${100 - leftWidth}%` }} className="h-full p-2">
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div className="viewer-panel">
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//---------------------------------------------------------------hover
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [fontSize, setFontSize] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedSize = localStorage.getItem("mindmap-fontsize");
//       return savedSize ? parseInt(savedSize) : 15;
//     }
//     return 15;
//   });

//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";

//       const mm = Markmap.create(
//         svgRef.current,
//         {
//           style: {
//             fontFamily: "Times New Roman",
//           },
//         },
//         root
//       );

//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//           .markmap-node text tspan {
//             font-family: 'Times New Roman', serif !important;
//             font-size: ${fontSize}px !important;
//             transition: stroke 0.3s ease;
//           }

//           .markmap-node:hover text tspan {
//             stroke: #ffa500;
//             stroke-width: 1.2px;
//             paint-order: stroke fill;
//           }

//           .markmap-node code {
//             font-family: 'Times New Roman', serif !important;
//             font-size: ${fontSize}px !important;
//             background: #f3f3f3;
//             padding: 2px 6px;
//             border: 1px solid transparent;
//             border-radius: 4px;
//             transition: border-color 0.3s ease;
//           }

//           .markmap-node:hover code {
//             border-color: #ffa500;
//           }
//         `;
//       svgRef.current.appendChild(styleTag);
//     }
//   };
//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing, fontSize]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-fontsize", fontSize.toString());
//   }, [fontSize]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsLight(!isLight)}
//             className={`px-4 py-2 rounded shadow text-sm ${
//               isLight
//                 ? "bg-gray-800 text-white hover:bg-gray-700"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
//           >
//             {isLight ? "Dark Mode" : "Light Mode"}
//           </button>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {isEditing ? "View Mind Map" : "Edit Mind Map"}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <label htmlFor="fontSize" className="text-sm">
//             Mind Map FontSize:
//           </label>
//           <input
//             id="fontSize"
//             type="range"
//             min="10"
//             max="20"
//             value={fontSize}
//             onChange={(e) => setFontSize(parseInt(e.target.value))}
//             className="w-32"
//           />
//         </div>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               style={{ fontFamily: "Times New Roman" }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             }`}
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// ============================hovering parent-child node
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [fontSize, setFontSize] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedSize = localStorage.getItem("mindmap-fontsize");
//       return savedSize ? parseInt(savedSize) : 15;
//     }
//     return 15;
//   });

//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";

//       const mm = Markmap.create(
//         svgRef.current,
//         {
//           // style: {
//           //   fontFamily: "Times New Roman",
//           // },
//         },
//         root
//       );

//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//           .markmap-node text tspan {
//             font-family: 'Times New Roman', serif !important;
//             font-size: ${fontSize}px !important;
//             transition: stroke 0.3s ease;
//           }

//           .markmap-node:hover text tspan {
//             stroke: #ffa500;
//             stroke-width: 1.2px;
//             paint-order: stroke fill;
//           }

//           .markmap-node code {
//             font-family: 'Times New Roman', serif !important;
//             font-size: ${fontSize}px !important;
//             background: #f3f3f3;
//             padding: 2px 6px;
//             border: 1px solid transparent;
//             border-radius: 4px;
//             transition: border-color 0.3s ease;
//           }

//           .markmap-node:hover code {
//             border-color: #ffa500;
//           }

//           .markmap-node.hovered text tspan {
//             stroke: #ffa500;
//             stroke-width: 1.2px;
//             paint-order: stroke fill;
//           }

//           .markmap-node.hovered code {
//             border-color: #ffa500;
//             background-color: #fff8e1;
//           }
//         `;
//       svgRef.current.appendChild(styleTag);

//       // Add hover interactions
//       setTimeout(() => {
//         const nodes =
//           svgRef.current?.querySelectorAll<SVGGElement>(".markmap-node");

//         nodes?.forEach((node) => {
//           node.addEventListener("mouseenter", () => {
//             clearHighlights();
//             highlightNodeAndParents(node);
//           });
//           node.addEventListener("mouseleave", () => {
//             clearHighlights();
//           });
//         });

//         function clearHighlights() {
//           nodes?.forEach((n) => n.classList.remove("hovered"));
//         }

//         function highlightNodeAndParents(node: SVGGElement | null) {
//           while (node && node.classList.contains("markmap-node")) {
//             node.classList.add("hovered");
//             node = node.parentElement?.closest(".markmap-node") || null;
//           }
//         }
//       }, 100);
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing, fontSize]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-fontsize", fontSize.toString());
//   }, [fontSize]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };
//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };
//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsLight(!isLight)}
//             className={`px-4 py-2 rounded shadow text-sm ${
//               isLight
//                 ? "bg-gray-800 text-white hover:bg-gray-700"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
//           >
//             {isLight ? "Dark Mode" : "Light Mode"}
//           </button>

//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {isEditing ? "View Mind Map" : "Edit Mind Map"}
//           </button>

//           <button
//             onClick={handleReset}
//             className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <label htmlFor="fontSize" className="text-sm">
//             Mind Map FontSize:
//           </label>
//           <input
//             id="fontSize"
//             type="range"
//             min="10"
//             max="16"
//             value={fontSize}
//             onChange={(e) => setFontSize(parseInt(e.target.value))}
//             className="w-32"
//           />
//         </div>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               style={{ fontFamily: "Times New Roman" }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>

//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />

//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             }`}
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
//---------------------------------------------------------Hovering with text------------------------------------------
// "use client";
// import { useEffect, useRef, useState } from "react";
// import { Transformer } from "markmap-lib";
// import { Markmap } from "markmap-view";

// const defaultMarkdown = `# AI Topics
// ## Supervised
// ### Regression
// ### Classification
// ## Unsupervised
// ### Clustering
// ### Dimensionality Reduction`;

// const nodeDescriptions: Record<string, string> = {
//   Regression:
//     "A supervised learning technique that predicts continuous numeric outcomes from input features.",
//   Classification:
//     "A supervised learning method that assigns inputs to predefined categories or classes.",
//   Clustering:
//     "An unsupervised learning method for grouping similar items without predefined labels.",
//   "Dimensionality Reduction":
//     "A technique to reduce input variables in a dataset while preserving key information.",
//   Supervised:
//     "A machine learning approach that uses labeled data for training a model.",
//   Unsupervised:
//     "A method where models learn patterns from unlabeled data automatically.",
//   "AI Topics":
//     "Categories in artificial intelligence such as supervised and unsupervised learning.",
// };

// export default function MindMapEditor() {
//   const svgRef = useRef<SVGSVGElement | null>(null);
//   const containerRef = useRef<HTMLDivElement | null>(null);
//   const isDragging = useRef(false);

//   const [isLight, setIsLight] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);
//   const [leftWidth, setLeftWidth] = useState(50);
//   const [fontSize, setFontSize] = useState(() => {
//     if (typeof window !== "undefined") {
//       const savedSize = localStorage.getItem("mindmap-fontsize");
//       return savedSize ? parseInt(savedSize) : 15;
//     }
//     return 15;
//   });

//   const [markdown, setMarkdown] = useState(() => {
//     if (typeof window !== "undefined") {
//       return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
//     }
//     return defaultMarkdown;
//   });

//   const wrappedMarkdown = markdown
//     .split("\n")
//     .map((line) => {
//       const match = line.match(/^(\s*#+)\s(.+)/);
//       if (match) {
//         return `${match[1]} \`${match[2]}\``;
//       }
//       return line;
//     })
//     .join("\n");

//   const renderMap = () => {
//     const { root } = new Transformer().transform(wrappedMarkdown);
//     if (svgRef.current) {
//       svgRef.current.innerHTML = "";

//       const mm = Markmap.create(
//         svgRef.current,
//         {
//           style: {
//             fontFamily: "Times New Roman",
//           },
//         },
//         root
//       );

//       const styleTag = document.createElementNS(
//         "http://www.w3.org/2000/svg",
//         "style"
//       );
//       styleTag.textContent = `
//         .markmap-node text tspan {
//           font-size: ${fontSize}px;
//           transition: stroke 0.3s ease;
//         }

//         .markmap-node code {
//           font-family: 'Times New Roman', serif;
//           font-size: ${fontSize}px;
//           background: #f3f3f3;
//           padding: 2px 6px;
//           border-radius: 4px;
//           transition: border-color 0.3s ease;
//         }

//         .highlighted text tspan {
//           stroke: #ffa500;
//           stroke-width: 1.5px;
//           paint-order: stroke fill;
//         }
//       `;
//       svgRef.current.appendChild(styleTag);

//       const tooltip = document.getElementById("mindmap-tooltip");

//       svgRef.current.querySelectorAll(".markmap-node").forEach((node) => {
//         const textNode = node.querySelector("text");
//         const codeEl = node.querySelector("code");
//         const label = codeEl?.textContent || textNode?.textContent?.trim();

//         if (!label || !tooltip) return;

//         const description = nodeDescriptions[label];
//         if (!description) return;

//         node.addEventListener("mouseover", (e) => {
//           // highlight all children
//           highlightChildren(node as SVGGElement, true);

//           tooltip.innerText = description;
//           tooltip.style.opacity = "1";
//         });

//         node.addEventListener("mousemove", (e) => {
//           tooltip.style.left = `${e.clientX + 12}px`;
//           tooltip.style.top = `${e.clientY + 12}px`;
//         });

//         node.addEventListener("mouseleave", () => {
//           highlightChildren(node as SVGGElement, false);
//           tooltip.style.opacity = "0";
//         });
//       });

//       function highlightChildren(node: SVGGElement, highlight: boolean) {
//         const className = "highlighted";
//         const toggle = (n: SVGGElement) => {
//           if (highlight) {
//             n.classList.add(className);
//           } else {
//             n.classList.remove(className);
//           }
//           const childGroup = n.querySelector("g.children");
//           if (childGroup) {
//             childGroup
//               .querySelectorAll<SVGGElement>("g.markmap-node")
//               .forEach((child) => toggle(child));
//           }
//         };
//         toggle(node);
//       }
//     }
//   };

//   useEffect(() => {
//     renderMap();
//   }, [wrappedMarkdown, isEditing, fontSize]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-markdown", markdown);
//   }, [markdown]);

//   useEffect(() => {
//     localStorage.setItem("mindmap-fontsize", fontSize.toString());
//   }, [fontSize]);

//   const handleReset = () => {
//     setMarkdown(defaultMarkdown);
//     localStorage.removeItem("mindmap-markdown");
//   };

//   const handleMouseDown = () => {
//     isDragging.current = true;
//   };

//   const handleMouseMove = (e: MouseEvent) => {
//     if (!isDragging.current || !containerRef.current) return;
//     const totalWidth = containerRef.current.offsetWidth;
//     const newLeftWidth = (e.clientX / totalWidth) * 100;
//     if (newLeftWidth > 10 && newLeftWidth < 90) {
//       setLeftWidth(newLeftWidth);
//     }
//   };

//   const handleMouseUp = () => {
//     isDragging.current = false;
//   };

//   useEffect(() => {
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };
//   }, []);

//   return (
//     <div
//       className={`relative w-full h-screen flex flex-col transition duration-300 ${
//         isLight ? "bg-white text-black" : "bg-gray-900 text-white"
//       }`}
//     >
//       {/* Tooltip */}
//       <div
//         id="mindmap-tooltip"
//         className="absolute z-50 bg-black text-white text-xs rounded px-2 py-1 shadow transition-opacity duration-200 pointer-events-none opacity-0"
//         style={{ maxWidth: "240px", fontFamily: "Times New Roman" }}
//       ></div>

//       <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
//         <div className="flex gap-2">
//           <button
//             onClick={() => setIsLight(!isLight)}
//             className={`px-4 py-2 rounded shadow text-sm ${
//               isLight
//                 ? "bg-gray-800 text-white hover:bg-gray-700"
//                 : "bg-white text-black hover:bg-gray-200"
//             }`}
//           >
//             {isLight ? "Dark Mode" : "Light Mode"}
//           </button>
//           <button
//             onClick={() => setIsEditing(!isEditing)}
//             className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
//           >
//             {isEditing ? "View Mind Map" : "Edit Mind Map"}
//           </button>
//           <button
//             onClick={handleReset}
//             className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
//           >
//             Reset
//           </button>
//         </div>

//         <div className="flex items-center gap-2">
//           <label htmlFor="fontSize" className="text-sm">
//             Mind Map FontSize:
//           </label>
//           <input
//             id="fontSize"
//             type="range"
//             min="10"
//             max="20"
//             value={fontSize}
//             onChange={(e) => setFontSize(parseInt(e.target.value))}
//             className="w-32"
//           />
//         </div>
//       </div>

//       {isEditing ? (
//         <div ref={containerRef} className="flex flex-grow w-full h-full">
//           <div
//             style={{ width: `${leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <textarea
//               className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
//                 isLight
//                   ? "bg-white text-black border-gray-300"
//                   : "bg-gray-800 text-white border-gray-600"
//               }`}
//               style={{ fontFamily: "Times New Roman" }}
//               value={markdown}
//               onChange={(e) => setMarkdown(e.target.value)}
//               spellCheck={false}
//             />
//           </div>
//           <div
//             onMouseDown={handleMouseDown}
//             className={`w-1 cursor-col-resize ${
//               isLight ? "bg-gray-300" : "bg-gray-700"
//             }`}
//           />
//           <div
//             style={{ width: `${100 - leftWidth}%` }}
//             className="h-full p-2 transition-all duration-200 ease-in-out"
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       ) : (
//         <div className="flex-grow p-4">
//           <div
//             className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
//               isLight
//                 ? "bg-white border-gray-300"
//                 : "bg-gray-800 border-gray-600"
//             }`}
//           >
//             <svg ref={svgRef} className="w-full h-full" />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";
import { useEffect, useRef, useState } from "react";
import { Transformer } from "markmap-lib";
import { Markmap } from "markmap-view";

const defaultMarkdown = `# AI Topics
## Supervised
### Regression
### Classification
## Unsupervised
### Clustering
### Dimensionality Reduction`;

const nodeDescriptions: Record<string, string> = {
  Regression:
    "A supervised learning technique that predicts continuous numeric outcomes from input features.",
  Classification:
    "A supervised learning method that assigns inputs to predefined categories or classes.",
  Clustering:
    "An unsupervised learning method for grouping similar items without predefined labels.",
  "Dimensionality Reduction":
    "A technique to reduce input variables in a dataset while preserving key information.",
  Supervised:
    "A machine learning approach that uses labeled data for training a model.",
  Unsupervised:
    "A method where models learn patterns from unlabeled data automatically.",
  "AI Topics":
    "Categories in artificial intelligence such as supervised and unsupervised learning.",
};

export default function MindMapEditor() {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);

  const [isLight, setIsLight] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [leftWidth, setLeftWidth] = useState(50);
  const [fontSize, setFontSize] = useState(() => {
    if (typeof window !== "undefined") {
      const savedSize = localStorage.getItem("mindmap-fontsize");
      return savedSize ? parseInt(savedSize) : 15;
    }
    return 15;
  });

  const [markdown, setMarkdown] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("mindmap-markdown") || defaultMarkdown;
    }
    return defaultMarkdown;
  });

  const wrappedMarkdown = markdown
    .split("\n")
    .map((line) => {
      const match = line.match(/^(\s*#+)\s(.+)/);
      if (match) {
        return `${match[1]} \`${match[2]}\``;
      }
      return line;
    })
    .join("\n");

  const renderMap = () => {
    const { root } = new Transformer().transform(wrappedMarkdown);
    if (svgRef.current) {
      svgRef.current.innerHTML = "";

      const mm = Markmap.create( ... );

      const styleTag = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "style"
      );
      styleTag.textContent = `
        .markmap-node text tspan {
          font-size: ${fontSize}px;
          transition: stroke 0.3s ease;
        }

        .markmap-node code {
          font-family: 'Times New Roman', serif;
          font-size: ${fontSize}px;
          background: #f3f3f3;
          padding: 2px 6px;
          border-radius: 4px;
          transition: border-color 0.3s ease;
        }

        .highlighted text tspan {
          stroke: #ffa500;
          stroke-width: 1.5px;
          paint-order: stroke fill;
        }
      `;
      svgRef.current.appendChild(styleTag);

      const tooltip = document.getElementById("mindmap-tooltip");

      svgRef.current.querySelectorAll(".markmap-node").forEach((node) => {
        const textNode = node.querySelector("text");
        const codeEl = node.querySelector("code");
        const label = codeEl?.textContent || textNode?.textContent?.trim();

        if (!label || !tooltip) return;

        const description = nodeDescriptions[label];
        if (!description) return;

        node.addEventListener("mouseover", () => {
          // highlight all children
          highlightChildren(node as SVGGElement, true);

          tooltip.innerText = description;
          tooltip.style.opacity = "1";
          tooltip.style.transform = "scale(1)";
        });

        // node.addEventListener("mousemove", (e: MouseEvent) => {
        //   tooltip.style.left = `${e.clientX + 12}px`;
        //   tooltip.style.top = `${e.clientY + 12}px`;
        // });
        node.addEventListener("mousemove", (e) => {
          const mouseEvent = e as MouseEvent;
          tooltip.style.left = `${mouseEvent.clientX + 12}px`;
          tooltip.style.top = `${mouseEvent.clientY + 12}px`;
        });

        node.addEventListener("mouseleave", () => {
          highlightChildren(node as SVGGElement, false);
          tooltip.style.opacity = "0";
          tooltip.style.transform = "scale(0.95)";
        });
      });

      function highlightChildren(node: SVGGElement, highlight: boolean) {
        const className = "highlighted";
        const toggle = (n: SVGGElement) => {
          if (highlight) {
            n.classList.add(className);
          } else {
            n.classList.remove(className);
          }
          const childGroup = n.querySelector("g.children");
          if (childGroup) {
            childGroup
              .querySelectorAll<SVGGElement>("g.markmap-node")
              .forEach((child) => toggle(child));
          }
        };
        toggle(node);
      }
    }
  };

  useEffect(() => {
    renderMap();
  }, [wrappedMarkdown, isEditing, fontSize]);

  useEffect(() => {
    localStorage.setItem("mindmap-markdown", markdown);
  }, [markdown]);

  useEffect(() => {
    localStorage.setItem("mindmap-fontsize", fontSize.toString());
  }, [fontSize]);

  const handleReset = () => {
    setMarkdown(defaultMarkdown);
    localStorage.removeItem("mindmap-markdown");
  };

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current || !containerRef.current) return;
    const totalWidth = containerRef.current.offsetWidth;
    const newLeftWidth = (e.clientX / totalWidth) * 100;
    if (newLeftWidth > 10 && newLeftWidth < 90) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div
      className={`relative w-full h-screen flex flex-col transition duration-300 ${
        isLight ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Tooltip */}
      <div
        id="mindmap-tooltip"
        className="absolute z-50 px-3 py-2 rounded-md text-sm transition-all duration-200 ease-out opacity-0 pointer-events-none"
        style={{
          maxWidth: "280px",
          backgroundColor: isLight
            ? "rgba(0, 0, 0, 0.8)"
            : "rgba(255, 255, 255, 0.95)",
          color: isLight ? "white" : "#111",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          boxShadow: isLight
            ? "0 4px 12px rgba(0, 0, 0, 0.15)"
            : "0 4px 12px rgba(255, 255, 255, 0.1)",
          fontFamily: "Georgia, 'Times New Roman', serif",
          border: isLight
            ? "1px solid rgba(255,255,255,0.15)"
            : "1px solid rgba(0,0,0,0.2)",
          transform: "scale(0.95)",
          transformOrigin: "top left",
        }}
      ></div>

      <div className="flex justify-between items-center p-4 gap-4 flex-wrap">
        <div className="flex gap-2">
          <button
            onClick={() => setIsLight(!isLight)}
            className={`px-4 py-2 rounded shadow text-sm ${
              isLight
                ? "bg-gray-800 text-white hover:bg-gray-700"
                : "bg-white text-black hover:bg-gray-200"
            }`}
          >
            {isLight ? "Dark Mode" : "Light Mode"}
          </button>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 rounded shadow text-sm bg-blue-500 text-white hover:bg-blue-600"
          >
            {isEditing ? "View Mind Map" : "Edit Mind Map"}
          </button>
          <button
            onClick={handleReset}
            className="px-4 py-2 rounded shadow text-sm bg-red-500 text-white hover:bg-red-600"
          >
            Reset
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="fontSize" className="text-sm">
            Mind Map FontSize:
          </label>
          <input
            id="fontSize"
            type="range"
            min="10"
            max="20"
            value={fontSize}
            onChange={(e) => setFontSize(parseInt(e.target.value))}
            className="w-32"
          />
        </div>
      </div>

      {isEditing ? (
        <div ref={containerRef} className="flex flex-grow w-full h-full">
          <div
            style={{ width: `${leftWidth}%` }}
            className="h-full p-2 transition-all duration-200 ease-in-out"
          >
            <textarea
              className={`w-full h-full border rounded resize-none text-sm p-4 shadow-md focus:outline-none ${
                isLight
                  ? "bg-white text-black border-gray-300"
                  : "bg-gray-800 text-white border-gray-600"
              }`}
              style={{ fontFamily: "Times New Roman" }}
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              spellCheck={false}
            />
          </div>
          <div
            onMouseDown={handleMouseDown}
            className={`w-1 cursor-col-resize ${
              isLight ? "bg-gray-300" : "bg-gray-700"
            }`}
          />
          <div
            style={{ width: `${100 - leftWidth}%` }}
            className="h-full p-2 transition-all duration-200 ease-in-out"
          >
            <svg ref={svgRef} className="w-full h-full" />
          </div>
        </div>
      ) : (
        <div className="flex-grow p-4">
          <div
            className={`w-full h-full border rounded shadow-md overflow-auto p-4 ${
              isLight
                ? "bg-white border-gray-300"
                : "bg-gray-800 border-gray-600"
            }`}
          >
            <svg ref={svgRef} className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
}
