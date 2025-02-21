import MemoryIcon from "@mui/icons-material/Memory";
import { blue, green, orange, purple, red, yellow } from "@mui/material/colors";
import Groups2Icon from "@mui/icons-material/Groups2";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import AddIcon from "@mui/icons-material/Add";
import {
  Circle,
  CheckCircleOutline,
  Receipt,
  TimerOutlined,
  MonetizationOnOutlined,
  Inventory,
  TrendingUpOutlined,
  ReceiptOutlined,
  DescriptionOutlined,
  GroupOutlined,
  BarChartOutlined,
  NoteAltOutlined,
  CheckCircleOutlined,
  AssignmentOutlined,
  PeopleAltOutlined,
  CancelOutlined,
  CalendarTodayOutlined,
  Close,
  AccessTime,
  ErrorOutline,
  Person2Outlined,
  NoteOutlined,
  CalculateOutlined,
} from "@mui/icons-material";
import WarningIcon from "@mui/icons-material/Warning";

export const dashboardCards = [
  {
    title: "Active Projects",
    value: "24",
    percentageChange: "+12%",
    changeColor: "text-green-600",
    icon: ApartmentIcon,
    iconColor: blue[500],
    iconBgColor: "bg-sky-200",
  },
  {
    title: "Total Employees",
    value: "156",
    percentageChange: "+5%",
    changeColor: "text-green-600",
    icon: Groups2Icon,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
  },
  {
    title: "Pending Bills",
    value: "₹45.2L",
    percentageChange: "+18%",
    changeColor: "text-red-500",
    icon: ReceiptLongIcon,
    iconColor: red[500],
    iconBgColor: "bg-red-300",
  },
  {
    title: "Equipment Usage",
    value: "78%",
    percentageChange: "+8%",
    changeColor: "text-green-600",
    icon: MemoryIcon,
    iconColor: purple[500],
    iconBgColor: "bg-purple-300",
  },
];
export const projectTimeline = [
  { name: "Green Valley Complex", progress: "75%" },
  { name: "Metro Station", progress: "45%" },
  { name: "City Mall", progress: "90%" },
];
export const recentActivities = [
  {
    icon: AddIcon,
    color: blue[500],
    bgColor: "bg-sky-200",
    text: "New material order placed",
    time: "2 hours ago",
  },
  {
    icon: CheckCircleOutline,
    color: green[500],
    bgColor: "bg-green-100",
    text: "Site inspection completed",
    time: "5 hours ago",
  },
  {
    icon: WarningIcon,
    color: yellow[900],
    bgColor: "bg-yellow-100",
    text: "Compliance warning issued",
    time: "1 day ago",
  },
];
// Upcoming Tasks Data
export const upcomingTasks = [
  { color: "yellow", task: "Site Meeting - Green Valley", date: "Tomorrow" },
  { color: "red", task: "Material Delivery - Metro Station", date: "23 Aug" },
  { color: "green", task: "Safety Inspection - City Mall", date: "25 Aug" },
];

