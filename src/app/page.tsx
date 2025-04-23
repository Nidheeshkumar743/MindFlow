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
    if (!svgRef.current) return;

    svgRef.current.innerHTML = "";

    Markmap.create(
      svgRef.current,
      {
        style: {
          font-family: "Times New Roman",
        },
      },
      root
    );

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
        highlightChildren(node as SVGGElement, true);
        tooltip.innerText = description;
        tooltip.style.opacity = "1";
        tooltip.style.transform = "scale(1)";
      });

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
          font-family: "Georgia, 'Times New Roman', serif",
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
              style={{ font-family: "Times New Roman" }}
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
