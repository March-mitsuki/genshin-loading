import { getImgWH } from "@/utils";
import { useEffect, useRef, useState } from "react";
import { Flex, Image as ChakraImage, Box, Show } from "@chakra-ui/react";
import { animated, Spring } from "@react-spring/web";

const AnimatedImage = animated(ChakraImage);

export default function Home() {
  const [loadingState, setLoadingState] = useState<"init" | "loading" | "ok">(
    "init"
  );
  const mainBoxRef = useRef<HTMLDivElement>(null);
  const [imgHeight, setImagHeight] = useState(0);
  const [progress, setProgress] = useState(0);

  const handleLoad = async () => {};

  useEffect(() => {
    handleLoad().then(() => setLoadingState("loading"));
    setImagHeight(window.innerHeight / 15);

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
            <ChakraImage
              alt="Loading bar"
              pos="absolute"
              src="/genshin-loading-bar.png"
              h={imgHeight}
              w="auto"
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
                <AnimatedImage
                  alt="Loading bar"
                  pos="absolute"
                  zIndex={100}
                  src="/genshin-loading-bar-gray.png"
                  h={imgHeight}
                  w="auto"
                  style={{ ...props }}
                />
              )}
            </Spring>
          </>
        )}
        {loadingState === "ok" && (
          <>
            <Box w={400} h={400}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 314.09 314.09"
              >
                <defs>
                  <style>{`.cls-1{fill:#666666;}.cls-2{fill:none;}`}</style>
                </defs>
                <g id="Livello_2" data-name="Livello 2">
                  <g id="Livello_10" data-name="Livello 10">
                    <path
                      className="cls-1"
                      d="M154.81,18.06s0,22.28-13,38.9-23.94,26.6-23.94,43.89,12.64,30.92,46.55,44.89S216,180.32,216,199.6s-13.62,45.93-58.71,45.55c-44.53-7-22.75-44.88-10.79-48.87,0,0-34.54-2.95-34.54,21.66s32.55,32.53,51.67,32.53,77.64-11.3,77.64-61.17c0-19.58-7.65-30.59-7.65-30.59s29,11.17,25.6,39.56c-4.33,35.86-56.18,38.36-99.81,79.84,0,0-11.62-13.58-51.47-33.29-22.82-11.28-50.32-20.93-49.55-54.5.64-27.92,30.26-39.26,30.26-39.26s-49.87,51.2,21.61,85.12c0,0-46.21-71.82,44.89-87.45,0,0-49.54-12.63-51.54-55.19,0,0-8.31,23.94-20.28,36.57S41.51,172.48,45.5,206.06s82.38,52.39,113.63,90c0,0,25.27-26.27,50.87-38.57s111.05-51.87,13-126.68c0,0-15-10-16.29-37.58a50.17,50.17,0,0,0-13.3,33.59c0,20.61,14.67,17,16.29,36.21,0,0-28.93-24.58-28.6-43.86s7.65-39.9,7.65-39.9-50.2,22.94-25.27,59.18c0,0-18.29-7.31-14.3-31.92S207.34,81.23,154.81,18.06Z"
                    />
                    <path
                      className="cls-1"
                      d="M169.94,227s27.43-8.56,27.43-30-40.72-59.34-74.07-10c0,0,31.67-15.46,45.64,5S169.94,227,169.94,227Z"
                    />
                    <rect className="cls-2" width="314.09" height="314.09" />
                  </g>
                </g>
              </svg>
            </Box>
            <Box w={400} h={400}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 314.09 314.09"
              >
                <defs>
                  <style>{`.cls-1-2{fill:#f5f5f5;}.cls-2{fill:none;}`}</style>
                </defs>
                <g id="Livello_2" data-name="Livello 2">
                  <g id="Livello_10" data-name="Livello 10">
                    <path
                      className="cls-1-2"
                      d="M154.81,18.06s0,22.28-13,38.9-23.94,26.6-23.94,43.89,12.64,30.92,46.55,44.89S216,180.32,216,199.6s-13.62,45.93-58.71,45.55c-44.53-7-22.75-44.88-10.79-48.87,0,0-34.54-2.95-34.54,21.66s32.55,32.53,51.67,32.53,77.64-11.3,77.64-61.17c0-19.58-7.65-30.59-7.65-30.59s29,11.17,25.6,39.56c-4.33,35.86-56.18,38.36-99.81,79.84,0,0-11.62-13.58-51.47-33.29-22.82-11.28-50.32-20.93-49.55-54.5.64-27.92,30.26-39.26,30.26-39.26s-49.87,51.2,21.61,85.12c0,0-46.21-71.82,44.89-87.45,0,0-49.54-12.63-51.54-55.19,0,0-8.31,23.94-20.28,36.57S41.51,172.48,45.5,206.06s82.38,52.39,113.63,90c0,0,25.27-26.27,50.87-38.57s111.05-51.87,13-126.68c0,0-15-10-16.29-37.58a50.17,50.17,0,0,0-13.3,33.59c0,20.61,14.67,17,16.29,36.21,0,0-28.93-24.58-28.6-43.86s7.65-39.9,7.65-39.9-50.2,22.94-25.27,59.18c0,0-18.29-7.31-14.3-31.92S207.34,81.23,154.81,18.06Z"
                    />
                    <path
                      className="cls-1-2"
                      d="M169.94,227s27.43-8.56,27.43-30-40.72-59.34-74.07-10c0,0,31.67-15.46,45.64,5S169.94,227,169.94,227Z"
                    />
                    <rect className="cls-2" width="314.09" height="314.09" />
                  </g>
                </g>
              </svg>
            </Box>
          </>
        )}
      </Flex>
    </main>
  );
}
