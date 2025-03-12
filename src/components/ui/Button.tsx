import { cn } from "@/utils/cn";
import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    variant: "primary" | "secondary" | "outline" | "dark-outline" | "link";
    size?: "sm" | "md" | "lg" | "xl";
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({ variant, size, icon, iconPosition = "right", children, ...props }) => {
    return (
        <button
            className={
                cn(
                    "flex w-max gap-2 justify-center items-center px-12 py-2 rounded-full cursor-pointer font-semibold",
                    variant === "primary" && "bg-primary text-white hover:bg-primary/80 transition-all",
                    variant === "secondary" && "bg-accent text-white hover:bg-accent/80 transition-all",
                    variant === "outline" && "border border-accent text-accent hover:bg-accent/10 transition-all",
                    variant === "dark-outline" && "border border-primary text-primary hover:bg-primary/10 transition-all",
                    variant === "link" && "px-4 text-accent hover:underline transition-all",
                    size === "sm" && "text-sm",
                    size === "md" && "text-md",
                    size === "lg" && "text-lg",
                    size === "xl" && "text-xl",
                )
            }
            {...props}
        >
            {icon && iconPosition === "left" &&
                <span
                    className={
                        cn(
                            "flex items-center justify-center w-4 h-4",
                            variant === "primary" && "text-white",
                            variant === "secondary" && "text-white",
                            variant === "outline" && "text-accent",
                            variant === "link" && "text-accent",
                        )
                    }
                >
                    {icon}
                </span>
            }
            {children}
            {icon && iconPosition === "right" &&
                <span
                    className={
                        cn(
                            "w-4 h-4",
                            variant === "primary" && "text-white",
                            variant === "secondary" && "text-white",
                            variant === "outline" && "text-accent",
                            variant === "link" && "text-accent",
                        )
                    }
                >
                    {icon}
                </span>
            }
        </button>
    )
}