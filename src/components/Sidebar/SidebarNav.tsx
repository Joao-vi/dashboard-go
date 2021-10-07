import { Stack } from "@chakra-ui/react";
import {
  RiDashboardLine,
  RiContactsLine,
  RiInputMethodLine,
  RiGitMergeLine,
} from "react-icons/ri";

import { NavLink } from "./NavLinkSidebar";
import { SidebarSection } from "./SidebarSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <SidebarSection title="USUÁRIO">
        <NavLink icon={RiDashboardLine} link="/dashboard">
          Dashboard
        </NavLink>
        <NavLink icon={RiContactsLine} link="/users">
          Usuários
        </NavLink>
      </SidebarSection>
      <SidebarSection title="AUTOMAÇÃO">
        <NavLink icon={RiInputMethodLine} link="/forms">
          Formulários
        </NavLink>
        <NavLink icon={RiGitMergeLine} link="/automacao">
          Automação
        </NavLink>
      </SidebarSection>
    </Stack>
  );
}