// Resource Allocation Data
export const resourceAllocations = [
  { resource: "Labor", current: 85, total: 100 },
  { resource: "Equipment", current: 12, total: 15 },
  { resource: "Materials", current: 70, total: 100 },
];
export const projectData = [
  {
    projectName: "Green Valley Complex",
    description: "Residential Project",
    status: "In Progress",
    statusColor: "bg-green-300",
    statusTextColor: "green-800",
    progress: 75,
    startDate: "01 Jun 2023",
    endDate: "31 Dec 2023",
    actions: ["Edit", "View"],
  },
  {
    projectName: "Green Valley Complex",
    description: "Residential Project",
    status: "On Hold",
    statusColor: "bg-amber-300",
    statusTextColor: "amber-900",
    progress: 45,
    startDate: "15 May 2023",
    endDate: "30 Nov 2023",
    actions: ["Edit", "View"],
  },
];
export const employeeData = [
  {
    employee: "John Smith",
    email: "john.smith@example.com",
    department: "Engineering",
    status: "Active",
    project: "Green Valley Complex",
  },
  {
    employee: "Sarah Johnson",
    email: "sarah.johnson@example.com",
    department: "Construction",
    status: "Active",
    project: "Metro Station",
  },
];
export const resourceCards = [
  {
    title: "Today's Attendance",
    data: [
      { label: "Present", value: 45, color: "text-green-700" },
      { label: "Absent", value: 5, color: "text-red-700" },
      { label: "On Leave", value: 3, color: "text-red-700" },
    ],
  },
  {
    title: "Labor Distribution",
    data: [
      { label: "Skilled", value: 65, color: "text-blue-700" },
      { label: "Semi-Skilled", value: 42, color: "text-blue-700" },
      { label: "Unskilled", value: 28, color: "text-blue-700" },
    ],
  },
  {
    title: "Upcoming Leaves",
    data: [
      {
        name: "John Smith",
        dates: "23 Aug - 25 Aug",
        status: "Approved",
        statusColor: "text-amber-800",
        bgColor: "bg-yellow-300",
      },
      {
        name: "Sarah Johnson",
        dates: "28 Aug - 30 Aug",
        status: "Approved",
        statusColor: "text-green-700",
        bgColor: "bg-green-200",
      },
    ],
  },
];

export const bills = [
  {
    billNo: "RA-2023-001",
    project: "Green Valley Complex",
    description: " Foundation Work - Phase 1",
    amount: "₹15,20,000",
    status: "Approved",
    date: "15 Aug 2023",
  },
  {
    billNo: "RA-2023-002",
    project: "Metro Station Electrical Installation",
    description: "Electrical Installation",
    amount: "₹8,45,000",
    status: "Pending",
    date: "18 Aug 2023",
  },
];
export const billingCards = [
  {
    title: "Total Billing",
    value: "₹2.4CR",
    icon: Receipt,
    iconColor: blue[500],
    iconBgColor: "bg-sky-200  p-0.5",
  },
  {
    title: "Total Billing",
    value: "₹2.4CR",
    icon: TimerOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200 p-0.5",
  },
  {
    title: "Approved Bills",
    value: "₹82.6L",
    icon: CheckCircleOutline,
    iconColor: green[500],
    iconBgColor: "bg-green-200  p-0.5",
  },
  {
    title: "Total Paid",
    value: "₹1.12CR",
    icon: MonetizationOnOutlined,
    iconColor: purple[500],
    iconBgColor: "bg-purple-200  p-0.5",
  },
];

export const items = [
  {
    item: "ITM-001",
    name: "Cement(OPC)",
    category: "Raw Materials",
    quantity: "1,200",
    unit: "Bags",
    status: "In Stock",
  },
  {
    item: "ITM-002",
    name: "Steel Bars",
    category: "Raw Materials",
    quantity: "50",
    unit: "Tons",
    status: "Low Stock",
  },
];

