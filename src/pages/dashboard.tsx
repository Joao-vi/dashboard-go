import { Header } from "../components/Header/Header";
import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import { Sidebar } from "../components/Sidebar";
import Chart from "react-apexcharts";

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: ["18-03", "18-03", "18-03", "18-03", "18-03", "18-03", "18-03"],
  },
  type: "datetime",
};
const series = [{ name: "series1", data: [15, 10, 16, 20, 21, 2, 22] }];

export function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth={[200, 420]}>
          <Box
            py="5"
            px={["4", "6"]}
            bg="gray.800"
            borderRadius={8}
            height="max-content"
          >
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box
            py="5"
            px="6"
            bg="gray.800"
            borderRadius={8}
            height="max-content"
          >
            <Text fontSize="lg" mb="4">
              Entradas
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
