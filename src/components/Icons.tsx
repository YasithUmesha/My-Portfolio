import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// 1. GitHub
export function GithubIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

// 2. LinkedIn
export function LinkedinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
    </svg>
  );
}

// 3. React
export function ReactIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 115.3 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="57.65" cy="50" rx="10.7" ry="25.5" stroke="#61DAFB" strokeWidth="6" transform="rotate(30 57.65 50)"/>
      <ellipse cx="57.65" cy="50" rx="10.7" ry="25.5" stroke="#61DAFB" strokeWidth="6" transform="rotate(90 57.65 50)"/>
      <ellipse cx="57.65" cy="50" rx="10.7" ry="25.5" stroke="#61DAFB" strokeWidth="6" transform="rotate(150 57.65 50)"/>
      <circle cx="57.65" cy="50" r="8.5" fill="#61DAFB" />
    </svg>
  );
}

// 4. Next.js
export function NextjsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 180 180" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="black" />
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="black" stroke="rgba(255,255,255,0.2)" strokeWidth="4"/>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)" />
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)" />
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white" />
          <stop offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 5. TypeScript
export function TypescriptIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#3178C6" />
      <path d="M66.6 86.8c0 10.6-5.8 16.6-16.7 16.6-4.7 0-9.2-1.2-12.7-3.4l2.8-8.7c2.6 1.8 6 2.8 9.2 2.8 5.7 0 8.6-2.9 8.6-7.8 0-11.8-19.1-8.5-19.1-23.7 0-9.9 6.2-16 16.2-16 4.3 0 8.1.9 11.2 2.7l-2.7 8.5c-2.3-1.4-5.3-2.1-8-2.1-4.7 0-7.8 2.6-7.8 6.9 0 10.7 19 8.1 19 24.2zM107.8 56.1H89.9v46.7H81V56.1H63.1V47.5h44.7v8.6z" fill="#FFFFFF" />
    </svg>
  );
}

// 6. JavaScript
export function JavascriptIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#F7DF1E" />
      <path d="M41.4 102.3c3.4 2 7.7 3.3 12.3 3.3 11.3 0 18.5-5.6 18.5-19.4V48.5h-11.8v37.4c0 7.3-3.2 10.1-8.3 10.1-3.6 0-6.3-1.4-8.1-2.6l-2.6 8.9zm41.3-1.5c4.1 2.4 9.4 3.9 15.3 3.9 12.5 0 20.2-6.2 20.2-17 0-10.3-6.1-15.1-16.8-19.8-6.8-3-9.5-5.6-9.5-9.6 0-3.8 3.1-6.7 8.3-6.7 4.2 0 7.5 1.3 9.7 2.7l3-9.4c-2.9-1.6-7.2-2.7-12.2-2.7-12.1 0-19.4 6.7-19.4 16.7 0 10.2 6.5 15.2 17.5 20 6.6 2.9 8.9 5.8 8.9 9.6 0 4.4-3.7 7.3-9.7 7.3-5.2 0-9.2-1.7-12.2-3.6l-3.1 9.4z" fill="#000000" />
    </svg>
  );
}

// 7. Tailwind CSS
export function TailwindIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M24 10C16 10 12 16 12 22C14.5 19.5 17.5 18.5 21 19C23 19.3 24.5 20.8 26.1 22.4C28.7 25.1 31.8 28 38 28C46 28 50 22 50 16C47.5 18.5 44.5 19.5 41 19C39 18.7 37.5 17.2 35.9 15.6C33.3 12.9 30.2 10 24 10ZM10 24C2 24 -2 30 -2 36C0.5 33.5 3.5 32.5 7 33C9 33.3 10.5 34.8 12.1 36.4C14.7 39.1 17.8 42 24 42C32 42 36 36 36 30C33.5 32.5 30.5 33.5 27 33C25 32.7 23.5 31.2 21.9 29.6C19.3 26.9 16.2 24 10 24Z" fill="#38BDF8" transform="translate(0, -2) scale(0.9)"/>
    </svg>
  );
}

// 8. Node.js
export function NodejsIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M16 3L3.5 10.2V24.6L16 31.8L28.5 24.6V10.2L16 3Z" fill="#339933" />
      <path d="M16 5.8L26 11.5V23.1L16 28.8L6 23.1V11.5L16 5.8Z" fill="#0D1117" />
      <path d="M16 9.5C12.4 9.5 9.5 12.4 9.5 16C9.5 19.6 12.4 22.5 16 22.5C19.6 22.5 22.5 19.6 22.5 16C22.5 12.4 19.6 9.5 16 9.5ZM16 19.8C13.9 19.8 12.2 18.1 12.2 16C12.2 13.9 13.9 12.2 16 12.2C18.1 12.2 19.8 13.9 19.8 16C19.8 18.1 18.1 19.8 16 19.8Z" fill="#68A063"/>
    </svg>
  );
}

// 9. Express.js
export function ExpressIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#181A20" />
      <text x="24" y="80" fontFamily="sans-serif" fontSize="48" fontWeight="800" fill="#FFFFFF">ex</text>
      <circle cx="96" cy="74" r="8" fill="#C8F31D" />
    </svg>
  );
}

// 10. MongoDB
export function MongodbIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15.8 1.5C15.8 1.5 8 11.2 8 19.3C8 25.1 11.8 29.5 15.8 30.5C19.8 29.5 23.6 25.1 23.6 19.3C23.6 11.2 15.8 1.5 15.8 1.5Z" fill="#13AA52" />
      <path d="M15.8 1.5V30.5C19.8 29.5 23.6 25.1 23.6 19.3C23.6 11.2 15.8 1.5 15.8 1.5Z" fill="#116149" />
      <path d="M15.8 26.5C15.8 26.5 15.5 26.4 15.3 26.3C14.7 26 14.2 25.3 14.2 24.2C14.2 21.6 15.8 19.5 15.8 19.5V26.5Z" fill="#FFFFFF" opacity="0.6"/>
    </svg>
  );
}

