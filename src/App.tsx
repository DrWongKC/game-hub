import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useScreenSize } from "./useScreenSize.tsx";
import NavBar from "./components/NavBar.tsx";

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
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show
        when={
          screenSize === "lg" || screenSize === "xl" || screenSize === "2xl"
        }
      >
        <GridItem area="aside">Aside</GridItem>
      </Show>
      <GridItem area="main">Main</GridItem>
    </Grid>
  );
}

export default App;
