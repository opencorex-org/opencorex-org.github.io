import SiteFrame from "@/components/common/site-frame";

const DocsLayout = ({ children }: { children: React.ReactNode }) => {
  return <SiteFrame>{children}</SiteFrame>;
};

export default DocsLayout;
