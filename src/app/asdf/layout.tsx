interface LayoutProps {
  children: React.ReactNode;
}
export default function DashboardLayout({ children }: LayoutProps) {
  return <section className="font-mono text-sm text-green-600">{children}</section>;
}
