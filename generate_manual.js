const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = '/mnt/c/Users/Public/Downloads/fullstack/manual';

const pages = [
  {
    title: 'Login',
    route: '/login',
    file: '01-login.png',
    overview: 'Use this screen to authenticate and enter the HRMS workspace.',
    useCases: [
      'Enter email/username and password to sign in.',
      'Verify credential errors before retrying login.',
      'Access the system landing dashboard after successful authentication.'
    ],
    tips: [
      'Use a valid org account with the right role assignment.',
      'If sign-in fails repeatedly, confirm password case sensitivity.',
      'Refresh once if the session state looks stale after logout/login.'
    ]
  },
  {
    title: 'Dashboard (Main)',
    route: '/dashboard',
    file: '03-dashboard.png',
    overview: 'This is the organization-level dashboard with top metrics and quick status widgets.',
    useCases: [
      'Review total/active/inactive employee cards.',
      'Track attendance summary and clock-in/out panels.',
      'Open linked modules from sidebar for deeper actions.'
    ],
    tips: [
      'Start here if you need a quick daily health check.',
      'Use the header employee search for quick navigation.',
      'Revisit after data updates to confirm counts changed.'
    ]
  },
  {
    title: 'Dashboard (Self)',
    route: '/dashboard/self',
    file: '04-dashboard-self.png',
    overview: 'Personal dashboard focused on your own profile, leave, and attendance summary.',
    useCases: [
      'Check your attendance and leave counters.',
      'Review personal profile/contact cards.',
      'Start personal actions like applying leave.'
    ],
    tips: [
      'Use this page as your daily personal snapshot.',
      'Location permission prompts affect attendance widgets.',
      'If values look stale, refresh once and re-check cards.'
    ]
  },
  {
    title: 'User Management',
    route: '/user-management',
    file: '05-user-management.png',
    overview: 'Manage system users, account status, and access-related actions.',
    useCases: [
      'Create new users from the top-right action.',
      'Edit, assign permissions, or delete existing users.',
      'Filter and search users by role, status, and org.'
    ],
    tips: [
      'Use search and filters before editing large user lists.',
      'Check status badges before making account changes.',
      'Avoid deleting protected/admin-critical accounts.'
    ]
  },
  {
    title: 'Role Management',
    route: '/role-management',
    file: '06-role-management.png',
    overview: 'Configure role definitions and review which users are mapped to each role.',
    useCases: [
      'Create new custom roles.',
      'Review system vs custom role types.',
      'Inspect per-role user counts before access updates.'
    ],
    tips: [
      'Use role search when role count grows.',
      'Keep naming conventions consistent for custom roles.',
      'Review user impact before editing production roles.'
    ]
  },
  {
    title: 'Attendance Management (Default)',
    route: '/attendance-management',
    file: '07-attendance-management.png',
    overview: 'Default attendance landing page (opens the list view in current UI).',
    useCases: [
      'Create or upload attendance records.',
      'Filter records by status, user, and date range.',
      'Review daily clock-in/out details in tabular view.'
    ],
    tips: [
      'Upload in batch for backfilled attendance data.',
      'Set date range first to reduce table noise.',
      'Use row actions for quick corrections.'
    ]
  },
  {
    title: 'Attendance Details',
    route: '/attendance-management/details',
    file: '08-attendance-management-details.png',
    overview: 'Detailed attendance analytics page with totals, lateness, and timeline actions.',
    useCases: [
      'Monitor present/absent/late counters.',
      'Inspect per-user clock-in/out and day status.',
      'Open location timeline for attendance events.'
    ],
    tips: [
      'Use month/year filters for focused review.',
      'Export results when sharing with HR/payroll teams.',
      'Cross-check late/half-day rows before approvals.'
    ]
  },
  {
    title: 'Attendance List',
    route: '/attendance-management/list',
    file: '09-attendance-management-list.png',
    overview: 'Primary attendance table for operational day-to-day corrections and tracking.',
    useCases: [
      'Browse all attendance entries with status columns.',
      'Filter by date range and attendance type.',
      'Edit or delete incorrect rows from action controls.'
    ],
    tips: [
      'Use the status chips and date filters together.',
      'Scan late entries before end-of-day lock.',
      'Review IP columns for clock-in anomalies.'
    ]
  },
  {
    title: 'Attendance Summary',
    route: '/attendance-management/summary',
    file: '10-attendance-management-summary.png',
    overview: 'Calendar-style summary grid of attendance markers by employee and date.',
    useCases: [
      'Review attendance pattern across a month.',
      'Track present/absent/leave/holiday distributions.',
      'Export summary for management reporting.'
    ],
    tips: [
      'Set year and month before analysis.',
      'Use this for trend review, not row-level edits.',
      'Compare totals column to catch outliers quickly.'
    ]
  },
  {
    title: 'Leave Management (Default)',
    route: '/leave-management',
    file: '11-leave-management.png',
    overview: 'Default leave module entry (opens leave list in current UI).',
    useCases: [
      'Create new leave requests.',
      'Review leave requests by status tabs.',
      'Filter by leave type and employee.'
    ],
    tips: [
      'Use Pending tab for approval workload first.',
      'Validate leave type before approval/rejection.',
      'Keep user filter scoped for faster review.'
    ]
  },
  {
    title: 'Leaves',
    route: '/leave-management/leaves',
    file: '12-leave-management-leaves.png',
    overview: 'Detailed leave request table including status and action controls.',
    useCases: [
      'Approve or reject pending leave requests.',
      'Inspect leave duration and half-day flags.',
      'Track user-wise leave history.'
    ],
    tips: [
      'Sort by start/end date during monthly closing.',
      'Use leave-type filter to audit policy compliance.',
      'Confirm manager/admin actions before finalizing status.'
    ]
  },
  {
    title: 'Unpaid Leaves',
    route: '/leave-management/unpaid-leaves',
    file: '13-leave-management-unpaid-leaves.png',
    overview: 'Monthly unpaid leave ledger grouped by user and month.',
    useCases: [
      'Track unpaid leave month-by-month.',
      'Check details for loss-of-pay impact.',
      'Validate unpaid leave count before payroll sync.'
    ],
    tips: [
      'Use year and user selectors to narrow data.',
      'Review zero-value months for consistency.',
      'Coordinate with payroll when unpaid leave changes.'
    ]
  },
  {
    title: 'Leave Types',
    route: '/leave-management/leave_types',
    file: '14-leave-management-leave-types.png',
    overview: 'Master configuration for leave policies, limits, and paid/unpaid flags.',
    useCases: [
      'Create and edit leave type definitions.',
      'Set monthly caps and attendance conditions.',
      'Control paid vs unpaid behavior per leave type.'
    ],
    tips: [
      'Update policy values before leave cycle starts.',
      'Avoid frequent renaming to prevent confusion.',
      'Validate paid flag with HR policy docs.'
    ]
  },
  {
    title: 'Remaining Leaves',
    route: '/leave-management/remaining-leaves',
    file: '15-leave-management-remaining-leaves.png',
    overview: 'Balance view showing allocated, used, pending, and available leaves.',
    useCases: [
      'Check employee leave balances quickly.',
      'Audit leave allocation against usage.',
      'Identify low-balance employees for planning.'
    ],
    tips: [
      'Use year filter for annual reconciliation.',
      'Review pending column before final balance reporting.',
      'Cross-check with approved leaves during payroll cutoffs.'
    ]
  },
  {
    title: 'Employee Profile',
    route: '/profile',
    file: '16-profile.png',
    overview: 'Personal profile page with employee identity and org details.',
    useCases: [
      'Review employee ID, department, and reporting structure.',
      'Check joining date, work email, and location fields.',
      'Access profile-level actions such as password change.'
    ],
    tips: [
      'Keep profile data updated for HR accuracy.',
      'Use this page to verify onboarding information.',
      'Report missing department/reporting info to admin.'
    ]
  },
  {
    title: 'Holidays',
    route: '/holidays',
    file: '17-holidays.png',
    overview: 'Holiday calendar management for company-wide non-working dates.',
    useCases: [
      'Create and maintain holiday entries.',
      'Review dates by year and location.',
      'Export or share holiday schedule with teams.'
    ],
    tips: [
      'Publish annual holidays before fiscal start.',
      'Avoid duplicate holiday records across locations.',
      'Verify timezone/location applicability when adding dates.'
    ]
  },
  {
    title: 'Company Policies',
    route: '/company-policies',
    file: '18-company-policies.png',
    overview: 'Policy registry where HR/admin teams manage policy documents and visibility.',
    useCases: [
      'Create and edit policy records.',
      'Filter policies by location or title.',
      'Track active policy status and rule metadata.'
    ],
    tips: [
      'Use clear policy naming for easier search.',
      'Review state/country mapping for each policy.',
      'Keep only current policies in active status.'
    ]
  },
  {
    title: 'Expenses (Default)',
    route: '/expenses',
    file: '19-expenses.png',
    overview: 'Default expense landing page (claims table in current UI).',
    useCases: [
      'Create new expense claims.',
      'Filter expense list by status/category/date.',
      'Review claim action icons per row.'
    ],
    tips: [
      'Use date range filters during monthly close.',
      'Validate category before approving reimbursement path.',
      'Check status chips for pending follow-ups.'
    ]
  },
  {
    title: 'Expense Categories',
    route: '/expenses/categories',
    file: '20-expenses-categories.png',
    overview: 'Configuration page for expense category rules and policy linkage.',
    useCases: [
      'Create/edit category definitions.',
      'Map categories to policy and GL code.',
      'Enable/disable categories by operational needs.'
    ],
    tips: [
      'Keep GL codes validated with finance team.',
      'Use status filter to review inactive categories.',
      'Document category usage notes in descriptions.'
    ]
  },
  {
    title: 'Expense Claims',
    route: '/expenses/claims',
    file: '21-expenses-claims.png',
    overview: 'Claims workflow page for submitted expense requests and their statuses.',
    useCases: [
      'Inspect claim details and attached actions.',
      'Track reimbursement status per employee.',
      'Filter claims for review and approval queues.'
    ],
    tips: [
      'Prioritize unresolved claims first.',
      'Use user filter to validate repeated claims.',
      'Cross-check category vs claimed amount quickly.'
    ]
  },
  {
    title: 'Expense Reimbursements',
    route: '/expenses/reimbursements',
    file: '22-expenses-reimbursements.png',
    overview: 'Payment-side view for reimbursement processing and reference tracking.',
    useCases: [
      'Track reimbursement totals and monthly breakdown.',
      'Review payment method/date/reference for each payout.',
      'Search reimbursements by employee or expense ID.'
    ],
    tips: [
      'Use payment reference for finance reconciliation.',
      'Filter by month when matching bank transfers.',
      'Verify approver and amount before marking complete.'
    ]
  },
  {
    title: 'Asset Management (Default)',
    route: '/asset-management',
    file: '23-asset-management.png',
    overview: 'Default asset module route (currently opens assets list view).',
    useCases: [
      'Browse active assets and assignment state.',
      'Filter by vendor location and assignee.',
      'Create new asset records from the top action.'
    ],
    tips: [
      'Keep serial numbers unique and searchable.',
      'Use status tabs to separate working/non-working assets.',
      'Review assignment before issuing returns.'
    ]
  },
  {
    title: 'Asset Types',
    route: '/asset-management/asset-types',
    file: '24-asset-management-asset-types.png',
    overview: 'Master list for asset categories and type-level controls.',
    useCases: [
      'Create and maintain asset type records.',
      'Search types by name for quick edits.',
      'Use row actions to view/update/remove types.'
    ],
    tips: [
      'Normalize naming (Laptop, Monitor, etc.) to avoid duplicates.',
      'Review type list before onboarding new hardware classes.',
      'Archive unused types carefully to preserve history.'
    ]
  },
  {
    title: 'My Assets',
    route: '/asset-management/self/assets',
    file: '25-asset-management-self-assets.png',
    overview: 'Self-service asset portal showing available/requested assets.',
    useCases: [
      'Browse available assets to request.',
      'Review request status in “My Requests”.',
      'Filter catalog by asset type/availability.'
    ],
    tips: [
      'Use search before raising duplicate requests.',
      'Track request status before contacting admin.',
      'Confirm location and serial details when requesting.'
    ]
  },
  {
    title: 'Assets',
    route: '/asset-management/assets',
    file: '26-asset-management-assets.png',
    overview: 'Operational asset inventory with assignment and lifecycle actions.',
    useCases: [
      'Manage asset records and ownership mapping.',
      'Reassign, update, or retire assets from row actions.',
      'Filter by working state and user assignment.'
    ],
    tips: [
      'Audit assigned-to column regularly.',
      'Use search for serial-based troubleshooting.',
      'Retire non-working assets with clear status updates.'
    ]
  },
  {
    title: 'Shifts (Legacy Route)',
    route: '/shifts',
    file: '27-shifts.png',
    overview: 'Shift master page for defining shift time rules and clock windows.',
    useCases: [
      'Create and edit shift templates.',
      'Configure late mark and early clock-in limits.',
      'Review employee count per shift.'
    ],
    tips: [
      'Confirm timezone/location implications for each shift.',
      'Keep shift names unique and descriptive.',
      'Review self-clocking flag before publishing changes.'
    ]
  },
  {
    title: 'Human Resources (Default)',
    route: '/human-resources',
    file: '28-human-resources.png',
    overview: 'Default HR module landing (currently opens staff list).',
    useCases: [
      'Access staff records with department/designation filters.',
      'Use quick actions for view/edit/delete.',
      'Navigate to HR sub-modules from sidebar.'
    ],
    tips: [
      'Start with org filter before deep HR operations.',
      'Use status tabs for active/inactive cleanup.',
      'Leverage top actions for adding new staff.'
    ]
  },
  {
    title: 'HR Shifts',
    route: '/human-resources/shifts',
    file: '29-human-resources-shifts.png',
    overview: 'HR shift administration view tied to human-resources module.',
    useCases: [
      'Manage shift definitions in HR context.',
      'Search shift names and export lists.',
      'Control self-clocking options per shift.'
    ],
    tips: [
      'Keep HR shifts aligned with attendance policy.',
      'Validate total employee count after shift edits.',
      'Export before major structure changes for backup.'
    ]
  },
  {
    title: 'Designations',
    route: '/human-resources/designations',
    file: '30-human-resources-designations.png',
    overview: 'Designation master table used across employee profiles and approvals.',
    useCases: [
      'Create and maintain designation entries.',
      'Track employee count mapped to each designation.',
      'Edit/remove outdated designations.'
    ],
    tips: [
      'Avoid duplicate manager-level titles.',
      'Check employee count before deleting designations.',
      'Use designation naming standards organization-wide.'
    ]
  },
  {
    title: 'Departments',
    route: '/human-resources/departments',
    file: '31-human-resources-departments.png',
    overview: 'Department master setup for HR hierarchy and staff grouping.',
    useCases: [
      'Add or edit department records.',
      'Review total employees per department.',
      'Search and sort departments for governance.'
    ],
    tips: [
      'Map each employee to a single owning department.',
      'Keep department names stable for reports.',
      'Run cleanup on unused departments periodically.'
    ]
  },
  {
    title: 'Staff',
    route: '/human-resources/staffs',
    file: '32-human-resources-staffs.png',
    overview: 'Detailed staff directory with org, designation, and status controls.',
    useCases: [
      'Filter staff by department/designation/location.',
      'Review status markers like active/terminated.',
      'Use row actions for detailed staff operations.'
    ],
    tips: [
      'Use tabs (All/Active/Inactive) to segment reviews.',
      'Verify designation before changing staff status.',
      'Export when preparing HR monthly reports.'
    ]
  },
  {
    title: 'Salary Component Templates',
    route: '/human-resources/salary-templates',
    file: '33-human-resources-salary-templates.png',
    overview: 'Template catalog for earnings/deductions and component calculations.',
    useCases: [
      'Create salary component templates.',
      'Define calculation method and default values.',
      'Track template usage before edits or removals.'
    ],
    tips: [
      'Validate percentages against payroll policy.',
      'Separate earnings and deductions clearly.',
      'Review usage count before deleting a component.'
    ]
  },
  {
    title: 'Salary Groups',
    route: '/human-resources/salary-groups',
    file: '34-human-resources-salary-groups.png',
    overview: 'Group-level compensation structures composed of salary templates.',
    useCases: [
      'Create salary groups for positions/levels.',
      'Attach component templates to each group.',
      'Filter groups by status for maintenance.'
    ],
    tips: [
      'Use naming by level (Entry/Mid/Senior) for clarity.',
      'Activate only finalized salary structures.',
      'Audit template count before applying group to staff.'
    ]
  },
  {
    title: 'Agreements',
    route: '/human-resources/agreements',
    file: '35-human-resources-agreements.png',
    overview: 'Agreement template hub for HR documents and employee agreement records.',
    useCases: [
      'Create and manage agreement templates.',
      'Switch between template and employee agreement tabs.',
      'Search existing templates before creating new ones.'
    ],
    tips: [
      'Version agreement templates when policy changes.',
      'Use clear titles to avoid duplicate templates.',
      'Keep legal-approved templates marked and traceable.'
    ]
  },
  {
    title: 'Locations',
    route: '/locations',
    file: '36-locations.png',
    overview: 'Work location registry used across attendance, assets, and HR records.',
    useCases: [
      'Add and edit location records.',
      'Classify locations by type (office/vendor).',
      'Search locations for mapping and cleanup.'
    ],
    tips: [
      'Use consistent location naming with city/site info.',
      'Validate address completeness for office locations.',
      'Retire obsolete sites to reduce operational noise.'
    ]
  },
  {
    title: 'Customer Payment',
    route: '/customer_payment',
    file: '37-customer-payment.png',
    overview: 'Customer payment tracking page with payment status and receipt actions.',
    useCases: [
      'Record new customer payments.',
      'Filter by status, date, method, and recorder.',
      'Review receipts and sync state per transaction.'
    ],
    tips: [
      'Use date filters during daily cash reconciliation.',
      'Check sync status before closing accounting cycle.',
      'Attach or verify receipt links for audit readiness.'
    ]
  },
  {
    title: 'Travel Ticket Management (Default)',
    route: '/travel_ticket_management',
    file: '38-travel-ticket-management.png',
    overview: 'Default travel module route; currently lands on personal travel request list.',
    useCases: [
      'Open travel request pipeline from module root.',
      'Create a new travel request quickly.',
      'Review current personal request status.'
    ],
    tips: [
      'Use status filter before raising follow-up requests.',
      'Keep request purpose clear for faster approvals.',
      'Expect this route to open the request-details screen.'
    ]
  },
  {
    title: 'Travel Request Details',
    route: '/travel_ticket_management/travel_request_details',
    file: '39-travel-ticket-management-travel-request-details.png',
    overview: 'Detailed list of submitted personal travel requests and their statuses.',
    useCases: [
      'Create new travel requests.',
      'Track request history and current status.',
      'Use table actions to manage request lifecycle.'
    ],
    tips: [
      'Set status filter to locate pending requests.',
      'Review requester/purpose columns before updates.',
      'Use this page as your primary travel self-service view.'
    ]
  },
  {
    title: 'Approval Request Details',
    route: '/travel_ticket_management/approvals_request_details',
    file: '40-travel-ticket-management-approvals-request-details.png',
    overview: 'Manager/admin approval console for team travel requests by decision state.',
    useCases: [
      'Review pending travel approvals.',
      'Track approved/rejected totals at the top cards.',
      'Filter and process requests by status.'
    ],
    tips: [
      'Prioritize pending queue during daily review.',
      'Use status dropdown to focus on bottlenecks.',
      'Validate trip purpose and dates before approval.'
    ]
  },
  {
    title: 'Notifications',
    route: '/notifications',
    file: '41-notifications.png',
    overview: 'Central notification inbox grouped by all/unread/read tabs.',
    useCases: [
      'View system and workflow alerts.',
      'Switch between unread and read message groups.',
      'Confirm no missed operational notifications.'
    ],
    tips: [
      'Check unread tab first at day start.',
      'Use notifications after major approvals/actions.',
      'Clear old alerts regularly for signal quality.'
    ]
  },
  {
    title: 'Organizations',
    route: '/organizations',
    file: '42-organizations.png',
    overview: 'Organization management console for multi-company setup and access scope.',
    useCases: [
      'Create new organizations.',
      'Review active/inactive org counts and cards.',
      'Manage org-level settings from card actions.'
    ],
    tips: [
      'Use status filter to monitor inactive organizations.',
      'Verify timezone/currency when onboarding orgs.',
      'Use search for quick org lookups in large lists.'
    ]
  }
];

