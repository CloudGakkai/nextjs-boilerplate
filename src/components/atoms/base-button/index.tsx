import { useMemo } from "react";

import { clsx } from "~/libs";

import { LoadingAnimation } from "~/assets/svg";

import type { ComponentPropsWithoutRef } from "react";

interface BaseButtonProps extends ComponentPropsWithoutRef<"button"> {
  label: string;
  containerClassName?: string;
  loading?: boolean;
  variant?: "primary" | "secondary" | "tertiary";
  testId?: string;
}

export const BaseButton = (props: BaseButtonProps) => {
  const {
    label,
    containerClassName,
    loading,
    variant: btnType = "primary",
    testId,
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
    }
  }, [btnType]);

  const loadingStyle = useMemo(() => {
    switch (btnType) {
      case "primary":
        return "text-white fill-white";
      case "secondary":
        return "text-gray-600 fill-gray-600";
      case "tertiary":
        return "text-white fill-white";
    }
  }, [btnType]);

  return (
    <div className={containerClassName}>
      <button
        {...restProps}
        data-testid={testId}
        className={clsx(
          btnStyle,
          "font-regular rounded-lg px-5 py-3 hover:opacity-80 disabled:opacity-50",
          restProps.className,
        )}
        disabled={loading || restProps.disabled}
      >
        {loading ? (
          <LoadingAnimation
            className={clsx(
              "inline w-5 h-5 text-opacity-40 animate-spin",
              loadingStyle,
            )}
          />
        ) : (
          label
        )}
      </button>
    </div>
  );
};
