import { ComponentPropsWithoutRef, useMemo } from "react";
import { clsx } from "~/libs";

interface BaseButtonProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
  containerClassName?: string;
  loading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
}

export const BaseButton = (props: BaseButtonProps) => {
  const {
    label,
    containerClassName,
    loading,
    variant: btnType = "primary",
    ...restProps
  } = props;

  const btnStyle = useMemo(() => {
    switch (btnType) {
      case "primary":
        return "bg-blue-500 text-white";
      case "secondary":
        return "bg-white text-gray-600";
      case "tertiary":
        return "bg-red-500 text-white";
      default:
        return "bg-blue-500 text-white";
    }
  }, [btnType]);

  return (
    <div className={containerClassName}>
      <button
        {...restProps}
        className={clsx(
          btnStyle,
          "font-regular rounded-lg px-5 py-3 hover:opacity-80 disabled:opacity-50",
          restProps.className
        )}
        disabled={loading || restProps.disabled}
      >
        {loading ? "Loading..." : label}
      </button>
    </div>
  );
};
