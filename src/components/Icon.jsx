const paths = {
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 1 1 16 0v2" />
      <path d="M4 14h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" />
      <path d="M20 14h-2a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1z" />
      <path d="M17 20a3 3 0 0 1-3 3h-2" />
    </>
  ),
  bug: (
    <>
      <path d="M8 6a4 4 0 0 1 8 0" />
      <rect x="6" y="6" width="12" height="12" rx="6" />
      <path d="M3 11h3M18 11h3M3 17h3.5M17.5 17H21M12 6v12" />
    </>
  ),
  document: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5M9 13h6M9 17h4" />
    </>
  ),
  tools: (
    <>
      <path d="M14.5 5.5a3.5 3.5 0 0 0 4.9 4L21 11l-8 8-2-2 8-8" />
      <path d="M6 13l-2 2a2.8 2.8 0 0 0 4 4l2-2" />
      <path d="M3.5 6.5 6 4l4 4-2.5 2.5z" />
    </>
  ),
  wordpress: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3.5 9h6M14 9h6.5M8.5 9l3.5 10 2.5-7M14 9l3 10 3.2-9" />
    </>
  ),
  escalate: (
    <>
      <path d="M12 19V5" />
      <path d="m6 11 6-6 6 6" />
      <path d="M4 21h16" />
    </>
  ),
  key: (
    <>
      <circle cx="8" cy="12" r="4" />
      <path d="M12 12h9M18 12v3M15 12v2.5" />
    </>
  ),
  check: (
    <>
      <path d="M9 11.5 11.5 14 16 9" />
      <path d="M12 3 5 6v6c0 4.2 2.9 7.9 7 9 4.1-1.1 7-4.8 7-9V6z" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </>
  ),
  phone: (
    <path d="M6.5 3h3l1.5 4-2 1.5a12 12 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2.2 2A16.5 16.5 0 0 1 4 6.2 2 2 0 0 1 6 4z" />
  ),
  pin: (
    <>
      <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10.5V17M7.5 7.3v.1M11.5 17v-3.6a2 2 0 0 1 4 0V17" />
    </>
  ),
  quote: (
    <>
      <path d="M10 6c-3.3 1.2-5.5 4-5.5 7.3V18h6v-6H6.8c0-2 1.3-3.6 3.2-4.3z" />
      <path d="M20.5 6c-3.3 1.2-5.5 4-5.5 7.3V18h6v-6h-3.7c0-2 1.3-3.6 3.2-4.3z" />
    </>
  ),
  arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  cap: (
    <>
      <path d="m12 4 9 4.5-9 4.5-9-4.5z" />
      <path d="M7 11v4.5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5V11" />
    </>
  ),
};

export default function Icon({ name, className = 'h-6 w-6' }) {
  const path = paths[name];
  if (!path) return null;

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {path}
    </svg>
  );
}
