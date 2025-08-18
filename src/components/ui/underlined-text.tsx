import { cn } from "@/lib/utils";

export function UnderlinedText({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={cn("text-primary font-cursive relative", className)}>
            {children}
            <svg
                width="100%"
                height="20"
                viewBox="0 0 160 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-2 left-0"
                aria-hidden="true"
            >
                <path
                    d="M1.08276 16.1423C52.0828 4.14233 134.083 -4.85767 158.583 11.1423"
                    stroke="hsl(var(--primary))"
                    strokeWidth="4"
                    strokeLinecap="round"
                />
            </svg>
        </span>
    );
}
