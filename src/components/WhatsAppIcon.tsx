interface WhatsAppIconProps {
  className?: string;
}

export function WhatsAppIcon({ className }: WhatsAppIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M3.6 21l1.1-4.1A8.9 8.9 0 0 1 2.5 12c0-5.2 4.3-9.5 9.5-9.5S21.5 6.8 21.5 12 17.2 21.5 12 21.5a9.5 9.5 0 0 1-4.3-1L3.6 21z" />
      <path d="M9.2 10.2c.2-.3.4-.5.7-.6l.6-.2c.3-.1.5 0 .7.2l.8.9c.2.2.2.5.1.8-.1.2-.3.4-.5.6-.1.1-.2.2-.2.3 0 .1.1.3.4.6.4.4.8.7 1.1.8.3.1.5 0 .7-.2.2-.2.4-.4.7-.5.3-.1.6 0 .8.2l.8.9c.2.2.2.5.1.8-.1.3-.4.6-.7.8-.5.4-1.1.5-1.8.4-.6-.2-1.3-.5-2-1.1-.9-.7-1.5-1.5-1.8-2.3-.2-.6-.3-1.2-.1-1.7.1-.5.4-1 .8-1.3z" />
    </svg>
  );
}
