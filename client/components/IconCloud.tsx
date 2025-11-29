import { Cloud, ICloud } from "react-icon-cloud";

export const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 1,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#0000",
    maxSpeed: 0.04,
    minSpeed: 0.02,
    // dragControl: false,
  },
};

export const renderCustomIcon = (icon: any, theme: string) => {
  const bgHex = theme === "light" ? "#f3f2ef" : "#080510";
  const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
  const minContrastRatio = theme === "dark" ? 2 : 1.2;

  return null;
};

export type IconCloudProps = {
  images?: string[];
};

export function IconCloud({ images }: IconCloudProps) {
  return (
    // @ts-ignore
    <Cloud {...cloudProps}>
      {images &&
        images.map((icon, index) => {
          return (
            <a key={index} href="#" onClick={(e) => e.preventDefault()}>
              <img
                height="42"
                width="42"
                alt="icon"
                src={icon}
              />
            </a>
          );
        })}
    </Cloud>
  );
}
