import "./App.css";
import {
  Dashboard,
  Inventory,
  Settings,
  Machinery,
  ReportsAnalytics,
  ComplianceNOC,
} from "./Sections";
import { BillReports, Billing, BillsHistory, NewBill } from "./Sections/Bills";
import {
  Resources,
  Labor,
  EAttendance,
  LAttendance,
  Payroll,
} from "./Sections/Resources";
import { Contractors, Suppliers, Clients } from "./Sections/Collaborators";
import {
  Overview,
  Schedule,
  PResources,
  Costs,
  Projects,
  Risks,
  Documents,
  Reports,
} from "./Sections/ProjectTab";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import {
  GeneralSettings,
  CompanyProfile,
  Backup,
  MailSettings,
  RolesPermissions,
  SystemLogs,
  UserManagement,
  Notifications,
} from "./Settings";
import { useTheme } from "./Contexts/ThemeContext";

import SideBar from "./SideBar";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} overflow-hidden min-h-screen`}>
      <BrowserRouter>
        <main className="relative flex h-full overflow-hidden">
          <SideBar className="p-1" />
          <div className="flex-1 bg-gray-100 overflow-y-scroll">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/p-overview" element={<Overview />} />
              <Route path="/p-schedules" element={<Schedule />} />
              <Route path="/p-resources" element={<PResources />} />
              <Route path="/p-costs" element={<Costs />} />
              <Route path="/p-risks" element={<Risks />} />
              <Route path="/p-docs" element={<Documents />} />
              <Route path="/p-reports" element={<Reports />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/r-labor" element={<Labor />} />
              <Route path="/e-attendance" element={<EAttendance />} />
              <Route path="/l-attendance" element={<LAttendance />} />
              <Route path="/r-payroll" element={<Payroll />} />
              <Route path="/billing" element={<Billing />} />
              <Route path="/new-bill" element={<NewBill />} />
              <Route path="/bill-ra" element={<BillReports />} />
              <Route path="/b-history" element={<BillsHistory />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/machinery-management" element={<Machinery />} />
              <Route path="/c-noc" element={<ComplianceNOC />} />
              <Route path="/r-analytics" element={<ReportsAnalytics />} />
              <Route path="/c-contractor" element={<Contractors />} />
              <Route path="/c-supplier" element={<Suppliers />} />
              <Route path="/c-client" element={<Clients />} />
              <Route path="/settings" element={<Settings />}>
                <Route index element={<GeneralSettings />} />
                <Route path="general" element={<GeneralSettings />} />
                <Route path="company-profile" element={<CompanyProfile />} />
                <Route path="backup" element={<Backup />} />
                <Route path="mail-settings" element={<MailSettings />} />
                <Route
                  path="roles-permissions"
                  element={<RolesPermissions />}
                />
                <Route path="logs" element={<SystemLogs />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="user-management" element={<UserManagement />} />
              </Route>
            </Routes>
          </div>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
