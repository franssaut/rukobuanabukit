import React, { useState, useEffect, useRef } from 'react';
import { PROPERTY_INFO } from '../data/propertyData';

function CounterItem({ metric }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!metric.number) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = metric.number;
          const duration = 1200;
          const stepTime = Math.max(Math.floor(duration / end), 20);

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= end) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [metric.number, hasAnimated]);

  const getColorClasses = (color) => {
    switch (color) {
      case 'secondary':
        return 'text-secondary group-hover:bg-secondary-fixed';
      case 'primary':
        return 'text-primary group-hover:bg-primary-fixed';
      case 'tertiary':
        return 'text-tertiary group-hover:bg-tertiary-fixed';
      case 'error':
        return 'text-error group-hover:bg-error-container';
      default:
        return 'text-primary group-hover:bg-primary-fixed';
    }
  };

  return (
    <div
      ref={elementRef}
      className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm space-y-space-sm interactive-card group border border-outline-variant/20"
    >
      <div
        className={`w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center group-hover:scale-110 transition-all ${getColorClasses(
          metric.color
        )}`}
      >
        <span className="material-symbols-outlined text-[28px]">{metric.icon}</span>
      </div>

      <div>
        <span
          className={`font-label-sm text-label-sm uppercase tracking-wider font-bold ${
            metric.color === 'secondary'
              ? 'text-secondary'
              : metric.color === 'primary'
              ? 'text-primary'
              : metric.color === 'tertiary'
              ? 'text-tertiary'
              : 'text-error'
          }`}
        >
          {metric.title}
        </span>
        
        <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mt-0.5">
          {metric.number ? (
            <span>
              {metric.prefix}
              {hasAnimated ? count : metric.number}
              {metric.suffix}
            </span>
          ) : (
            metric.customText
          )}
        </h3>
      </div>

      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
        {metric.desc}
      </p>
    </div>
  );
}

export default function MetricsSection() {
  return (
    <section className="w-full py-space-xl bg-surface-container-low border-y border-outline-variant/30">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile lg:px-gutter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {PROPERTY_INFO.metrics.map((metric) => (
            <CounterItem key={metric.id} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
