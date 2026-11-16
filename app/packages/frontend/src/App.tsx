
import { useMemo, useState } from 'react';
import {
  Activity,
  AlertCircle,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  FileBarChart,
  FolderKanban,
  LayoutDashboard,
  Moon,
  Search,
  ShieldAlert,
  Sparkles,
  Sun,
  Wallet,
} from 'lucide-react';

import { useTheme } from './hooks/theme.context';

const navigation = [
  { label: 'Overview', icon: LayoutDashboard },
  { label: 'Project Portfolio', icon: FolderKanban },
  { label: 'Budget Monitoring', icon: Wallet },
  { label: 'Milestones', icon: CalendarDays },
  { label: 'Risk Management', icon: ShieldAlert },
  { label: 'AI Insights', icon: Sparkles },
  { label: 'Reports & Analytics', icon: FileBarChart },
];

const projects = [
  {
    code: 'PRJ-001',
    name: 'Digital Services Upgrade',
    manager: 'Project Manager A',
    status: 'On track',
    progress: 78,
    budget: 'KES 4.8M',
  },
  {
    code: 'PRJ-002',
    name: 'ERP Modernisation',
    manager: 'Project Manager B',
    status: 'At risk',
    progress: 52,
    budget: 'KES 8.2M',
  },
  {
    code: 'PRJ-003',
    name: 'Regional Logistics Expansion',
    manager: 'Project Manager C',
    status: 'On track',
    progress: 64,
    budget: 'KES 3.5M',
  },
  {
    code: 'PRJ-004',
    name: 'Customer Experience Platform',
    manager: 'Project Manager D',
    status: 'Delayed',
    progress: 31,
    budget: 'KES 5.1M',
  },
];