function assertScreenshotsExist() {
  const missing = pages
    .map((p) => p.file)
    .filter((f) => !fs.existsSync(path.join(OUTPUT_DIR, 'screenshots', f)));
  if (missing.length) {
    throw new Error(`Missing screenshots: ${missing.join(', ')}`);
  }
}

function buildMarkdown() {
  const lines = [];
  lines.push('# HRMS First-Visitor Manual (UI-Visible)');
  lines.push('');
  lines.push('Generated from live UI capture on **February 23, 2026** at **https://hrms.srj.group**.');
  lines.push('');
  lines.push('## Scope');
  lines.push('- Frontend-visible walkthrough only.');
  lines.push('- Content is based on currently visible UI pages and controls.');
  lines.push('- No backend-driven manual content is used.');
  lines.push('');
  lines.push('## First-Time Steps');
  lines.push('1. Open the login page and sign in.');
  lines.push('2. Start from Dashboard and use the left sidebar for module navigation.');
  lines.push('3. Use page-level filters/search before taking row actions.');
  lines.push('4. Use export and action buttons where available.');
  lines.push('');
  lines.push('## Screen Index');
  pages.forEach((p, i) => lines.push(`${i + 1}. **${p.title}** - \`${p.route}\``));
  lines.push('');
  lines.push('---');
  lines.push('');

  pages.forEach((p, i) => {
    lines.push(`## ${i + 1}. ${p.title}`);
    lines.push(`**Route:** \`${p.route}\``);
    lines.push('');
    lines.push(`![${p.title}](screenshots/${p.file})`);
    lines.push('');
    lines.push('**Page Overview**');
    lines.push(`- ${p.overview}`);
    lines.push('');
    lines.push('**What You Can Do Here**');
    p.useCases.forEach((u) => lines.push(`- ${u}`));
    lines.push('');
    lines.push('**Quick Tips**');
    p.tips.forEach((t) => lines.push(`- ${t}`));
    lines.push('');
    lines.push('---');
    lines.push('');
  });

  return lines.join('\n');
}

