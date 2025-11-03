import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/css";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-green-600 text-white hover:bg-green-700",
        outline: "border border-gray-300 hover:bg-gray-50",
      },
      size: {
        default: "h-12 px-4",
        sm: "h-8 px-3 text-sm",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export const Button = ({ className, variant, size, ...props }: ButtonProps) => (
  <button
    className={cn(buttonVariants({ variant, size, className }))}
    {...props}
  />
);
