import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./styles/theme";

import { Route, BrowserRouter as Router } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "react-query";

import { LoginPage } from "./pages";
import { Dashboard } from "./pages/dashboard";
import { UserList } from "./pages/Users";
import { CreateUser } from "./pages/Users/create";

import { SidebarDrawerProvider } from "./contexts/SidebarDrawerContext";
import { makeServer } from "./services/mirage";

import { ReactQueryDevtools } from "react-query/devtools";

if (process.env.NODE_ENV === "development") {
  makeServer();
}

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Router>
          <SidebarDrawerProvider>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route exact path="/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/users">
              <UserList />
            </Route>
            <Route exact path="/users/create">
              <CreateUser />
            </Route>
          </SidebarDrawerProvider>
        </Router>
      </ChakraProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