const milestones = [
  { name: 'Requirements approval', project: 'ERP Modernisation', date: '18 Nov 2026', status: 'Due soon' },
  { name: 'System testing', project: 'Digital Services Upgrade', date: '21 Nov 2026', status: 'On track' },
  { name: 'Phase 1 delivery', project: 'Regional Logistics Expansion', date: '25 Nov 2026', status: 'On track' },
];

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('Overview');
  const [search, setSearch] = useState('');

  const filteredProjects = useMemo(
    () =>
      projects.filter((project) =>
        `${project.name} ${project.code} ${project.manager}`
          .toLowerCase()
          .includes(search.toLowerCase())
      ),
    [search]
  );

  const activeNavigation = navigation.find(
    (item) => item.label === activeSection
  );
  const ActiveIcon = activeNavigation?.icon ?? LayoutDashboard;

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card md:flex">
        <div className="flex h-20 items-center gap-3 border-b border-border px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Activity size={23} />
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-tight">ProjectPulse</h1>
            <p className="text-xs text-muted-foreground">Project Intelligence</p>
          </div>
        </div>

        <div className="px-4 pt-7">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Workspace
          </p>

          <nav className="space-y-1" aria-label="Main navigation">
            {navigation.map((item) => {
              const Icon = item.icon;
              const selected = activeSection === item.label;

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => setActiveSection(item.label)}
                  aria-current={selected ? 'page' : undefined}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                    selected
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                  }`}
                >
                  <Icon size={19} />
                  <span>{item.label}</span>
                  {selected && <span className="ml-auto h-2 w-2 rounded-full bg-primary" />}
                </button>
              );
            })}
          </nav>
        </div>

        <div className="mt-auto border-t border-border p-5">
          <div className="rounded-xl bg-muted p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-semibold">
              <Sparkles size={16} className="text-primary" />
              AI-powered insights
            </div>
            <p className="text-xs leading-5 text-muted-foreground">
              Project intelligence and early warning insights are planned for a
              future development phase.
            </p>
          </div>
          <p className="mt-5 text-center text-xs text-muted-foreground">
            ProjectPulse · Development Preview
          </p>
        </div>
      </aside>

      <main className="min-w-0 flex-1">
        <header className="sticky top-0 z-10 flex min-h-20 items-center justify-between gap-4 border-b border-border bg-background/95 px-5 backdrop-blur md:px-8">
          <div>
            <p className="text-xs text-muted-foreground">ProjectPulse / Workspace</p>
            <h2 className="mt-1 text-lg font-semibold">{activeSection}</h2>
          </div>

          <div className="flex items-center gap-2">
            <label className="hidden h-10 items-center gap-2 rounded-lg border border-input bg-card px-3 sm:flex">
              <Search size={17} className="text-muted-foreground" />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search projects..."
                aria-label="Search projects"
                className="w-36 bg-transparent text-sm outline-none placeholder:text-muted-foreground lg:w-52"
              />
            </label>

            <button
              type="button"
              aria-label="Notifications"
              title="Notifications"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Bell size={19} />
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {isDark ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <div className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
              PP
            </div>
          </div>
        </header>

        <div className="p-5 md:p-8">
          {activeSection === 'Overview' ? (
            <>
              <div className="mb-7 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    SAMPLE DATA · DEVELOPMENT PREVIEW
                  </div>
                  <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                    Executive Overview
                  </h1>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A consolidated view of project performance, budgets and delivery.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSection('Project Portfolio')}
                  className="flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  View portfolio
                  <ArrowUpRight size={16} />
                </button>
              </div>

              <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4" aria-label="Sample project metrics">
                <MetricCard
                  label="Total projects"
                  value="24"
                  detail="Across the sample portfolio"
                  icon={FolderKanban}
                />
                <MetricCard
                  label="Active projects"
                  value="18"
                  detail="Currently in progress"
                  icon={Activity}
                />
                <MetricCard
                  label="Projects at risk"
                  value="4"
                  detail="Require management attention"
                  icon={AlertCircle}
                  alert
                />
                <MetricCard
                  label="Completed projects"
                  value="2"
                  detail="Successfully completed"
                  icon={CheckCircle2}
                />
              </section>

              <section className="mt-6 grid gap-6 xl:grid-cols-3">
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm xl:col-span-2">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold">Project portfolio</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Progress across selected sample projects
                      </p>
                    </div>
                    <span className="rounded-md bg-muted px-2 py-1 text-xs text-muted-foreground">
                      Illustrative records
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[600px] text-left text-sm">
                      <thead>
                        <tr className="border-b border-border text-xs text-muted-foreground">
                          <th className="pb-3 font-medium">Project</th>
                          <th className="pb-3 font-medium">Manager</th>
                          <th className="pb-3 font-medium">Status</th>
                          <th className="pb-3 font-medium">Progress</th>
                          <th className="pb-3 text-right font-medium">Budget</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredProjects.map((project) => (
                          <tr key={project.code} className="border-b border-border/70 last:border-0 hover:bg-accent/40">
                            <td className="py-4">
                              <p className="font-medium">{project.name}</p>
                              <p className="mt-1 text-xs text-muted-foreground">{project.code}</p>
                            </td>
                            <td className="py-4 text-muted-foreground">{project.manager}</td>
                            <td className="py-4">
                              <StatusBadge status={project.status} />
                            </td>
                            <td className="py-4">
                              <div className="flex items-center gap-2">
                                <div className="h-2 w-20 overflow-hidden rounded-full bg-muted">
                                  <div
                                    className="h-full rounded-full bg-primary"
                                    style={{ width: `${project.progress}%` }}
                                  />
                                </div>
                                <span className="text-xs tabular-nums text-muted-foreground">
                                  {project.progress}%
                                </span>
                              </div>
                            </td>
                            <td className="py-4 text-right font-medium tabular-nums">
                              {project.budget}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {filteredProjects.length === 0 && (
                      <p className="py-8 text-center text-sm text-muted-foreground">
                        No sample projects match your search.
                      </p>
                    )}
                  </div>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-5">
                    <h3 className="font-semibold">Budget health</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Illustrative portfolio figures
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground">Approved budget</p>
                  <p className="mt-1 text-3xl font-bold tracking-tight tabular-nums">
                    KES 21.6M
                  </p>

                  <div className="mt-6 flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Budget utilisation</span>
                    <span className="font-semibold">68%</span>
                  </div>
                  <div className="mt-2 h-3 overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[68%] rounded-full bg-primary" />
                  </div>

                  <div className="mt-5 space-y-4">
                    <BudgetLine label="Actual spend" amount="KES 14.7M" />
                    <BudgetLine label="Remaining budget" amount="KES 6.9M" />
                    <BudgetLine label="Forecast spend" amount="KES 19.2M" />
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveSection('Budget Monitoring')}
                    className="mt-6 flex w-full items-center justify-between border-t border-border pt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    View budget details
                    <ChevronRight size={17} />
                  </button>
                </div>
              </section>

              <section className="mt-6 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Upcoming milestones</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Important upcoming delivery dates
                      </p>
                    </div>
                    <CalendarDays size={20} className="text-muted-foreground" />
                  </div>

                  <div className="space-y-5">
                    {milestones.map((milestone) => (
                      <div key={milestone.name} className="flex gap-3">
                        <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <Clock3 size={17} />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold">{milestone.name}</p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {milestone.project}
                          </p>
                          <p className="mt-1 text-xs text-muted-foreground">
                            {milestone.date}
                          </p>
                        </div>
                        <span className="self-center text-xs text-muted-foreground">
                          {milestone.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveSection('Milestones')}
                    className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    View all milestones <ChevronRight size={16} />
                  </button>
                </div>

                <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
                  <div className="mb-5 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">Priority attention</h3>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Sample risks requiring review
                      </p>
                    </div>
                    <ShieldAlert size={20} className="text-destructive" />
                  </div>

                  <div className="space-y-4">
                    <RiskLine
                      title="ERP Modernisation"
                      description="Potential delay in requirements approval"
                      severity="High"
                    />
                    <RiskLine
                      title="Customer Experience Platform"
                      description="Delivery progress behind the sample schedule"
                      severity="Medium"
                    />
                    <RiskLine
                      title="Regional Logistics Expansion"
                      description="Supplier dependency requires monitoring"
                      severity="Medium"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveSection('Risk Management')}
                    className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-sm font-semibold text-primary hover:underline"
                  >
                    Review risks <ChevronRight size={16} />
                  </button>
                </div>
              </section>

              <p className="mt-8 text-center text-xs text-muted-foreground">
                ProjectPulse development preview · All displayed figures and records are illustrative sample data.
              </p>
            </>
          ) : (
            <section className="flex min-h-[420px] flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ActiveIcon size={27} />
              </div>
              <h2 className="text-xl font-bold">{activeSection}</h2>
              <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                This module is part of the ProjectPulse roadmap. Its interface
                and data operations will be implemented in the next development
                steps.
              </p>
              <button
                type="button"
                onClick={() => setActiveSection('Overview')}
                className="mt-5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:opacity-90"
              >
                Return to overview
              </button>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
  icon: Icon,
  alert = false,
}: {
  label: string;
  value: string;
  detail: string;
  icon: typeof Activity;
  alert?: boolean;
}) {
  return (
    <article className="rounded-xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${alert ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
          <Icon size={19} />
        </div>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight tabular-nums">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">{detail}</p>
    </article>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isRisk = status === 'At risk' || status === 'Delayed';

  return (
    <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${isRisk ? 'bg-destructive/10 text-destructive' : 'bg-primary/10 text-primary'}`}>
      {status}
    </span>
  );
}

function BudgetLine({ label, amount }: { label: string; amount: string }) {
  return (
    <div className="flex items-center justify-between gap-3 text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="font-semibold tabular-nums">{amount}</span>
    </div>
  );
}

function RiskLine({
  title,
  description,
  severity,
}: {
  title: string;
  description: string;
  severity: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-destructive" />
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold">{title}</p>
          <span className="text-xs font-medium text-destructive">{severity}</span>
        </div>
        <p className="mt-1 text-xs leading-5 text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}

export default App;