function esc(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function buildHtml() {
  const toc = pages
    .map((p, i) => `<a href="#s${i + 1}">${i + 1}. ${esc(p.title)}</a>`)
    .join('');

  const cards = pages
    .map(
      (p, i) => `
<section class="card" id="s${i + 1}">
  <div class="meta">
    <span class="num">${i + 1}</span>
    <div>
      <h2>${esc(p.title)}</h2>
      <p><code>${esc(p.route)}</code></p>
    </div>
  </div>
  <img src="screenshots/${esc(p.file)}" alt="${esc(p.title)} screen" loading="lazy" />
  <div class="block">
    <h3>Page Overview</h3>
    <p>${esc(p.overview)}</p>
  </div>
  <div class="block">
    <h3>What You Can Do Here</h3>
    <ul>${p.useCases.map((u) => `<li>${esc(u)}</li>`).join('')}</ul>
  </div>
  <div class="block">
    <h3>Quick Tips</h3>
    <ul>${p.tips.map((t) => `<li>${esc(t)}</li>`).join('')}</ul>
  </div>
</section>`
    )
    .join('\n');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>HRMS UI-Visible User Manual</title>
  <style>
    :root {
      --bg: #f2f4f8;
      --ink: #182033;
      --muted: #5b6580;
      --brand: #2f61e9;
      --brand2: #16a2a5;
      --card: #ffffff;
      --line: #d9deea;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: "Segoe UI", "Helvetica Neue", Helvetica, Arial, sans-serif;
      color: var(--ink);
      background:
        radial-gradient(1200px 600px at 10% -20%, #d9e8ff 0%, transparent 60%),
        radial-gradient(1200px 600px at 90% -20%, #dbfff4 0%, transparent 55%),
        var(--bg);
    }
    .hero {
      padding: 42px 22px 24px;
      border-bottom: 1px solid var(--line);
      background: linear-gradient(120deg, rgba(47, 97, 233, 0.12), rgba(22, 162, 165, 0.1));
    }
    .hero h1 { margin: 0 0 8px; font-size: clamp(26px, 4vw, 40px); }
    .hero p { margin: 0; color: var(--muted); font-size: 15px; }
    .chips { margin-top: 14px; display: flex; flex-wrap: wrap; gap: 8px; }
    .chip {
      border: 1px solid var(--line);
      background: #fff;
      padding: 6px 10px;
      border-radius: 999px;
      font-size: 12px;
      color: var(--muted);
    }
    .wrap { display: grid; grid-template-columns: 300px 1fr; gap: 18px; padding: 18px; }
    .toc {
      position: sticky;
      top: 12px;
      align-self: start;
      max-height: calc(100vh - 24px);
      overflow: auto;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: var(--card);
      padding: 12px;
    }
    .toc h3 {
      margin: 4px 8px 10px;
      font-size: 14px;
      text-transform: uppercase;
      color: var(--muted);
      letter-spacing: 0.5px;
    }
    .toc a {
      display: block;
      text-decoration: none;
      color: var(--ink);
      font-size: 13px;
      padding: 8px 10px;
      border-radius: 8px;
      line-height: 1.35;
    }
    .toc a:hover { background: #eef3ff; }
    .grid { display: grid; gap: 16px; }
    .card {
      border: 1px solid var(--line);
      border-radius: 16px;
      background: var(--card);
      padding: 14px;
      box-shadow: 0 8px 22px rgba(18, 31, 65, 0.06);
    }
    .meta { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
    .num {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      font-weight: 700;
      color: white;
      background: linear-gradient(135deg, var(--brand), var(--brand2));
      flex: 0 0 auto;
      font-size: 13px;
    }
    h2 { margin: 0; font-size: 20px; }
    .meta p { margin: 2px 0 0; color: var(--muted); font-size: 13px; }
    code {
      background: #eef2fb;
      border: 1px solid #d8e0f2;
      border-radius: 6px;
      padding: 1px 6px;
    }
    img {
      width: 100%;
      border-radius: 10px;
      border: 1px solid var(--line);
      margin-top: 6px;
      background: #f8faff;
    }
    .block { margin-top: 10px; }
    .block h3 { margin: 0 0 6px; font-size: 14px; color: #26324f; }
    .block p { margin: 0; color: #27314a; }
    ul { margin: 0; padding-left: 18px; color: var(--muted); }
    li { margin: 4px 0; }
    @media (max-width: 980px) {
      .wrap { grid-template-columns: 1fr; }
      .toc { position: relative; max-height: 280px; }
    }
  </style>
</head>
<body>
  <header class="hero">
    <h1>HRMS First-Visitor Manual</h1>
    <p>UI-visible guide generated from live navigation at <strong>https://hrms.srj.group</strong> on <strong>February 23, 2026</strong>.</p>
    <div class="chips">
      <span class="chip">Frontend-only manual</span>
      <span class="chip">No backend dependency</span>
      <span class="chip">No role/org branching in manual content</span>
      <span class="chip">41 page sections</span>
    </div>
  </header>
  <main class="wrap">
    <aside class="toc">
      <h3>Screen Index</h3>
      ${toc}
    </aside>
    <section class="grid">
      ${cards}
    </section>
  </main>
</body>
</html>`;
}

function writeOutputs() {
  assertScreenshotsExist();
  fs.writeFileSync(path.join(OUTPUT_DIR, 'HRMS_UI_Visible_User_Manual.md'), buildMarkdown());
  fs.writeFileSync(path.join(OUTPUT_DIR, 'HRMS_UI_Visible_User_Manual.html'), buildHtml());
}

writeOutputs();
console.log(`Updated manual files for ${pages.length} pages.`);
