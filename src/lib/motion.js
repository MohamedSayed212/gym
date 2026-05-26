"use client";

import { createElement, forwardRef, useEffect, useState } from "react";

function buildTransform(styleObject = {}) {
  const transforms = [];

  if (typeof styleObject.x === "number") {
    transforms.push(`translateX(${styleObject.x}px)`);
  }

  if (typeof styleObject.y === "number") {
    transforms.push(`translateY(${styleObject.y}px)`);
  }

  if (typeof styleObject.scale === "number") {
    transforms.push(`scale(${styleObject.scale})`);
  }

  return transforms.join(" ");
}

function createMotionComponent(tagName) {
  return forwardRef(function MotionComponent(
    {
      animate = {},
      children,
      className,
      initial = {},
      onMouseEnter,
      onMouseLeave,
      style,
      transition = {},
      whileHover = {},
      ...props
    },
    ref,
  ) {
    const [ready, setReady] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
      const frame = window.requestAnimationFrame(() => setReady(true));

      return () => window.cancelAnimationFrame(frame);
    }, []);

    const baseState = ready ? animate : initial;
    const mergedState = hovered ? { ...baseState, ...whileHover } : baseState;
    const duration = transition.duration ?? 0.4;
    const transform = buildTransform(mergedState);

    return createElement(
      tagName,
      {
        ref,
        className,
        style: {
          ...style,
          opacity: mergedState.opacity,
          transform: transform || style?.transform,
          transition: `opacity ${duration}s ease, transform ${duration}s ease`,
        },
        onMouseEnter: (event) => {
          setHovered(true);
          onMouseEnter?.(event);
        },
        onMouseLeave: (event) => {
          setHovered(false);
          onMouseLeave?.(event);
        },
        ...props,
      },
      children,
    );
  });
}

export const motion = {
  article: createMotionComponent("article"),
  div: createMotionComponent("div"),
};
