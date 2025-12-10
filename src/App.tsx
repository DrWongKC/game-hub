import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useScreenSize } from "./useScreenSize.tsx";

function App() {
  const screenSize = useScreenSize();

  return (
    <Grid
      templateAreas={{
        base: `
        "nav"
        "main"`,
        lg: `
        "nav nav"
        "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <Show
        when={
          screenSize === "lg" || screenSize === "xl" || screenSize === "2xl"
        }
      >
        <GridItem area="aside" bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
