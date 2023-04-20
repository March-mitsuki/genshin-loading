import { useEffect, useRef, useState } from "react";
import {
  Flex,
  Image as ChakraImage,
  Box,
  FlexProps,
  Text,
} from "@chakra-ui/react";
import { animated, Spring } from "@react-spring/web";
import {
  CryoIcon,
  PyroIcon,
  DendroIcon,
  AnemoIcon,
  ElectroIcon,
  GeoIcon,
  HydroIcon,
} from "@/components/icons";

const AnimatedImage = animated(ChakraImage);

export default function Home() {
  const [loadingState, setLoadingState] = useState<"init" | "loading" | "ok">(
    "init"
  );
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const [progressBarHeight, setProgressBarHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleLoad = async () => {};

  useEffect(() => {
    handleLoad().then(() => setLoadingState("loading"));
    setProgressBarHeight(window.innerHeight / 15);

    // simulate loading
    setProgress(30);
    setTimeout(() => {
      setProgress(60);
    }, 300);
    setTimeout(() => {
      setProgress(80);
    }, 700);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <main>
      <Flex
        ref={mainBoxRef}
        h="100vh"
        w="100vw"
        align="center"
        justify="center"
      >
        {loadingState === "loading" && (
          <>
            <AnimatedLoadingIconBar
              flexProps={{
                pos: "absolute",
              }}
              color="#f5f5f5"
            />
            <Spring
              from={{
                clipPath: `polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)`,
              }}
              to={{
                clipPath: `polygon(0% 0%, ${progress}% 0%, ${progress}% 100%, 0% 100%)`,
              }}
              config={{ duration: 100 }}
              onRest={() => {
                if (progress === 100) {
                  setLoadingState("ok");
                }
              }}
            >
              {(props) => (
                <AnimatedLoadingIconBar
                  color="#666666"
                  flexProps={{
                    pos: "absolute",
                  }}
                  style={{ ...props }}
                />
              )}
            </Spring>
          </>
        )}
        {loadingState === "ok" && (
          <Box>
            <Text>Content here</Text>
            <LoadingIconBar color="#666666" />
            <LoadingIconBar color="#f5f5f5" />
            <Text color="#f5f5f5">Content here</Text>
          </Box>
        )}
      </Flex>
    </main>
  );
}

type LoadingIconBarProps = {
  color: string;
  size?: number;
  style?: any;
  flexProps?: FlexProps;
};
const LoadingIconBar: React.FC<LoadingIconBarProps> = ({
  color,
  size = 50,
  style,
  flexProps,
}) => {
  return (
    <Flex {...flexProps} style={style}>
      <PyroIcon boxSize={size} color={color} />
      <CryoIcon boxSize={size} color={color} />
      <DendroIcon boxSize={size} color={color} />
      <AnemoIcon boxSize={size} color={color} />
      <ElectroIcon boxSize={size} color={color} />
      <GeoIcon boxSize={size} color={color} />
      <HydroIcon boxSize={size} color={color} />
    </Flex>
  );
};

const AnimatedLoadingIconBar = animated(LoadingIconBar);
