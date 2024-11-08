import React, { useCallback, useEffect, useRef } from "react";

const AutoResizeTextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function AutoResizeTextArea(
  { className, ...props }, //
  ref?
) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const tempRef = useRef<HTMLDivElement>(null);

  const setRef = useCallback(
    (el: HTMLTextAreaElement | null) => {
      if (typeof ref === "function") {
        ref(el);
      } else if (ref) {
        ref.current = el;
      }
      textAreaRef.current = el;
    },
    [ref]
  );

  useEffect(() => {
    const textArea = textAreaRef.current;
    const temp = tempRef.current;
    if (!textArea || !temp) return;

    const resize = () => {
      temp.style.height = textArea.style.height;

      textArea.style.height = "auto";
      textArea.style.height = textArea.scrollHeight + "px";

      temp.style.height = "0px";
    };

    textArea.addEventListener("input", resize);

    return () => textArea.removeEventListener("input", resize);
  }, []);

  return (
    <>
      <textarea
        className={`overflow-hidden resize-none ${className}`}
        {...props}
        ref={setRef}
      />
      <div ref={tempRef} />
    </>
  );
});

export default AutoResizeTextArea;