// 11. PostgreSQL
export function PostgresqlIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#336791" />
      <path d="M64 26C45 26 34 38 34 56C34 76 46 88 64 88C82 88 94 76 94 56C94 38 83 26 64 26Z" stroke="#FFFFFF" strokeWidth="6" fill="#4169E1"/>
      <path d="M50 54C50 62 56 68 64 68C72 68 78 62 78 54" stroke="#FFFFFF" strokeWidth="5" strokeLinecap="round"/>
      <circle cx="52" cy="46" r="4" fill="#FFFFFF"/>
      <circle cx="76" cy="46" r="4" fill="#FFFFFF"/>
      <path d="M64 88V102" stroke="#FFFFFF" strokeWidth="6" strokeLinecap="round"/>
    </svg>
  );
}

// 12. MySQL
export function MysqlIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#00758F" />
      <path d="M38 78C38 64 48 54 62 54C76 54 86 64 86 78H38Z" fill="#F29111" />
      <circle cx="50" cy="62" r="3" fill="#FFFFFF" />
      <circle cx="74" cy="62" r="3" fill="#FFFFFF" />
      <path d="M42 90C42 86 48 84 62 84C76 84 82 86 82 90" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

// 13. HTML5
export function HtmlIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 28L3 3H29L26.5 28L16 31L5.5 28Z" fill="#E44D26" />
      <path d="M16 29L24.5 26.5L26.5 5.5H16V29Z" fill="#F16529" />
      <path d="M16 11.5H10.5L11 16H16V11.5ZM16 20.5V25L20.8 23.7L21.2 19H16V20.5ZM16 11.5V16H21.5L22 11.5H16Z" fill="#FFFFFF" />
    </svg>
  );
}

// 14. CSS3
export function CssIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M5.5 28L3 3H29L26.5 28L16 31L5.5 28Z" fill="#1572B6" />
      <path d="M16 29L24.5 26.5L26.5 5.5H16V29Z" fill="#33A9DC" />
      <path d="M16 11.5H10.5L11 16H16V11.5ZM16 20.5V25L20.8 23.7L21.2 19H16V20.5ZM16 11.5V16H21.5L22 11.5H16Z" fill="#FFFFFF" />
    </svg>
  );
}

// 15. Git
export function GitIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M125.5 57.5L70.5 2.5C67.2 -0.8 61.8 -0.8 58.5 2.5L2.5 58.5C-0.8 61.8 -0.8 67.2 2.5 70.5L57.5 125.5C60.8 128.8 66.2 128.8 69.5 125.5L125.5 69.5C128.8 66.2 128.8 60.8 125.5 57.5Z" fill="#F05032" />
      <circle cx="88" cy="40" r="12" fill="#FFFFFF" />
      <circle cx="40" cy="88" r="12" fill="#FFFFFF" />
      <circle cx="64" cy="64" r="12" fill="#FFFFFF" />
      <path d="M40 88L88 40" stroke="#FFFFFF" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}

// 16. VS Code
export function VscodeIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#0066B8" />
      <path d="M96 14L32 64L96 114V14Z" fill="#007ACC" />
      <path d="M96 14L32 64L20 54L76 10L96 14Z" fill="#1F9CF0" />
      <path d="M96 114L32 64L20 74L76 118L96 114Z" fill="#0065A9" />
      <path d="M96 14L112 26V102L96 114V14Z" fill="#005B9E" />
    </svg>
  );
}

// 17. Postman
export function PostmanIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg viewBox="0 0 128 128" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect width="128" height="128" rx="20" fill="#FF6C37" />
      <circle cx="64" cy="64" r="32" fill="#FFFFFF" />
      <path d="M46 64C46 54 54 46 64 46C74 46 82 54 82 64C82 74 74 82 64 82" stroke="#FF6C37" strokeWidth="6" strokeLinecap="round" />
      <circle cx="64" cy="64" r="8" fill="#FF6C37" />
    </svg>
  );
}

// 18. Dynamic Logo Resolver for Skills
export function TechLogo({ name, className = "w-5 h-5" }: { name: string; className?: string }) {
  const normalized = name.toLowerCase().trim();

  if (normalized.includes("react")) return <ReactIcon className={className} />;
  if (normalized.includes("next")) return <NextjsIcon className={className} />;
  if (normalized.includes("typescript") || normalized === "ts") return <TypescriptIcon className={className} />;
  if (normalized.includes("javascript") || normalized === "js") return <JavascriptIcon className={className} />;
  if (normalized.includes("tailwind")) return <TailwindIcon className={className} />;
  if (normalized.includes("node")) return <NodejsIcon className={className} />;
  if (normalized.includes("express")) return <ExpressIcon className={className} />;
  if (normalized.includes("mongo")) return <MongodbIcon className={className} />;
  if (normalized.includes("postgres")) return <PostgresqlIcon className={className} />;
  if (normalized.includes("mysql") || normalized.includes("sql")) return <MysqlIcon className={className} />;
  if (normalized.includes("html")) return <HtmlIcon className={className} />;
  if (normalized.includes("css")) return <CssIcon className={className} />;
  if (normalized.includes("github")) return <GithubIcon className={className} />;
  if (normalized === "git" || normalized.includes("git ")) return <GitIcon className={className} />;
  if (normalized.includes("code") || normalized.includes("vs code")) return <VscodeIcon className={className} />;
  if (normalized.includes("postman")) return <PostmanIcon className={className} />;
  
  // Generic Fallback SVG
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  );
}