export const inventoryCards = [
  {
    title: "Total items",
    value: "1,245",
    icon: Inventory,
    iconColor: blue[500],
    iconBgColor: "bg-sky-200  p-0.5",
  },
  {
    title: "Low Stock Items",
    value: "28",
    icon: WarningIcon,
    iconColor: red[800],
    iconBgColor: "bg-red-200  p-0.5",
  },
  {
    title: "Pending Orders",
    value: "12",
    icon: TimerOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200  p-0.5",
  },
  {
    title: "Value in Stock",
    value: "1,245",
    icon: MonetizationOnOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200  p-0.5",
  },
];
export const machineryCards = [
  {
    title: "Total Machinery",
    value: "24",
    color: `text-green-400 p-1`,
  },
  {
    title: "Active",
    value: "18",
    color: `text-red-600 p-1`,
  },
  {
    title: "Under Maintenance",
    value: "6",
    color: `text-yellow-400 p-1`,
  },
];
export const machinerydata = [
  {
    id: "MCH001",
    name: "Excavator CAT 320",
    status: "Active",
    location: "Site A",
    maintenance: "2024-01-15",
  },
  {
    id: "MCH002",
    name: "Crane XCMG 25T",
    status: "Maintenance",
    location: "Workshop",
    maintenance: "2024-02-01",
  },
];
export const cnocData = [
  {
    id: "COM001",
    type: "Safety Certification",
    description: "Site Safety Compliance Certificate",
    status: "Active",
    duedate: "2024-06-30",
  },
  {
    id: "COM002",
    type: "Environmental Clearance",
    description: "Environmental Impact Assessment",
    status: "Pending",
    duedate: "2024-03-15",
  },
];
export const cnocCards = [
  {
    title: "Total Compliances",
    value: "42",
    color: `text-green-400 p-1`,
  },
  {
    title: "Pending",
    value: "8",
    color: `text-yellow-400 p-1`,
  },
  {
    title: "Expiring Soon",
    value: "5",
    color: `text-red-400 p-1`,
  },
  {
    title: "Active NOCs",
    value: "15",
    color: `text-blue-400 p-1`,
  },
];
export const reportCards = [
  {
    icon: DescriptionOutlined,
    iconColor: blue[500],
    iconBgColor: "bg-blue-200",
    hover: "border hover:border-blue-500",
    title: "Financial Reports",
    description: "Expense, billing and revenue analysis",
  },
  {
    icon: GroupOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
    hover: "border hover:border-green-500",
    title: "Resource Reports",
    description: "Labor, machinery and materials",
  },
  {
    icon: BarChartOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200",
    hover: "border hover:border-yellow-500",
    title: "Progress Reports",
    description: "Project timelines and milestones",
  },
];
export const reportData = [
  {
    name: "Monthly Financial Report",
    type: "Financial",
    date: "2024-02-01",
    status: "Complete",
  },
  {
    name: "Resource Utilization Report",
    type: "Resource",
    date: "2024-01-28",
    status: "Complete",
  },
];
export const billRACards = [
  {
    title: "Total Volume",
    value: "727.6 m³",
    percentageChange: "+12.5%",
    changeColor: "text-green-600",
    icon: BarChartOutlined,
    iconColor: blue[500],
  },
  {
    title: "Total Bills",
    value: "245",
    percentageChange: "+8.3%",
    changeColor: "text-green-600",
    icon: AssignmentOutlined,
    iconColor: purple[500],
  },
  {
    title: "Pending Bills",
    value: "74.8%",
    percentageChange: "5.2%",
    changeColor: "text-green-600",
    icon: CheckCircleOutlined,
    iconColor: green[500],
  },
];
export const pTimeline = [
  { name: "Green Valley Complex", progress: "75%" },
  { name: "Metro Station", progress: "45%" },
  { name: "City Mall", progress: "90%" },
];
export const recentTasks = [
  {
    icon: Circle,
    color: blue[500],

    text: "Foundation Work",
    time: "2 days ago",
  },
  {
    icon: Circle,
    color: green[500],

    text: "Steel Structure",
    time: "1 day ago",
  },
  {
    icon: Circle,
    color: yellow[900],

    text: "Electric Work",
    time: "3 hours ago",
  },
];
export const projectMulti = [
  {
    title: "Active Projects",
    value: "12",
    percentageChange: "+8%",
    changeColor: "text-green-600",
    icon: CheckCircleOutline,
    iconColor: blue[500],
    iconBgColor: "bg-sky-200",
  },
  {
    title: "Total Tasks",
    value: "284",
    percentageChange: "-3%",
    changeColor: "text-green-600",
    icon: AssignmentOutlined,
    iconColor: purple[500],
    iconBgColor: "bg-green-200",
  },
  {
    title: "Resources",
    value: "48",
    percentageChange: "+12%",
    changeColor: "text-red-500",
    icon: GroupOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-red-300",
  },
  {
    title: "Budget Usage",
    value: "75%",
    percentageChange: "On track",
    changeColor: "text-green-600",
    icon: MonetizationOnOutlined,
    iconColor: green[500],
    iconBgColor: "bg-purple-300",
  },
];
export const pOverview = [
  {
    name: "City Center Complex ",
    sub: "Downtown Area",
    status: "On Track",
    statusBg: "bg-green-600 ",
    progress: 45,
    dueDate: "2024-12-24",
    budget: 2400000,
  },
  {
    name: "Harbor Bridge Port District",
    sub: "Port District",
    status: "At Risk",
    statusBg: "bg-yellow-600 ",
    progress: 75,
    dueDate: "2024-03-15",
    budget: 5800000,
  },
  {
    name: "Metro Station ",
    sub: "Central District",
    status: "Planning",
    statusBg: "bg-blue-600 ",
    progress: 15,
    dueDate: "2024-06-30",
    budget: 3200000,
  },
];
export const taskLists = [
  {
    task: "Foundation Work",
    start: "Oct 1, 2023",
    end: "Oct 3, 2023",
    duration: "3 days",
    status: "Completed",
    statusBg: "bg-green-300 ",
  },
  {
    task: "Steel Structure",
    start: "Oct 3, 2023",
    end: "Oct 6, 2023",
    duration: "4 days",
    status: "In Progress",
    statusBg: "bg-blue-300 ",
  },
  {
    task: "Electrical Work",
    start: "Oct 5, 2023",
    end: "Oct 7, 2023",
    duration: "3 days",
    status: "Pending",
    statusBg: "bg-yellow-300 ",
  },
];
export const pRMulti = [
  {
    title: "Total Resources",
    value: "248",
    percentageChange: "+12%",
    changeColor: "text-green-600",
    icon: GroupOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
  },
  {
    title: "Utilization Rate",
    value: "85%",
    percentageChange: "+5%",
    changeColor: "text-blue-600",
    icon: BarChartOutlined,
    iconColor: purple[500],
    iconBgColor: "bg-sky-200",
  },
  {
    title: "Available Equipment",
    value: "156",
    percentageChange: "-3%",
    changeColor: "text-yellow-500",
    icon: NoteAltOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-300",
  },
  {
    title: "Budget Usage",
    value: "75%",
    percentageChange: "8%",
    changeColor: "text-red-600",
    icon: MonetizationOnOutlined,
    iconColor: red[500],
    iconBgColor: "bg-red-300",
  },
];
export const pCosts = [
  {
    title: "Total Budget",
    value: "$2.4M",
    percentageChange: "Total project budget",
    changeColor: "text-blue-600",
    icon: MonetizationOnOutlined,
    iconColor: blue[500],
  },
  {
    title: "Spent to Date",
    value: "$1.8M",
    percentageChange: "75% of total budget",
    changeColor: "text-red-600",
    icon: ReceiptOutlined,
    iconColor: red[500],
  },
  {
    title: "Remaining",
    value: "$600K",
    percentageChange: "25% remaining",
    changeColor: "text-yellow-500",
    icon: TrendingUpOutlined,
    iconColor: green[500],
  },
  {
    title: "Cost Performance Index",
    value: "0.95",
    percentageChange: "Slightly under performing",
    changeColor: "text-red-600",
    icon: BarChartOutlined,
    iconColor: yellow[900],
  },
];
export const pResource = [
  {
    name: "John Smith",
    id: "RSC001",
    type: "Equipment",
    project: "City Center Complex",
    progress: 75,
    status: "Active",
    statusBg: "bg-green-300",
  },
];
export const costCategories = [
  {
    name: "Labor",
    progress: 44,
    budget: "$800K",
    color: "bg-blue-600",
  },
  {
    name: "Materials",
    progress: 33,
    budget: "$600K",
    color: "bg-green-600",
  },
  {
    name: "Equipment",
    progress: 17,
    budget: "$300K",
    color: "bg-yellow-600",
  },

  {
    name: "Other",
    progress: 6,
    budget: "$100K",
    color: "bg-red-600",
  },
];
export const monthlySpending = [
  { name: "Jul", value: 30 },
  { name: "Aug", value: 50 },
  { name: "Sep", value: 70 },
  { name: "Oct", value: 60 },
  { name: "Nov", value: 80 },
  { name: "Dec", value: 65 },
];
export const transactions = [
  {
    date: "Dec 15, 2023",
    description: "Steel Delivery",
    category: "Materials",
    amount: "$45,000",
    status: "Paid",
    statusBg: "bg-green-300",
  },
  {
    date: "Dec 14, 2023",
    description: "Labor Wages",
    category: "Labor",
    amount: "$32,000",
    status: "Paid",
    statusBg: "bg-green-300",
  },
  {
    date: "Dec 13, 2023",
    description: "Equipment Material",
    category: "Equipment",
    amount: "$12,500",
    status: "Pending",
    statusBg: "bg-yellow-300",
  },
];
export const risks = [
  {
    id: "R-001",
    description: "Delay in material delivery",
    category: "Schedule",
    probability: "High",
    impact: "Critical",
    status: "Open",
    statusBg: "bg-yellow-300",
    categoryBg: "bg-red-300",
  },
  {
    id: "R-002",
    description: "Technical specification changes",
    category: "Technical",
    probability: "Medium",
    impact: "High",
    status: "Mitigated",
    statusBg: "bg-green-300",
    categoryBg: "bg-blue-300",
  },
];
export const pReports = [
  {
    type: "Progress Reports",
    rOne: "Weekly Progress Report",
    rTwo: "Monthly Progress Report",
  },
  {
    type: "Financial Reports",
    rOne: "Cost Analysis Report",
    rTwo: "Budget Variance Report",
  },
  {
    type: "Resource Reports",
    rOne: "Resource Utilization Report",
    rTwo: "Equipment Usage Report",
  },
];
export const pRTable = [
  {
    name: "Weekly Progress Report #45",
    date: "2024-02-20",
    type: "Progress",
    status: "Completed",
    typeBg: "bg-blue-300",
    statusBg: "bg-green-300",
  },
  {
    name: "Monthly Cost Analysis",
    date: "	2024-02-19",
    type: "Financial",
    status: "Completed",
    typeBg: "bg-yellow-300",
    statusBg: "bg-green-300",
  },
];
export const pDocs = [
  {
    name: "Project Contract v1.2",
    type: "PDF",
    modified: "2024-02-20",
    size: "2.5 MB",
  },
  {
    name: "Floor Plan Final",
    type: "CAD",
    modified: "2024-02-19",
    size: "5.8 MB",
  },
];
export const billStats = [
  {
    title: "Completed",
    progress: 75,
    color: "bg-green-600",
  },
  {
    title: "In Progress",
    progress: 15,
    color: "bg-blue-600",
  },
  {
    title: "Pending",
    progress: 10,
    color: "bg-orange-600",
  },
];
export const billsActivity = [
  {
    title: "New bill generated for Foundation Work",
    time: "2 hours ago",
    color: green[500],
  },
  {
    title: "Updated measurements for Pillar Construction",
    time: "5 hours ago",
    color: blue[500],
  },
  {
    title: "Bill #BILL-002 marked as pending",
    time: "1 day ago",
    color: orange[500],
  },
];
export const billChart = [
  { name: "Jan" },
  { name: "Feb" },
  { name: "Mar" },
  { name: "Apr" },
  { name: "May" },
  { name: "Jun" },
];
export const laborData = [
  {
    name: "John Smith",
    date: "Jan 2023",
    id: "LAB001",
    number: "455-4445-51",
    skill: "Mason",
    site: "A",
    wage: "$120",
    status: "Present",
    statusBg: "bg-green-300",
    project: "Green Valley Complex",
  },
  {
    name: "Sarah Johnson",
    date: "Mar 2023",
    id: "	LAB002",
    number: "245-1112-45",
    skill: "Carpenter",
    site: "B",
    wage: "$110",
    status: "Absent",
    statusBg: "bg-amber-300",
    project: "Metro Station",
  },
];
export const eamCards = [
  {
    icon: PeopleAltOutlined,
    iconColor: blue[500],
    iconBgColor: "bg-blue-200",
    title: "Total Employees",
    description: "247",
  },
  {
    icon: CheckCircleOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
    title: "Present Today",
    description: "192",
  },
  {
    icon: CancelOutlined,
    iconColor: red[900],
    iconBgColor: "bg-red-200",
    title: "Absent Today",
    description: "52",
  },
  {
    icon: CalendarTodayOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200",
    title: "On Leave",
    description: "12",
  },
];
export const eamrActivities = [
  {
    text: "John Smith checked in",
    time: "Today at 8:30 AM",
  },
  {
    text: "Sarah Johnson checked out",
    time: "Today at 5:00 PM",
  },
  {
    text: "Mike Brown requested leave",
    time: "Today at 2:15 PM",
  },
];
export const todayAttendance = [
  {
    name: "John Smith",
    status: "Present",
    role: "Worker",
    statusBg: "bg-green-300",
    in: "8:30 AM",
    out: "5:00 PM",
    site: "Site A",
  },
  {
    name: "Sarah Johnson",
    status: "Present",
    role: "Supervisor",
    statusBg: "bg-green-300",
    in: "9:00 AM",
    out: "6:00 PM",
    site: "Site B",
  },
];
export const amTable = [
  {
    name: "John Smith",
    id: "EMP001",
    date: "2024-01-20",
    in: "8:30 AM",
    out: "5:30 PM",
    hrs: "9h",
    status: "Present",
    statusBg: "bg-green-300",
    site: "Site A",
  },
  {
    name: "Sarah Johnson",
    id: "EMP002",
    date: "2024-01-20",
    in: "9:00 AM",
    out: "6:00 PM",
    hrs: "9h",
    status: "Late",
    statusBg: "bg-yellow-300",
    site: "Site B",
  },
];
export const employee = [
  {
    name: "John Smith",
    id: "EMP001",
    department: "Construction",
    site: "Site A",
    no: "+1 234 567 890",
    status: "Active",
    statusBg: "bg-green-300",
  },
  {
    name: "Sarah Johnson",
    id: "EMP002",
    department: "Engineering",
    site: "Site B",
    no: "+1 234 567 891",
    status: "On Leave",
    statusBg: "bg-yellow-300",
  },
  {
    name: "Mike Brown",
    id: "EMP003",
    department: "Management",
    site: "Site C",
    no: "+1 234 567 892",
    status: "Active",
    statusBg: "bg-green-300",
  },
];
export const shifts = [
  {
    type: "Morning",
    id: "SH001",
    time: "6:00 AM - 2:00PM",
    break: "30",
    site: " A",
    emp: "45",
    status: "Active",
    statusBg: "bg-green-600",
  },
  {
    type: "Evening",
    id: "SH002",
    time: "2:00 PM - 10:00PM",
    break: "30",
    site: " B",
    emp: "38",
    status: "Active",
    statusBg: "bg-green-600",
  },
  {
    type: "Night",
    id: "SH003",
    time: "10:00 PM - 6:00 AM",
    break: "30",
    site: " C",
    emp: "27",
    status: "Inactive",
    statusBg: "bg-red-600",
  },
];
export const schedule = [
  { day: "Monday", shift: "Morning", workers: 45 },
  { day: "Tuesday", shift: "Morning", workers: 43 },
  { day: "Wednesday", shift: "Morning", workers: 44 },
  { day: "Thursday", shift: "Morning", workers: 45 },
  { day: "Friday", shift: "Morning", workers: 42 },
  { day: "Saturday", shift: "Morning", workers: 30 },
  { day: "Sunday", shift: "Off Day", workers: null },
];
export const aReport = [
  {
    title: "Average Attendance Rate",
    percentile: "92.5%",
    percentBg: "text-green-600",
    description: "+2.5%",
  },
  {
    title: "Late Arrivals",
    percentile: "4.8%",
    percentBg: "text-yellow-600",
    description: "-1.2%",
  },
  {
    title: "Absent Rate",
    percentile: "2.7%",
    percentBg: "text-red-600",
    description: "-0.3%",
  },
  {
    title: "Overtime Hours",
    percentile: "145h",
    percentBg: "text-blue-600",
    description: "+12h",
  },
];
export const detailedReport = [
  {
    date: "2024-01-20",
    in: "195",
    out: "12",
    late: "8",
    leave: "5",
    ot: "23h",
  },
  {
    date: "2024-01-19",
    in: "198",
    out: "10",
    late: "6",
    leave: "4",
    ot: "18h",
  },
  {
    date: "2024-01-18",
    in: "192",
    out: "15",
    late: "7",
    leave: "6",
    ot: "20h",
  },
];
export const cpCards = [
  {
    icon: GroupOutlined,
    iconColor: blue[500],
    iconBgColor: "bg-blue-200",
    hover: "border hover:border-blue-500",
    title: "Total Employees",
    description: "156",
  },
  {
    icon: MonetizationOnOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
    hover: "border hover:border-green-500",
    title: "Monthly Payroll",
    description: "$254,320",
  },
  {
    icon: TimerOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200",
    hover: "border hover:border-yellow-500",
    title: "Pending Approvals",
    description: "23",
  },
  {
    icon: BarChartOutlined,
    iconColor: red[600],
    iconBgColor: "bg-red-200",
    hover: "border hover:border-red-500",
    title: "Active Projects",
    description: "8",
  },
];
export const prActivity = [
  {
    icon: Circle,
    color: green[500],

    text: "Payroll processed for Project A",
    time: "2 hours ago",
  },
  {
    icon: Circle,
    color: blue[500],

    text: "New contractor added",
    time: "5 hours day ago",
  },
  {
    icon: Circle,
    color: yellow[900],

    text: "Timesheet approval pending",
    time: "1 day ago",
  },
];
export const prPayments = [
  {
    title: "Project A Contractors",
    text: "Due in 2 days",
    rate: "$45,250",
  },
  {
    title: "Monthly Staff Salaries",
    text: "Due in 5 days",
    rate: "$125,000",
  },
  {
    title: "Labor Payments",
    text: "Due in 1 week",
    rate: "$32,800",
  },
];
export const lamCards = [
  {
    icon: PeopleAltOutlined,
    iconColor: blue[500],
    iconBgColor: "bg-blue-200",
    title: "Total Laborers",
    description: "245",
  },
  {
    icon: CheckCircleOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
    title: "Present Today",
    description: "192",
  },
  {
    icon: CancelOutlined,
    iconColor: red[900],
    iconBgColor: "bg-red-200",
    title: "Absent Today",
    description: "52",
  },
  {
    icon: MonetizationOnOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200",
    title: "Pending Payments",
    description: "$12,450",
  },
];
export const rcmCards = [
  {
    icon: GroupOutlined,
    iconColor: blue[500],
    iconBgColor: "bg-blue-200",
    hover: "border hover:border-blue-500",
    title: "Active Contracts",
    description: "156",
  },
  {
    icon: MonetizationOnOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
    hover: "border hover:border-green-500",
    title: "Total Payments",
    description: "$254,320",
  },
  {
    icon: NoteAltOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200",
    hover: "border hover:border-yellow-500",
    title: "Active Contracts",
    description: "23",
  },
];
export const rcmTable = [
  {
    contractorName: "Robert Construction LLC",
    mail: "robert@construction.com",
    id: "CON-2023-001",
    speciality: "Electrical",
    project: "Building A",
    wage: "	$75/hr",
    status: "Active",
    statusBg: "bg-green-300",
  },
  {
    contractorName: "Smith Plumbing Co",
    mail: "info@smithplumbing.com",
    id: "CON-2023-002",
    speciality: "Plumbing",
    project: "Complex B",
    wage: "	$85/hr",
    status: "On Hold",
    statusBg: "bg-amber-300",
  },
];
export const rtmCards = [
  {
    icon: AccessTime,
    iconColor: blue[500],
    iconBgColor: "bg-blue-200",
    title: "Total Hours Today",
    description: "846.5 hrs",
  },
  {
    icon: CheckCircleOutlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
    title: "Approved Entries",
    description: "234",
  },
  {
    icon: ErrorOutline,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200",
    title: "Pending Approval",
    description: "18",
  },
  {
    icon: Close,

    iconColor: red[900],
    iconBgColor: "bg-red-200",
    title: "Rejected",
    description: "3",
  },
];
export const rppCards = [
  {
    icon: MonetizationOnOutlined,
    iconColor: blue[500],
    iconBgColor: "bg-blue-200",
    title: "Total Payroll",
    description: "$245,680",
  },
  {
    icon: Person2Outlined,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
    title: "Employees",
    description: "$125,450",
  },
  {
    icon: GroupOutlined,
    iconColor: yellow[900],
    iconBgColor: "bg-yellow-200",
    title: "Contractors",
    description: "$85,230",
  },
  {
    icon: NoteOutlined,
    iconColor: red[900],
    iconBgColor: "bg-red-200",
    title: "Laborers",
    description: "$35,000",
  },
];
export const rraCards = [
  {
    icon: CalculateOutlined,
    iconColor: red[900],
    iconBgColor: "bg-red-200",
    text: "Payroll Summary",
    description: "Monthly payroll summary by employee type and project",
    time: "2 days ago",
  },
  {
    icon: CalculateOutlined,
    iconColor: red[900],
    iconBgColor: "bg-red-200",
    text: "Attendance Report",
    description: "Daily attendance and time tracking analysis",
    time: "Today",
  },
  {
    icon: CalculateOutlined,
    iconColor: red[900],
    iconBgColor: "bg-red-200",
    text: "Cost Analysis",
    description: "Project-wise labor cost breakdown",
    time: "1 week ago",
  },
];
export const rraData = [
  {
    reportName: "October Payroll Summary",
    type: "	Payroll",
    gen: "	Admin User",
    date: "	2023-10-15",
    status: "Complete",
    statusTextColor: "text-green-600",
    statusBg: "bg-green-300",
  },
  {
    reportName: "Weekly Attendance Report",
    type: "Attendance",
    gen: "System",
    date: "2023-10-14",
    status: "Complete",
    statusTextColor: "text-green-600",
    statusBg: "bg-green-300",
  },
];
export const rppData = [
  {
    name: "John Doe",
    id: "EMP001",
    type: "Employee",
    project: "Building A",
    hours: "180",
    rate: "$25",
    ot: "15",
    ded: "$450",
    np: "$4,875",
    status: "Processed",
    statusTextColor: "text-green-600",
    statusBg: "bg-green-300",
  },
  {
    name: "Robert Construction",
    id: "CON002",
    type: "Contractor",
    project: "Complex B",
    hours: "160",
    rate: "$35",
    ot: "0",
    ded: "$0",
    np: "$5,600",
    status: "Pending",
    statusTextColor: "text-amber-600",
    statusBg: "bg-amber-300",
  },
];
export const rtsData = [
  {
    name: "John Doe",
    id: "EMP001",
    type: "Employee",
    project: "Building A",
    hours: "9",
    date: "2023-10-15",
    in: "08:00 AM",
    out: "05:00 PM",
    status: "Approved",
    statusTextColor: "text-green-600",
    statusBg: "bg-green-300",
  },
  {
    name: "Robert Construction",
    id: "CON002",
    type: "Contractor",
    project: "Complex B",
    hours: "9",
    date: "2023-10-15",
    in: "07:30 AM",
    out: "04:30 PM",
    status: "Pending",
    statusTextColor: "text-amber-600",
    statusBg: "bg-amber-300",
  },
];
export const cMulti = [
  {
    title: "Active Projects",
    value: "24",
    percentageChange: "+12%",
    changeColor: "text-green-600",
    icon: ApartmentIcon,
    iconColor: blue[500],
    iconBgColor: "bg-sky-200",
  },
  {
    title: "Total Employees",
    value: "156",
    percentageChange: "+5%",
    changeColor: "text-green-600",
    icon: Groups2Icon,
    iconColor: green[500],
    iconBgColor: "bg-green-200",
  },
  {
    title: "Pending Bills",
    value: "₹45.2L",
    percentageChange: "+18%",
    changeColor: "text-red-500",
    icon: ReceiptLongIcon,
    iconColor: red[500],
    iconBgColor: "bg-red-300",
  },
  {
    title: "Equipment Usage",
    value: "78%",
    percentageChange: "+8%",
    changeColor: "text-green-600",
    icon: MemoryIcon,
    iconColor: purple[500],
    iconBgColor: "bg-purple-300",
  },
];
